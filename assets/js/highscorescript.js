var highScoreEl = document.querySelector("#score-list");
var userInitials = localStorage.getItem(userInitials);
//get local scores
var finalScore = localStorage.getItem(JSON.stringify(finalScore));
highScoreEl.append(JSON.stringify(userInitials) + JSON.stringify(finalScore));


// finalScore = JSON.stringify(finalScore);
//append child to the page
//sort scores from highest to lowest
//optional: button to clear high scores
// $("#clear-high-scores").click(function(){
//     var text = $('button/>',
//     {
//         text: "test",
//         click: function(){alert("hi");}
//     });
//     var parent = $('<tr><td></td></tr>').before(parent);
// });
// localStorage.clear
//call highscore function