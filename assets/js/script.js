//function to start page with quiz question section hidden
function setup() {
    $("#quizquestions").hide();
    $(".quiz-end").hide();
}

//Timer function activates when start button is clicked
var startBtnEl = document.getElementById("#start");
var countEl = document.getElementById("#timer");
var quizQuestions = document.getElementById("#quiz-questions");
var score = document.getElementById("#current-score");
var welcomePage = document.getElementById("#welcome-page");
var userInitials = document.getElementById("#initials");
var timerEl = document.getElementById("#timer");
timerEl.textContent("You have " + countEl + " seconds left....");
var questionArray = ["Commonly used data types DO NOT include:", 
"The condition in an if/else statement is enclosed with _____", 
"Arrays in JavaScript can be used to store ______", 
"String values must be enclosed within ____ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:"];
startBtnEl.addEventListener("click", function startQuiz() {
    //Hide index page
    welcomePage.hide();
    //hide high score button
    $("#high-scores").hide();
    //Display questions
    quizQuestions.show();
    //Add count to timer
    timer.addtextContent = countEl;
    $(".clock").appendChild();
    //Start timer
    setInterval(countdown, 1000);
    //Call displayQuestion function (loop through the questions and answers)
    $.each([questionArray], displayQuestion());
    //Call checkAnswer function
    checkAnswer();
});

var displayQuestion = function displayQuestion() {
    //appendChild to HTML
    quizQuestions.appendChild(questionArray);
    //add score to page
    score.appendChild(score);
}

var checkAnswer = function checkAnswer() {
    //For each correct answer, add 5 points and textbox "correct!"
    //For each wrong answer, remove 10 seconds from timer and add textbox "wrong"
    if (this.value !== "correct answer") {
        countEl - 10;
        setTimeOut(
            console.log("Incorrect!! -10 seconds!!")
        );

    }
    else if (this.value == correctAnswer) {
        score + 10;
        setTimeOut(
            console.log("Correct! +10 points!")
        );
    }
    //setTimeOut function (flash feedback and sound effect)
    //Go to next question in Array 
    //if current question=questions.length, endQuiz. else, next question 
}

/*endQuiz function will clear the timer, clear the html, 
and take the user to the final score page where they can save their highscore and initials*/
function endQuiz() {
    clearInterval(timer);
    //clear HTML

}

//Allow user to add initials to score via textbox with save high score submit button
//add input tag to high score html page
//grab textbox content, trim white space (value.trim), 
var initials = window.prompt("Enter your initials here!");
if (initials !== "") {
    //Save scores in local storage JSON.parse

    //pull score and initials, make them into objects, push them and set to local storage
    localStorage.setItem(initials, score);
    console.log(initials, score);
    //submit button (code only works if user types something in)

    //send user to href highscores.html
    let link = document.querySelector("#high-score-page");
    link.click();
}


function countdown() {
    countEl--;
    $("#timer").TextContent = countEl;
    if (countEl <= 0) {
        endQuiz();
        window.alert("TIME'S UP!!");
    }
}




