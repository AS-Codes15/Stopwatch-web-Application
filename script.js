let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Start the stopwatch
startButton.addEventListener('click', function() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function() {
      elapsedTime += 1;
      display.innerText = formatTime(elapsedTime);
    }, 1000);
  }
});

// Stop the stopwatch
stopButton.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
});

// Reset the stopwatch
resetButton.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.innerText = "00:00:00";
});

// Format the time
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hours)}: ${pad(minutes)}:${pad(secs)}`;
}

function pad(unit) {
  return String(unit).padStart(2, '0');
}