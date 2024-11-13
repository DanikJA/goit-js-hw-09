// import Notiflix from 'notiflix';


// const formEl = document.querySelector('.form');
// const firstDelay = document.querySelector('input[name="delay"]');
// const delayStep = document.querySelector('input[name="step"]');
// const amountEl = document.querySelector('input[name="amount"]');


// formEl.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const delay = Number(firstDelay.value);
//   const step = Number(delayStep.value);
//   const amount = Number(amountEl.value);

//   function createPromise(position, delay) {
//     return new Promise((resolve, reject) => {

//       setTimeout(() => {
//         const shouldResolve = Math.random() > 0.3;

//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//   };

//   for (let i = 1; i <= amount; i++){
//   const currentDelay = delay + step * (i - 1);
  
    
  
//    createPromise(i, currentDelay)
//       .then(({ position, delay }) => {
//        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//       });

//   }
//   formEl.reset()
// });



import Notiflix from 'notiflix';


const formEl = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');



formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  

  const firstDl = Number(firstDelay.value);
  const stepDl = Number(delayStep.value);
  const amountOfEl = Number(amountEl.value);

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        };
      }, delay);
    });
  };

  for (let i = 1; i <= amountOfEl; i += 1) {
    const currentDelay = firstDl + stepDl * (i - 1);

    createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  })
  };
formEl.reset();
});



