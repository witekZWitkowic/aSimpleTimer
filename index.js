let totalAmountOfSeconds = 0;
let interval;
let isRunning = false;

const time = document.getElementById('time');
const startPauseButton = document.getElementById('startPause');
const stopButton = document.getElementById('stop');
const startPauseSpan = document.getElementById('startPauseSpan')

const updateTimer = () => {
    const hours = Math.floor(totalAmountOfSeconds / 3600);
    const minutes = Math.floor((totalAmountOfSeconds % 3600) / 60);
    const seconds = totalAmountOfSeconds % 60;
    time.textContent =
    `${hours < 10 ? '0' + hours : hours < 24 ? hours : '00'} 
    : 
    ${minutes < 10 ? '0' + minutes : minutes < 60 ? minutes : '00'} 
    :
    ${seconds < 10 ? '0' + seconds : seconds < 60 ? seconds : '00'}`;
};

const toggleTimer = () => {
    if (isRunning) {
        clearInterval(interval);
        startPauseSpan.textContent = 'Resume';
    } else {
        updateTimer();
        interval = setInterval(() => { totalAmountOfSeconds++; updateTimer(); }, 1000);
        startPauseSpan.textContent = 'Pause';
    }
    isRunning = !isRunning;
};

startPauseButton.addEventListener('click', toggleTimer);

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    totalAmountOfSeconds = 0;
    updateTimer();
    startPauseSpan.textContent = 'Start';
    isRunning = false;
});
