var timeEl = document.querySelector(".time");

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      quizOver();
    }

  }, 1000);
}

function quizOver() {
  timeEl.textContent = " ";
}

setTime();

