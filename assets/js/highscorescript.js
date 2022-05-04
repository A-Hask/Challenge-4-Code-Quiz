var highScoreEl = document.querySelector("#score-list");
//get user initials
var userInitials = localStorage.getItem(userInitials);
userInitials= JSON.stringify(userInitials);

//get local scores
var finalScore = localStorage.getItem(finalScore);
finalScore= JSON.stringify(finalScore);

//append child to the page
highScoreEl.append(userInitials + finalScore);

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
