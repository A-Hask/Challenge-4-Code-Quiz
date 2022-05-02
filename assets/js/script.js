var startBtnEl = $("#start");
var timerEl = $("#timer");
var answerHolderEl = $("#answer-holder");
var score = $("#current-score");
var welcomePage = $("#welcome-page");
var userInitials = $("#initials");
var highScores = $("#high-scores");
var submit = $("#submit");

var state = {
  count: 60,
  score: 0,
  index: 0,
};

var questionArray = [
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: ["parentheses", "curly brackets", "quotes", "square brackets"],
    correctAnswer: "parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },

  {
    question: "Commonly used data types DO NOT include: _____.",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is _____.",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

$("#quiz-end").hide();
$("#current-score").hide();

//timerEl function activates when start button is clicked
//start button also begins displaying the questions, and showing the user's score
startBtnEl.on("click", function startQuiz() {
  //toggle shown and hidden elements
  welcomePage.hide();
  $("#high-scores").hide();
  answerHolderEl.show();
  score.show();
  displayQuestion();
  countdown();
});

//this function displays the questions in the array and allows the user to select an answer
//this function also displays the user's score
function displayQuestion() {
  score.text("You have " + state.score + " points");
  $("#answer-holder").empty();
  console.log("display question called", state.index);
  //append to HTML
  var currentQuestion = questionArray[state.index];
  $("#question-holder").text(currentQuestion.question);
  currentQuestion.answers.forEach(function (answer) {
    $("#answer-holder").append(
      $("<li/>", {
        text: answer,
        click: checkAnswer,
      })
    );
  });
}

//this function sets the timer for the quiz
function countdown() {
  var timer = setInterval(function () {
    console.log(state.count);
    timerEl.text(state.count);
    state.count--;
    if (state.count <= 0) {
      clearInterval(timer);
      console.log("end");
      endQuiz();
    }
  }, 1000);
}

//this function loops the questions in the array
function loopQuestions() {
  if (state.index < questionArray.length) {
    displayQuestion();
  } else if (state.index === questionArray.length) {
    endQuiz();
  }
}

//this function checks to see if the user selected the correct answer and, depending on that choice, allots points or decreases time
function checkAnswer() {
  console.log("function hit");
  if ($("this").value === questionArray[state.index].correctAnswer) {
    state.score == state.score + 10;
  } else {
    state.count = state.count - 10;
  }
  state.index++;
  loopQuestions();
}

//this function hides the questions and shows the initial input area and allows the user to go to the high score page
function endQuiz() {
  state.count = 1;
  $("#quiz-end").show();
  $("#question-holder").hide();
  answerHolderEl.hide();
  console.log("game over");
  localStorage.setItem("finalScore", state.score);
}

$("#submit").text("Submit");

submit.on("click", function saveScore() {
    if (userInitials !== "")
    //Save scores in local storage JSON.parse
    localStorage.setItem("finalScore", JSON.stringify(state.score));    
    //pull score and initials, make them into objects, push them and set to local storage
    submit.on("click", localStorage.setItem("initials", userInitials.text));
    console.log(userInitials.text, score);
    console.log("initials saved");
    window.location.href= "highscores.html";
    
    
    //submit button (code only works if user types something in)
    //grab textbox content, trim white space (value.trim),
});