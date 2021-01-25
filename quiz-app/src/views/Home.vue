<template>
  <div class="home container-xl py-lg-5 py-3">
    <div class="introduction-div mb-lg-4 mb-3">
      <div class="introduction-header">
        Quiz app
      </div>
      Aplikacja, która udostępnia do wykonania kilka, mniej lub bardziej sensownych, quizów.
    </div>
    <div class="example-quiz-header mb-2">
      Przykładowy quiz:
    </div>

    <div class="example-quiz-container-div">
      <transition :name="exampleQuizSlideDirection">
        <div class="example-quiz-div" :key="currentExampleIndex">
          <router-link
            :to="{
              name: 'QuizDetails',
              params: { id: quizzes[currentExampleIndex].id },
            }"
            class="custom-router-link"
          >
            <img
              class="example-quiz-image"
              :src="
                require(`../assets/${quizzes[currentExampleIndex].solutions[0].image}`)
              "
            />
            <img
              class="example-quiz-image"
              :src="
                require(`../assets/${quizzes[currentExampleIndex].solutions[1].image}`)
              "
            />
            <img
              class="example-quiz-image"
              :src="
                require(`../assets/${quizzes[currentExampleIndex].solutions[2].image}`)
              "
            />
            <img
              class="example-quiz-image"
              :src="
                require(`../assets/${quizzes[currentExampleIndex].solutions[3].image}`)
              "
            />
            <div class="example-quiz-name">
              <p class="text-overflow-ellipsis-2">
                {{ quizzes[currentExampleIndex].name }}
              </p>
            </div>
            <div class="example-quiz-description">
              <p class="text-overflow-ellipsis-2">
                {{ quizzes[currentExampleIndex].description }}
              </p>
            </div>
          </router-link>
          <div
            class="example-quiz-left-arrow-div"
            @click="decreaseCurrentExampleIndex"
          >
            <i class="fas fa-chevron-left"></i>
          </div>
          <div
            class="example-quiz-right-arrow-div"
            @click="increaseCurrentExampleIndex"
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentExampleIndex: "0",
      exampleQuizSlideDirection: "example-quiz-transition-slide-left",
      changeExampleImageTimer: "",
    };
  },
  mounted() {
    this.changeExampleImageTimer = setInterval(() => {
      this.decreaseCurrentExampleIndex();
    }, 5000);
  },
  methods: {
    increaseCurrentExampleIndex() {
      this.exampleQuizSlideDirection = "example-quiz-transition-slide-right";
      this.currentExampleIndex++;
      if (this.currentExampleIndex >= this.quizzes.length) {
        this.currentExampleIndex = 0;
      }
      window.clearInterval(this.changeExampleImageTimer);
      this.changeExampleImageTimer = setInterval(() => {
        this.decreaseCurrentExampleIndex();
      }, 5000);
    },
    decreaseCurrentExampleIndex() {
      this.exampleQuizSlideDirection = "example-quiz-transition-slide-left";
      this.currentExampleIndex--;
      if (this.currentExampleIndex < 0) {
        this.currentExampleIndex = this.quizzes.length - 1;
      }
      window.clearInterval(this.changeExampleImageTimer);
      this.changeExampleImageTimer = setInterval(() => {
        this.decreaseCurrentExampleIndex();
      }, 5000);
    },
  },
  computed: {
    quizzes: function() {
      return this.$store.state.quizzes;
    },
  },
};
</script>

<style lang="scss">
$mainBlue: rgb(94, 242, 255);
$mainPurple: rgb(130, 61, 173);
$mainGreen: rgb(63, 212, 155);
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  min-height: 100%;
}
.example-quiz-header,
.introduction-div {
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  background: $mainPurple;
  padding: 16px;
  color: $mainBlue;
  font-size: 20px;
  font-weight: 400;
}
.introduction-header {
  font-size: 1.8em;
  font-weight: 900;
  margin-bottom: 10px;
  letter-spacing: 3px;
}
.example-quiz-header {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 2px;
}
.example-quiz-container-div {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 6px;
  overflow: hidden;
}
.example-quiz-div {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(130, 61, 173, 0.6);
  }
  &:hover {
    .example-quiz-left-arrow-div {
      left: 0%;
      opacity: 1;
    }
    .example-quiz-right-arrow-div {
      right: 0%;
      opacity: 1;
    }
  }
}
.example-quiz-image {
  height: 100%;
  width: 25%;
  object-fit: cover;
}
.example-quiz-name,
.example-quiz-description {
  @include flex-center();
  position: absolute;
  left: 0;
  padding: 0% 5%;
  color: $mainBlue;
  z-index: 1;
  height: 30%;
  transition: all 0.2s ease-in-out;
}
.example-quiz-name {
  font-weight: 800;
  font-size: 60px;
  top: 15%;
  letter-spacing: 3px;
}
.example-quiz-description {
  bottom: 15%;
  font-weight: 600;
  font-size: 25px;
}
.example-quiz-right-arrow-div,
.example-quiz-left-arrow-div {
  @include flex-center();
  position: absolute;
  height: 100%;
  width: 10%;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  font-size: 60px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
.example-quiz-right-arrow-div:hover,
.example-quiz-left-arrow-div:hover {
  background: rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.6);
}
.example-quiz-right-arrow-div:active i,
.example-quiz-left-arrow-div:active i {
  transform: scale(0.9);
}
.example-quiz-left-arrow-div {
  left: -25%;
}
.example-quiz-right-arrow-div {
  right: -25%;
}

.example-quiz-transition-slide-left {
  &-enter {
    transform: translateX(-100%);
  }
  &-leave-to {
    transform: translateX(100%);
  }
  &-enter-active {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
  &-leave-active {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
}
.example-quiz-transition-slide-right {
  &-enter {
    transform: translateX(100%);
  }
  &-leave-to {
    transform: translateX(-100%);
  }
  &-enter-active {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
  &-leave-active {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
}

@media (max-width: 1200px) {
  .example-quiz-name {
    font-size: 50px;
  }
  .example-quiz-description {
    font-size: 20px;
  }
  .example-quiz-right-arrow-div,
  .example-quiz-left-arrow-div {
    font-size: 6vw;
  }
  .example-quiz-header {
    font-size: 25px;
  }
  .introduction-div {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .example-quiz-name {
    font-size: 45px;
  }
  .example-quiz-description {
    font-size: 18px;
  }
  .example-quiz-right-arrow-div,
  .example-quiz-left-arrow-div {
    width: 20%;
    font-size: 10vw;
  }
  .example-quiz-header {
    font-size: 22px;
  }
  .introduction-div {
    font-size: 16px;
  }
}
@media (max-width: 576px) {
  .example-quiz-name {
    font-size: 30px;
  }
  .example-quiz-description {
    font-size: 16px;
  }
  .example-quiz-header {
    font-size: 20px;
  }
  .introduction-div {
    font-size: 14px;
  }
}
</style>
