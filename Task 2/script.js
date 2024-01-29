let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startPause').innerText = 'Resume';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startPause').innerText = 'Pause';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    laps = [];
    updateDisplay();
    document.getElementById('startPause').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        laps.push(seconds);
        updateLaps();
    }
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${index + 1}: ${formatTime(lapTime)}`;
        lapsList.appendChild(lapItem);
    });
}

function updateTime() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const timeDisplay = document.querySelector('.time');
    timeDisplay.innerText = formatTime(seconds);
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? `0${number}` : number;
}
