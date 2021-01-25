<template>
  <div class="container-xl py-lg-5 py-3">
    <transition name="quiz-details-div-transition-fade" mode="out-in">
      <div v-if="!quizFinished" key="quizDetails">
        <div class="quiz-details-div">
          <img
            class="quiz-details-image"
            :src="require(`../assets/${quiz.solutions[0].image}`)"
          />
          <img
            class="quiz-details-image"
            :src="require(`../assets/${quiz.solutions[1].image}`)"
          />
          <img
            class="quiz-details-image"
            :src="require(`../assets/${quiz.solutions[2].image}`)"
          />
          <img
            class="quiz-details-image"
            :src="require(`../assets/${quiz.solutions[3].image}`)"
          />
          <div class="quiz-name-div">
            <p class="text-overflow-ellipsis-3">{{ quiz.name }}</p>
          </div>
        </div>
        <div class="row quiz-progress-bar mt-2 mt-lg-4">
          <div
            v-for="(bar, index) in quiz.questions.length"
            :key="index"
            class="col p-0 quiz-progress-bar-element"
            :class="{'col p-0 quiz-progress-bar-element active': index == questionIndex,  'col p-0 quiz-progress-bar-element completed': index < questionIndex , 'col p-0 quiz-progress-bar-element': true}"
          ></div>
        </div>
        <div class="question-slide-div  mt-2 mt-lg-4">
          <transition :name="questionDivSlideDirection">
            <div :key="questionIndex">
              <div class="row question-div">
                {{ quiz.questions[questionIndex].question }}
              </div>
              <transition name="answer-not-selected-transition">
                <div
                  v-if="answerNotSelected"
                  class="answer-not-selected-error-div"
                >
                  Musisz wybrać odpowiedz, aby przejść dalej!
                </div>
              </transition>

              <div class="row mt-2 mt-lg-4">
                <div class="col-6 p-0 pr-1 pr-lg-2">
                  <input
                    type="radio"
                    name="answer"
                    id="answer-1"
                    :value="quiz.questions[questionIndex].answers[0].value"
                    v-model="answerValue"
                    class="answer-radio-input"
                  />
                  <label for="answer-1" class="answer-label">
                    <div class="answers-div">
                      {{ quiz.questions[questionIndex].answers[0].text }}
                    </div>
                  </label>
                </div>
                <div class="col-6 p-0  pl-1 pl-lg-2">
                  <input
                    type="radio"
                    name="answer"
                    id="answer-2"
                    :value="quiz.questions[questionIndex].answers[1].value"
                    v-model="answerValue"
                    class="answer-radio-input"
                  />
                  <label for="answer-2" class="answer-label">
                    <div class="answers-div">
                      {{ quiz.questions[questionIndex].answers[1].text }}
                    </div>
                  </label>
                </div>
              </div>
              <div class="row mt-2 mt-lg-4">
                <div class="col-6 p-0  pr-1 pr-lg-2">
                  <input
                    type="radio"
                    name="answer"
                    id="answer-3"
                    :value="quiz.questions[questionIndex].answers[2].value"
                    v-model="answerValue"
                    class="answer-radio-input"
                  />
                  <label for="answer-3" class="answer-label">
                    <div class="answers-div">
                      {{ quiz.questions[questionIndex].answers[2].text }}
                    </div>
                  </label>
                </div>
                <div class="col-6 p-0  pl-1 pl-lg-2">
                  <input
                    type="radio"
                    name="answer"
                    id="answer-4"
                    :value="quiz.questions[questionIndex].answers[3].value"
                    v-model="answerValue"
                    class="answer-radio-input"
                  />
                  <label for="answer-4" class="answer-label">
                    <div class="answers-div">
                      {{ quiz.questions[questionIndex].answers[3].text }}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="row mt-2 mt-lg-4">
          <div class="col-6 p-0 pr-1 pr-lg-2">
            <div
              class="quiz-details-button-left"
              @click="decreaseQuestionIndex"
            >
              <div class="button-text">
                <p>poprzednie</p>
              </div>
              <div class="button-icon">
                <i class="fas fa-chevron-left"></i>
              </div>
            </div>
          </div>
          <div class="col-6 p-0 pl-1 pl-lg-2 d-flex justify-content-end">
            <div
              class="quiz-details-button-right"
              @click="increaseQuestionIndex"
            >
              <div class="button-text">
                <p>następne</p>
              </div>
              <div class="button-icon">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="solution-div" key="quizSolution">
        <div class="quiz-solution-name">
          <p>{{ solution.name }}</p>
        </div>
        <div class="d-flex justify-content-center mt-2 mt-lg-4">
          <img
            class="quiz-solution-image"
            :src="require(`../assets/${solution.image}`)"
          />
        </div>
        <div class="quiz-solution-description mt-2 mt-lg-4">
          <p>{{ solution.description }}</p>
        </div>
        <div class="row mt-2 mt-lg-4">
          <div class="col-6 p-0 pr-1 pr-lg-2">
            <router-link class="custom-router-link" to="/">
              <div class="quiz-solution-button-home">
                <div class="button-text">
                  <p>główna</p>
                </div>
                <div class="button-icon">
                  <i class="fas fa-home"></i>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 p-0 pl-1 pl-lg-2 d-flex justify-content-end">
            <div class="quiz-solution-button-replay" @click="reloadPage">
              <div class="button-text">
                <p>jeszcze raz</p>
              </div>
              <div class="button-icon">
                <i class="fas fa-undo-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "QuizDetails",
  data() {
    return {
      quiz: "",
      questionIndex: "0",
      answerValue: "",
      answersValuesArray: [],
      quizFinished: false,
      quizFinalValue: "",
      solution: "",
      answerNotSelected: false,
      questionDivSlideDirection: "question-div-transition-slide-left",
    };
  },
  methods: {
    getQuizById() {
      var id = this.$route.params.id;
      this.quiz = this.$store.state.quizzes.find(function(quiz) {
        return quiz.id == id;
      });
    },
    increaseQuestionIndex() {
      if (this.answerValue != "") {
        if (this.questionIndex < this.quiz.questions.length - 1) {
          this.questionDivSlideDirection =
            "question-div-transition-slide-right";
          this.questionIndex++;
          this.answersValuesArray.push(this.answerValue);
          this.answerValue = "";
          this.answerNotSelected = false;
        } else {
          this.answersValuesArray.push(this.answerValue);
          this.answerValue = "";
          this.answerNotSelected = false;
          this.quizFinalValue = this.answersValuesArray.reduce(
            (a, b) => a + b,
            0
          );
          this.quizFinished = true;
          var finalValue = this.quizFinalValue;
          var recivedSolution = "";
          this.quiz.solutions.forEach((solution) => {
            if (
              finalValue >= solution.minValue &&
              finalValue <= solution.maxValue
            ) {
              recivedSolution = solution;
            }
          });
          this.solution = recivedSolution;
        }
      } else {
        this.answerNotSelected = true;
      }
    },
    decreaseQuestionIndex() {
      if (this.questionIndex > 0) {
        this.questionDivSlideDirection = "question-div-transition-slide-left";
        this.questionIndex--;
        this.answersValuesArray.pop();
        this.answerValue = "";
        this.answerNotSelected = false;
      }
    },
    reloadPage() {
      this.$router.go();
    },
  },
  created() {
    this.getQuizById();
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

.quiz-details-div {
  position: relative;
  height: 150px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(130, 61, 173, 0.6);
  }
}
.quiz-details-image {
  height: 100%;
  width: 25%;
  object-fit: cover;
}
.quiz-name-div {
  @include flex-center();
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: $mainBlue;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 3px;
  z-index: 1;
  padding: 16px;
}
.answers-div,
.question-div {
  @include flex-center();
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  background: $mainPurple;
  padding: 16px;
  color: $mainBlue;
}

.question-div {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 2px;
  min-height: 120px;
}
.answers-div {
  position: relative;
  font-size: 25px;
  min-height: 200px;
  &:hover {
    background: rgba(130, 61, 173, 0.5);
  }
}
.answer-radio-input {
  display: none;
  &:checked {
    + .answer-label .answers-div {
      background: $mainBlue !important;
      color: $mainPurple;
    }
  }
}
.answer-label {
  width: 100%;
  cursor: pointer;
  margin: 0;
}
.answer-not-selected-error-div {
  margin-top: 1.5rem;
  max-height: 100px;
  width: 100%;
  font-size: 20px;
  background: rgb(200, 80, 80);
  color: rgb(120, 0, 0);
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  padding: 16px;
  overflow: hidden;
}
@keyframes slide-left-right {
  0% {
    transform: translate(-200%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(200%);
    opacity: 0;
  }
}
@keyframes slide-right-left {
  0% {
    transform: translate(200%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-200%);
    opacity: 0;
  }
}
.quiz-details-button {
  &-left,
  &-right {
    position: relative;
    height: 100px;
    width: 50%;
    border-radius: 6px;
    color: $mainBlue;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      & .button-icon {
        width: 100%;
        background: $mainBlue;
        color: $mainPurple;
      }
    }
    &:active {
      transform: scale(0.9);
      & .button-icon {
        box-shadow: 0px 0px 5px -4px rgba(0, 0, 0, 0.3);
      }
      & .button-text {
        transform: scale(0.95);
      }
    }
  }
  &-left {
    &:hover {
      & .button-text {
        left: 0%;
        box-shadow: 0 0 0 0;
      }
      & .button-icon i {
        animation: slide-right-left 1s infinite;
      }
    }
  }
  &-right {
    &:hover {
      & .button-text {
        right: 0%;
        box-shadow: 0 0 0 0;
      }
      & .button-icon i {
        animation: slide-left-right 1s infinite;
      }
    }
  }
  &-left .button-icon,
  &-right .button-icon {
    @include flex-center();
    position: absolute;
    height: 100%;
    width: 25%;
    top: 0;
    font-size: 70px;
    background: $mainPurple;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
    overflow: hidden;
  }
  &-left .button-icon {
    left: 0;
  }
  &-right .button-icon {
    right: 0;
  }
  &-left .button-text,
  &-right .button-text {
    @include flex-center();
    position: absolute;
    height: 100%;
    width: 70%;
    top: 0;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: $mainPurple;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
  }
  &-left .button-text {
    left: 30%;
  }
  &-right .button-text {
    right: 30%;
  }
}

.solution-div {
  position: relative;
}
.quiz-solution-name,
.quiz-solution-description {
  background: $mainPurple;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  padding: 16px;
  color: $mainBlue;
}
.quiz-solution-name {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 3px;
}
.quiz-solution-description {
  font-size: 25px;
}
.quiz-solution-image {
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  width: auto;
  max-width: 100%;
  height: 550px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.quiz-solution-button {
  &-home,
  &-replay {
    position: relative;
    height: 100px;
    width: 50%;
    border-radius: 6px;
    color: $mainBlue;
    cursor: pointer;
    &:hover {
      & .button-icon {
        width: 100%;
        background: $mainBlue;
        color: $mainPurple;
      }
    }
    &:active {
      transform: scale(0.9);
      & .button-icon {
        box-shadow: 0px 0px 5px -4px rgba(0, 0, 0, 0.3);
      }
      & .button-text {
        transform: scale(0.95);
      }
    }
  }
  &-home {
    &:hover {
      & .button-text {
        left: 0%;
        box-shadow: 0 0 0 0;
      }
      & .button-icon i {
        animation: grow 1s infinite;
      }
    }
  }
  &-replay {
    &:hover {
      & .button-text {
        right: 0%;
        box-shadow: 0 0 0 0;
      }
      & .button-icon i {
        animation: spin 1s infinite;
      }
    }
  }
  &-home .button-icon,
  &-replay .button-icon {
    @include flex-center();
    position: absolute;
    height: 100%;
    width: 25%;
    top: 0;
    font-size: 50px;
    background: $mainPurple;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    transition: width 0.2s ease-in-out;
    overflow: hidden;
  }
  &-home .button-icon {
    left: 0;
  }
  &-replay .button-icon {
    right: 0;
  }
  &-home .button-text,
  &-replay .button-text {
    @include flex-center();
    position: absolute;
    height: 100%;
    width: 70%;
    top: 0;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: $mainPurple;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
  }
  &-home .button-text {
    left: 30%;
  }
  &-replay .button-text {
    right: 30%;
  }
}

.quiz-progress-bar {
  height: 20px;
  width: 100%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: black;
  &-element {
    background: rgb(190, 190, 190);
    margin-right: 1px;
    &:last-child {
      margin-right: -1px;
    }
    &.completed {
      background: rgb(0, 182, 142);
    }
    &.active {
      background: $mainBlue;
    }
  }
}

.question-slide-div {
  position: relative;
}
.question-div-transition-slide-left {
  &-enter {
    transform: translateX(-30%);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(30%);
    opacity: 0;
  }
  &-enter-active {
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
.question-div-transition-slide-right {
  &-enter {
    transform: translateX(30%);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(-30%);
    opacity: 0;
  }
  &-enter-active {
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
.quiz-details-div-transition-fade {
  &-enter {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.2s ease-in-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
}

.answer-not-selected-transition {
  &-enter {
    max-height: 0;
    padding: 0;
    margin: 0;
    transform: scaleY(0);
  }
  &-leave-to {
    max-height: 0;
    padding: 0;
    margin: 0;
    transform: scaleY(0);
  }
  &-enter-active {
    transition: all 0.3s ease-in-out;
  }
  &-leave-active {
    transition: all 0.3s ease-in-out;
  }
}

@media (max-width: 1200px) {
  .quiz-name-div {
    font-size: 35px;
  }
  .question-div {
    font-size: 25px;
  }
  .answers-div {
    font-size: 22px;
  }
  .quiz-details-button {
    &-left,
    &-right {
      & .button-text {
        display: none;
      }
      & .button-icon {
        width: 100%;
      }
    }
  }
  .quiz-solution-button {
    &-home,
    &-replay {
      & .button-text {
        display: none;
      }
      & .button-icon {
        width: 100%;
      }
    }
  }
}
@media (max-width: 992px) {
  .answer-not-selected-error-div {
    margin-top: 0.5rem;
  }
}
@media (max-width: 768px) {
  .quiz-name-div {
    font-size: 30px;
  }
  .question-div {
    font-size: 22px;
  }
  .answers-div {
    font-size: 18px;
  }
  .quiz-solution-name {
    font-size: 30px;
    letter-spacing: 2px;
  }
  .quiz-solution-description {
    font-size: 18px;
  }
}
@media (max-width: 576px) {
  .quiz-name-div {
    font-size: 22px;
  }
  .question-div {
    font-size: 18px;
  }
  .answers-div {
    font-size: 16px;
  }
  .quiz-solution-name {
    font-size: 25px;
    letter-spacing: 1px;
  }
  .quiz-solution-description {
    font-size: 15px;
  }
}
</style>
