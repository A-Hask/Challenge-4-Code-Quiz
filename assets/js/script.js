//timerEl function activates when start button is clicked
// var startBtnEl = document.getElementById("start");
var startBtnEl = $("#start");
var timerEl = $("#timer");
var answerHolderEl = $("#answer-holder");
var score = $("#current-score");
var welcomePage = $("#welcome-page");
var userInitials = $("#initials");
var highScores = $("#high-scores");

var state = {
    count: 60,
    score: 0,
    index: 0,
}

var questionArray = [
    {   question: "The condition in an if/else statement is enclosed with _____.",
        answers: ["Parentheses", "Curly brackets", "Quotes", "Square brackets"],
        correctAnswer: "Parentheses"
    },

    {   question: "Arrays in JavaScript can be used to store _____.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above",
    },

    {   question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        correctAnswer: "Quotes"
        
    },

    {   question: "Commonly used data types DO NOT include: _____.",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
        answers: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
        correctAnswer: "Console.log"
    }
]

$("#quiz-end").hide();
$("#current-score").hide();

startBtnEl.on("click", function startQuiz() {
    //toggle shown and hidden elements
    $("#high-scores").hide();
    welcomePage.hide();
    answerHolderEl.show();
    score.show();
    displayQuestion();
    countdown()
});

var displayQuestion = function() {
    score.text("You have " + state.score + " points.");
    $("#answer-holder").empty();
    console.log("display question called", state.index);
    //append to HTML
    var currentQuestion = questionArray[state.index]
    $("#question-holder").text(currentQuestion.question);
    currentQuestion.answers.forEach(function(answer){
        let choice = $('<li>' + answer + '</li>');
        choice.onclick = checkAnswers;
    $("#answer-holder").append(choice);
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
        endQuiz();
    }
    } ,1000)
};

var handleLoopQuestions = function loopQuestions() {
    if (state.index < questionArray.length) {
        displayQuestion();
    } else if (state.index === questionArray.length) {
        endQuiz();
    }
}

function checkAnswers() {
    console.log("function hit");
    if ($("this").value === questionArray[state.index].correctAnswer) {
        score== state.score +10;
    } else {
        count== state.count - 10;
    }
    state.index++;
    handleLoopQuestions();
}

function endQuiz() {
    state.count = 1;
    $("#high-score-page").show();
    $("#quiz-end").show();
    $("#question-holder").hide();
    answerHolderEl.hide();
    console.log(state.count);
    console.log("game over");
    saveScore();
}

$("#submit").text("Submit");

$("#answer-holder").on("click", "li", handleLoopQuestions);

//grab textbox content, trim white space (value.trim), 
function saveScore() {
if (userInitials !== "")
    //Save scores in local storage JSON.parse
    localStorage.setItem("finalScore", JSON.stringify(score));
    //pull score and initials, make them into objects, push them and set to local storage
    console.log(userInitials.text, score);
    //submit button (code only works if user types something in)
    }