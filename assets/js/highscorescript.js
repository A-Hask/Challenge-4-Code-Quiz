var highScoreEl = document.querySelector("#high-scores");
var userInitials = localStorage.getItem(userInitials);
//get local scores
var finalScore = localStorage.getItem(finalScore);
//append child to the page
highScoreEl.append($("#high-scores"));
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