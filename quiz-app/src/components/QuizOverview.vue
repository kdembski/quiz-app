<template>
  <div>
    <router-link
      :to="{ name: 'QuizDetails', params: { id: quiz.id } }"
      class="custom-router-link"
    >
      <div class="quiz-overview">
        <img
          class="quiz-overview-image"
          :src="require(`../assets/${quiz.solutions[0].image}`)"
        />
        <img
          class="quiz-overview-image"
          :src="require(`../assets/${quiz.solutions[1].image}`)"
        />
        <img
          class="quiz-overview-image"
          :src="require(`../assets/${quiz.solutions[2].image}`)"
        />
        <img
          class="quiz-overview-image"
          :src="require(`../assets/${quiz.solutions[3].image}`)"
        />
        <div class="quiz-overview-name">
          <p class="text-overflow-ellipsis-2">{{ quiz.name }}</p>
        </div>
        <div class="quiz-overview-description">
          <p class="text-overflow-ellipsis-2">{{ quiz.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "QuizOverview",
  props: ["initialQuiz"],
  computed: {
    quiz: function() {
      return this.initialQuiz;
    },
  },
};
</script>

<style lang="scss">
$mainBlue: rgb(94, 242, 255);
$mainPurple: rgb(184, 64, 235);
$mainPurpleAlfa: rgba($mainPurple, 0.7);
$mainGreen: rgb(63, 212, 155);
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-overview {
  position: relative;
  width: 100%;
  height: 180px;
  background: $mainPurple;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($mainPurple, 0.9);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    &::after {
      background: rgba(94, 242, 255, 0.9);
    }
    & .quiz-overview-image {
      filter: blur(0px);
    }
    & .quiz-overview-name {
      color: $mainPurple;
      top: 10%;
    }
    & .quiz-overview-description {
      color: $mainPurple;
      bottom: 10%;
      opacity: 1;
    }
  }
}

.quiz-overview-image {
  height: 100%;
  width: 25%;
  object-fit: cover;
  filter: blur(4px);
  transition: all 0.2s ease-in-out;
}

.quiz-overview-name,
.quiz-overview-description {
  @include flex-center();
  position: absolute;
  left: 0;
  padding: 0px 15px;
  color: $mainBlue;
  z-index: 1;
  height: 40%;
  transition: all 0.2s ease-in-out;
  line-height: 125%;
}
.quiz-overview-name {
  font-weight: 900;
  font-size: 40px;
  letter-spacing: 3px;
  top: 30%;
}
.quiz-overview-description {
  bottom: -50%;
  opacity: 0;
  font-weight: 400;
  font-size: 20px;
}
@media (max-width: 1200px) {
  .quiz-overview-name {
    font-size: 35px;
  }
  .quiz-overview-description {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .quiz-overview-name {
    font-size: 25px;
  }
  .quiz-overview-description {
    font-size: 18px;
  }
}
@media (max-width: 576px) {
  .quiz-overview-name {
    font-size: 20px;
  }
  .quiz-overview-description {
    font-size: 14px;
  }
}
</style>
