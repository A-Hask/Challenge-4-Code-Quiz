document.getElementById("#start").addEventListener("click", countdown);
    var count = 120
    var timer = setInterval(function() {
        console.log(count);
        count--;
        if (count === 0) {
            stopInterval()
        }
    }, 1000)
    var stopInterval = function() {
        window.alert("Time's up!!");
        window.alert("Let's see how you did!");
        clearInterval(timer);
    }
timer.addTextContent= count;

