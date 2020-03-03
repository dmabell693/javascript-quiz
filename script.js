var information = document.getElementById("information");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var quizQuestion = document.getElementById("quiz-question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var userScore = 0;

questionContainer.style.display= "none";

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
};

var questAnsArr = [
  new Question("What color is my hair?", ["Green", "Blue", "Blonde", "Grey"], "Blonde"),
  new Question("Who wins Super Tuesday?", ["Bernie", "Biden", "Bloomberg", "Warren"], "Bernie")
];

var timeLeft;

function beginQuiz() {
  timeLeft = 120;
  
  var timeInterval = setInterval(function() {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft === 0) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
    console.log(timeLeft);
  
  }, 1000);
  beginQuestions();
};


var beginQuestions = function() {
  event.preventDefault;
  welcomeContainer.style.display = "none";
  questionContainer.style.display= "block";

  quizQuestion.textContent = Question.text;
  var choices = Question.choices;
  for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("opt" + i);
      element.innerHTML = choices[i];
  }


}

startButton.addEventListener("click", beginQuiz);
