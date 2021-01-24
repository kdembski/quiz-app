import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quizzes: [
      {
        id: "1",
        name: "Którą postacią z rancza jesteś?",
        description: "Sprawdz do której postaci z serialu ''Ranczo'' jesteś najbardziej podobny!",
        questions: [
          {
            question: "question1",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
        ],
        solutions: [
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"ranczo/wojt.jpg",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"ranczo/ksiadz.jpg",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"ranczo/kusy.png",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"ranczo/czerepach.jpg",
          },
        ],
      },
      {
        id: "2",
        name: "test2",
        description: "",
        questions: [
          {
            question: "question1",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1" },
              { text: "answer2" },
              { text: "answer3" },
              { text: "answer4" },
            ],
          },
        ],
        solutions: [
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"example.jpg",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"example.jpg",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"example.jpg",
          },
          {
            minValue:"",
            maxValue:"",
            text:"",
            image:"example.jpg",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
