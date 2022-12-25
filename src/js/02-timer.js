import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const myInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysToChange = document.querySelector('span[data-days]');
const hoursToChange = document.querySelector('span[data-hours]');
const minutesToChange = document.querySelector('span[data-minutes]');
const secondsToChange = document.querySelector('span[data-seconds]');

btnStart.addEventListener('click', onBtnClick);
btnStart.disabled = true;
let countDownDate = '';

flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      countDownDate = selectedDates[0];
    }
  },
});

function onBtnClick() {
  const timeInterval = setInterval(function () {
    const dateNow = new Date();
    let timeDifference = countDownDate - dateNow;

    let msObject = convertMs(timeDifference);

    daysToChange.textContent = addLeadingZero(msObject.days);
    hoursToChange.textContent = addLeadingZero(msObject.hours);
    minutesToChange.textContent = addLeadingZero(msObject.minutes);
    secondsToChange.textContent = addLeadingZero(msObject.seconds);

    if (timeDifference < 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
