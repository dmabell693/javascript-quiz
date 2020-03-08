var timer = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var quizQuestion = document.getElementById("quiz-question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var correctIncorrect = document.getElementById("correct-incorrect");
var allDone = document.getElementById("all-done-container");
var highscoresContainer = document.getElementById("highscores-container");
var finalScoreP = document.getElementById("final-score-p");
var viewHighscores = document.getElementById("view-highscores");
var submitHighscore = document.getElementById("submit-highscore");
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");
var highscoresList = document.getElementById("highscores-list");
var initials = document.getElementById("initials");


questionContainer.style.display = "none";
correctIncorrect.style.display = "none";
allDone.style.display = "none";
highscoresContainer.style.display = "none";

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
  },
  {
    q: "Question?",
    o: [
      "answer",
      "answer",
      "correct",
      "answer"
    ],
    a: "opt3"
  },
  {
    q: "Questions?",
    o: [
      "answer",
      "correct",
      "answer",
      "answer"
    ],
    a: "opt2"
  },
  {
    q: "empty question",
    o: [
      "---",
      "---",
      "---",
      "---"
    ],
    a: "---"
  }
];


var userScore;
var timeLeft;
var i = 0;

var beginQuiz = function(event) {
  userScore = 0;
  timeLeft = 120;
  i = 0;
  var timeInterval = setInterval(function() {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft === 0) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    if (i >= myQuestions.length - 1) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
  }, 1000);
  beginQuestions();
};


var beginQuestions = function() {
  event.preventDefault;
  welcomeContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  questionContainer.style.display = "block";


  quizQuestion.textContent = myQuestions[i]["q"];

  opt1.textContent = myQuestions[i]["o"][0];
  opt2.textContent = myQuestions[i]["o"][1];
  opt3.textContent = myQuestions[i]["o"][2];
  opt4.textContent = myQuestions[i]["o"][3];

  if (i >= myQuestions.length - 1) {
    endGame();
  }
}

var checkAnswer = function(event) {
  var userGuess = event.target.id;
  if (userGuess === myQuestions[i]["a"]) {
    userScore++;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Correct! You've earned a point!";
  } else {
    timeLeft -= 10;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Incorrect! You've lost 10 seconds!";
  }
    console.log(userScore);
    console.log(i);
    i++;
    beginQuestions();
  }
  
var endGame = function() {
  questionContainer.style.display = "none";
  highscoresContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  allDone.style.display = "block";
  finalScoreP.textContent = "Your final score is: " + userScore;
}


var userHighscores = [];

var addHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  highscoresList.innerHTML = "";
  for (var j = 0; j < userHighscores.length; j++) {
    var userHighscore = userHighscores[j];

    var li = document.createElement("li");
    li.textContent = userHighscore;
    li.setAttribute("data-index", j);
    highscoresList.appendChild(li);
  }
}

var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores"));
  if (userHighscores !== null) {
    userHighscores = loggedHighscores;
  }
  addHighscore();
}

var storeHighscore = function() {
  localStorage.setItem("userHighscores", JSON.stringify(userHighscores));
}

submitHighscore.addEventListener("click", function(event) {
  event.preventDefault();
  var userInitialsScore = initials.value + " - " + userScore;
  if (userInitialsScore === "") {
    return;
  }

  userHighscores.push(userInitialsScore);
  initials.value = "";
  console.log(userHighscores);
  storeHighscore();
  getHighscores();
});

var clearScores = function(event) {
  localStorage.clear();
  userHighscores = [];
  console.log(userHighscores)
  highscoresList.textContent = "";
  console.log(localStorage);
  checkHighscore();
}

var startOver = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  correctIncorrect.style.display = "none";
  welcomeContainer.style.display = "block";
}

var checkHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";
}



startButton.addEventListener("click", beginQuiz);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);
goBack.addEventListener("click", startOver);
viewHighscores.addEventListener("click", checkHighscore);
clearHighscores.addEventListener("click", clearScores);