// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const dateInput = document.querySelector("#datetime-picker");
// const startBtn = document.querySelector('[data-start]');
// const daysElement = document.querySelector('[data-days]');
// const hoursElement = document.querySelector('[data-hours]');
// const minutesElement = document.querySelector('[data-minutes]');
// const secondsElement = document.querySelector('[data-seconds]');

// startBtn.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     if (selectedDate <= new Date()) {
//       alert("Please choose a date in the future");
//     } else {
//       startBtn.disabled = false;
//     }
//   },
// };

// flatpickr(dateInput, options);

// let countdownInterval;
// let targetDate;

// startBtn.addEventListener("click", () => {
//   targetDate = new Date(dateInput.value);
//   startBtn.disabled = true;

//   countdownInterval = setInterval(() => {
//     const timeRemaining = targetDate - new Date();
//     if (timeRemaining <= 0) {
//       clearInterval(countdownInterval);
//       updateTimerDisplay(0, 0, 0, 0);
//     } else {
//       const { days, hours, minutes, seconds } = convertMs(timeRemaining);
//       updateTimerDisplay(days, hours, minutes, seconds);
//     }
//   }, 1000);
// });

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function updateTimerDisplay(days, hours, minutes, seconds) {
//   daysElement.textContent = String(days).padStart(2, '0');
//   hoursElement.textContent = String(hours).padStart(2, '0');
//   minutesElement.textContent = String(minutes).padStart(2, '0');
//   secondsElement.textContent = String(seconds).padStart(2, '0');
// }


// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      alert ('Please choose a date in the future')
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDate);
  },
};

flatpickr(dateInput, options);



startBtn.addEventListener('click', () => {
  startBtn.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = selectedDate - new Date();

    if (currentTime <= 0) {
      clearInterval(intervalId);
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      return;
    };
   const { days, hours, minutes, seconds } = convertMs(currentTime);
  
 daysElement.textContent = addLeadingZero(days);
 hoursElement.textContent = addLeadingZero(hours);
 minutesElement.textContent = addLeadingZero(minutes);
 secondsElement.textContent = addLeadingZero(seconds);
    
  });
}, 1000);


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}