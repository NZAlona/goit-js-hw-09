function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onStartBtnClick);
btnStop.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick() {
  timerId = setInterval(() => {
    const randomColorPicker = getRandomHexColor();
    body.style.background = randomColorPicker;
  }, 1000);
  enableDisableBtns(btnStop, btnStart);
}

function onStopBtnClick() {
  clearInterval(timerId);
  enableDisableBtns(btnStart, btnStop);
}

function enableDisableBtns(btn1, btn2) {
  btn1.removeAttribute('disabled');
  btn2.setAttribute('disabled', true);
}
