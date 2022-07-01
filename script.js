
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

//shows questions to html
function showQuestion() {
  var currentQ = questions[currentQuestionIndex];
  title.innerHTML = "<h4>" + currentQ.questionTitle + "</h4>";
  choice1.innerHTML = currentQ.choice1;
  choice2.innerHTML = currentQ.choice2;
  choice3.innerHTML = currentQ.choice3;
  choice4.innerHTML = currentQ.choice4;
  console.log(score);
}

//time thing
function myTimer() {
  document.getElementById('timer').innerHTML = sec;
  sec--;
  if (sec == -1) {
      clearInterval(time);
      showScore();
  }
}


//Start button it darts the quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  myTimer()
  time = setInterval(myTimer, 1000);
  showQuestion();
  quiz.style.display = "block";

}
//score guide
function checkAnswer(answer){
  if( answer === questions[currentQuestionIndex].correct){

      score += 5;
      correctAnswer();
  }else{

      sec -= 15;
       wrongAnswer();
  }
  count = 0;
  if(currentQuestionIndex < lastQuestionIndex){
      currentQuestionIndex++;
      showQuestion();
  }else{

      clearInterval(time);
      showScore();
  }
}

// final score display i mean it displays the final score
function showScore(){
  quiz.style.display = "none";

  topRow.style.display = "none";

  start.style.display = "none";

  scoreContainer.style.display = "block";

  document.getElementById('finalscore').innerHTML = score;
}

//does basic stuff to put in the correct answer score
function correctAnswer() {
  var removeAfter = 0;
      document.querySelector('#rightorwrong').innerHTML = "Right!";
      removeAfter += 600;
      (function (removeAfter) {
          setTimeout(function () {
              document.querySelector("#rightorwrong").innerHTML = "";
          }, removeAfter);
      })(removeAfter);
  }

//same thing but with wrong
function wrongAnswer() {
  var removeAfter = 0;
      document.querySelector('#rightorwrong').innerHTML = "Wrong!";
      removeAfter += 600;
      (function (removeAfter) {
          setTimeout(function () {
              document.querySelector("#rightorwrong").innerHTML = "";
          }, removeAfter);
      })(removeAfter);
  }
//queryselectors woooooooooooooo
  //basicly just selects the stuff it says
  var correctIncorrect = document.querySelector("#rightorwrong");
  var addInitials = document.querySelector("#addinitials");
  var destroy = document.querySelector('#clearhighscores-button');
  var highactualscores = document.querySelector('#highscores');
  var topRow = document.querySelector('#toprow');
  var goBack = document.querySelector('#goback-button');
  var highscoreview = JSON.parse(localStorage.getItem("highscoreList")) || [];
  addInitials.addEventListener("click", function (event) {
    event.preventDefault();
  
    var initials = document.querySelector("#initials").value;
  
  //put letters in or else
    if (initials === "") {
      alert("Think your funny huh punk?, put somehting in or there will be fbi at your house eta 5 mins");
  //puts the number on the funny and sorts it
    } else {
      let newbignumber = { 'initials': initials, 'score': score };
  
      highscoreview.push(newbignumber);
      highscoreview.sort((a, b) => b.score - a.score);
      highscoreview.splice(5);
      localStorage.setItem('highscoreList', JSON.stringify(highscoreview));
  
  
  
      showdanumbers();
    }
    console.log(initials);
    console.log(score);
  
  });
  
  //Highscore Page
  //basic display work
  function showdanumbers() {
    scoreContainer.style.display = "none";

    quiz.style.display = "none";

    thetime.style.display = "none";

    start.style.display = "none";

    seehighscores.style.display = "none";

    

    document.querySelector('#toprow').style.display = "none";

    highactualscores.style.display = "block";
  
    highscoreview = JSON.parse(localStorage.getItem("highscoreList")) || [];
    console.log(highscoreview);
    highscoreview.forEach(function(highScore) {
     
      $('#highscoreslist').append(highScore.initials + "   =    Score: ", + highScore.score +"<br>");
    })
  }
