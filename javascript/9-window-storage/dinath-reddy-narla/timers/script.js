// Countdown Timer Logic
let countdownTime = 10;
let countdownInterval;
let countdownRunning = false;

function updateCountdown() {
  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up!");
    countdownRunning = false;
    return
  }
  countdownTime--;
  document.getElementById('countdown').innerHTML = countdownTime;
}

document.getElementById('startCountdownBtn').addEventListener('click', () => {
  if (!countdownRunning) {
    countdownInterval = setInterval(updateCountdown, 1000);
    countdownRunning = true;
  }
});

document.getElementById('stopCountdownBtn').addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownRunning = false;
});

document.getElementById('resetCountdownBtn').addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownTime = 10;
  document.getElementById('countdown').innerHTML = countdownTime;
  countdownRunning = false;
});

document.getElementById('setCountdownBtn').addEventListener('click', () => {
  let newTime = parseInt(document.getElementById('setCountdownInput').value);
  if (newTime && newTime > 0) {
    countdownTime = newTime;
    document.getElementById('countdown').innerHTML = countdownTime;
  }else{
    alert('new countdown should not be empty')
  }
});

// Stopwatch Logic
let stopwatchTime = 0;
let stopwatchInterval;
let stopwatchRunning = false;

function updateStopwatch() {
  document.getElementById('stopwatch').innerHTML = stopwatchTime;
  stopwatchTime++;
}

document.getElementById('startStopwatchBtn').addEventListener('click', () => {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    stopwatchRunning = true;
  }
});

document.getElementById('stopStopwatchBtn').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
});

document.getElementById('resetStopwatchBtn').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatch').innerHTML = stopwatchTime;
  stopwatchRunning = false;
});