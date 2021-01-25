<template>
  <div class="container-xl py-lg-5 py-3">
    <div class="quiz-list">
      <quiz-overview
        v-for="(quiz, index) in quizzes"
        :key="index"
        :initialQuiz="quiz"
        class="mb-lg-3 mb-2"
      >
      </quiz-overview>
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

<style lang="scss"></style>
