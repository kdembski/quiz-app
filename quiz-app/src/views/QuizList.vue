<template>
  <div class="container-xl">
    <div class="quiz-list">
      <quiz-overview
        v-for="(quiz, index) in quizzes"
        :key="index"
        :initialQuiz="quiz"
        class="mb-4"
      ></quiz-overview>
    </div>
  </div>
</template>

<script>
import QuizOverview from "../components/QuizOverview.vue";

export default {
  name: "QuizList",
  components: {
    QuizOverview,
  },
  computed: {
    quizzes: function() {
      return this.$store.state.quizzes;
    },
  },
};
</script>

<style lang="scss">
.quiz-list{
  padding: 32px 0px;
}
  
</style>
