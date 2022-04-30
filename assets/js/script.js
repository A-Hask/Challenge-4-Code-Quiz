//timerEl function activates when start button is clicked
// var startBtnEl = document.getElementById("start");
var startBtnEl = $("#start");
var timerEl = $("#timer");
var answerHolderEl = $("#answer-holder");
var score = $("#current-score");
var welcomePage = $("#welcome-page");
var fakeWelcomePage = $("welcome-page");
var userInitials = $("#initials");
var highScores = $("#high-scores");

var state = {
    count: 60,
    score: 0,
    index: 0,
}

var questionArray = [
    {   question: "The condition in an if/else statement is enclosed with _____",
        answers: ["parentheses", "curly brackets", "quotes", "square brackets"],
        correctAnswer: "parentheses"
    },

    {   question: "Arrays in JavaScript can be used to store _____",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },

    {   question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
        
    },

    {   question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _____",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }
]

startBtnEl.on("click", function startQuiz() {
//toggle shown and hidden elements
    welcomePage.hide();
    $("#high-scores").hide();
    $("#quiz-end").hide();
    answerHolderEl.show();
    score.show();
    displayQuestion();
    countdown()
});

var displayQuestion = function() {
    score.text("You have " + state.score + " points");
    $("#answer-holder").empty();
    console.log("display question called", state.index);
    //append to HTML
    var currentQuestion = questionArray[state.index]
    $("#question-holder").text(currentQuestion.question);
    currentQuestion.answers.forEach(function(answer){
        $("#answer-holder").append('<li>' + answer + '</li>')

    });

}

function countdown() {
    var timer = setInterval(function() {
    console.log(state.count);
    timerEl.text(state.count);
    state.count--;
    if (state.count < 0) {
        clearInterval(timer);
        console.log("end");
    }
    } ,1000)
};

var handleCheckAnswer = function checkAnswer() {
    state.index++;
    if (state.index < questionArray.length) {
        console.log(state.index);
        console.log("answer checked");
        displayQuestion();
    } else if (state.index === questionArray.length) {
        endQuiz();
    }

}

function endQuiz() {
    state.count = 1;
    $("#high-scores").show();
    $("#quiz-end").show();

    console.log(state.count);
    console.log("game over");

    //clear HTML

}

$("#submit").text("Submit");

$("#answer-holder").on("click", "li", handleCheckAnswer);


// //Allow user to add initials to score via textbox with save high score submit button
// //grab textbox content, trim white space (value.trim), 
// var initials = window.prompt("Enter your initials here!");
if (userInitials !== "") {
    //Save scores in local storage JSON.parse

    //pull score and initials, make them into objects, push them and set to local storage
    localStorage.setItem("finalScore", JSON.stringify(score));
    console.log(initials, score);
    //submit button (code only works if user types something in)
    
    //send user to href highscores.html
    let link = document.querySelector("#high-score-page");
    link.on("click", "button", highScores);
}