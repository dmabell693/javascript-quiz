var information = document.getElementById("information");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var answerButtons = document.querySelector(".answer-buttons");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var quizQuestion = document.getElementById("quiz-question");
var opt1 = document.getElementById("opt1");
// opt1.addEventListener("click", checkAnswer);
var opt2 = document.getElementById("opt2");
// opt2.addEventListener("click", checkAnswer);
var opt3 = document.getElementById("opt3");
// opt3.addEventListener("click", checkAnswer);
var opt4 = document.getElementById("opt4");
// opt4.addEventListener("click", checkAnswer);

var userScore = 0;

questionContainer.style.display= "none";


var myQuestions = [
  {
    q: "What is the color of my hair?",
    o: [
      "blonde",
      "black",
      "green",
      "orange"
    ],
    a: "opt1"
  },
  {
    q: "When does the sun rise tomorrow?",
    o: [
      "1am",
      "2am",
      "morning",
      "6am"
    ],
    a: "opt4"
  },
  {
    q: "What time is work tomorrow?",
    o: [
      "never",
      "always",
      "3am",
      "7am"
    ],
    a: "opt4"
  }
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

var i = 0;
var beginQuestions = function() {
  event.preventDefault;
  welcomeContainer.style.display = "none";
  questionContainer.style.display= "block";


  quizQuestion.textContent = myQuestions[i]["q"];

  opt1.textContent = myQuestions[i]["o"][0];
  opt2.textContent = myQuestions[i]["o"][1];
  opt3.textContent = myQuestions[i]["o"][2];
  opt4.textContent = myQuestions[i]["o"][3];
}
  var checkAnswer = function(event) {
    var userGuess = event.target.id;
    console.log(userGuess);
    console.log(myQuestions[i]["a"]);
    if (userGuess === myQuestions[i]["a"]) {
      console.log("hey dickhead");
      userScore++;
    } else {
      console.log("alright");
      timeLeft -= 10;
    }
    console.log(userScore);
    i++;
    beginQuestions();
  }
  

  
 



startButton.addEventListener("click", beginQuiz);
// answerButtons.addEventListener("click", beginQuestions);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);
