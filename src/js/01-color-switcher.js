import '../css/common.css';

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let timer = {};

startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}