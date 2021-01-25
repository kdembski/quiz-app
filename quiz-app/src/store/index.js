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
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
        ],
        solutions: [
          {
            minValue:"1",
            maxValue:"3",
            name:"wojt",
            description:"qwerty asdfgh",
            image:"ranczo/wojt.jpg",
          },
          {
            minValue:"4",
            maxValue:"6",
            name:"ksiadz",
            description:"qwerty asdfgh",
            image:"ranczo/ksiadz.jpg",
          },
          {
            minValue:"7",
            maxValue:"9",
            name:"kusy",
            description:"qwerty asdfgh",
            image:"ranczo/kusy.png",
          },
          {
            minValue:"10",
            maxValue:"12",
            name:"arek",
            description:"qwerty asdfgh",
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
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question1",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question1",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question2",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
            ],
          },
          {
            question: "question3",
            answers: [
              { text: "answer1", value: 1},
              { text: "answer2", value: 2},
              { text: "answer3", value: 3},
              { text: "answer4", value: 4},
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
