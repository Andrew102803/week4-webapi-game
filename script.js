
document.addEventListener("DOMContentLoaded", function(event) { 

})

//questions and the correct answer

var questions = [
  {
      questionTitle: "WhatsApp concurrent model is implemented using _____ programming language.",
      choice1: "Java",
      choice2: "Node.js",
      choice3: "Erlang      ",
      choice4: "C",
      correct: "C"
  },
  {
      questionTitle: "Which of the following is not a type of computer code related to Program Execution",
      choice1: "Source code",
      choice2: "Bytecode",
      choice3: "Machine Code",
      choice4: "Hex Code",
      correct: "D"
  },
  {
      questionTitle: "Which of the following is an apt description for an algorithm",
      choice1: "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
      choice2: "Program statements that run to execute a task.",
      choice3: "A set of instructions written in a programming language to perform a task.",
      choice4: "Set of instructions decoded from a high-level programming code to perform the task.",
      correct: "A"
  },
  {
      questionTitle: "Which of the following includes Chrome's V8 JavaScript Engine?",
      choice1: "jQuery",
      choice2: "java",
      choice3: "npm",
      choice4: "Node.js",
      correct: "D"
  },
  {//this is a cry for help
      questionTitle: "Python is",
      choice1: "High level",
      choice2: "dummy stuff",
      choice3: "i am actually tired",
      choice4: "why am i doing this",
      correct: "A"
  }
]

//declares variables n 
var start = document.querySelector("#start");
var sec = 75;
var quiz = document.querySelector("#quiz");
var thetime = document.querySelector("#thetime");
var seehighscores = document.querySelector("#viewhighscores")
var questionTitle = document.querySelector("#title");
//letters
var choice1 = document.querySelector("#A");
var choice2 = document.querySelector("#B");
var choice3 = document.querySelector("#C");
var choice4 = document.querySelector("#D");



var lastQuestionIndex = questions.length - 1;
var currentQuestionIndex = 0;
const questionTime = 15;
var count = 75;
var score = 0;
var TIMER;
