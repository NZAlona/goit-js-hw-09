import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmitClick);

function onFormSubmitClick(event) {
  event.preventDefault();

  let firstDelay = Number(delayInput.value);
  const stepDelay = Number(stepInput.value);
  const amount = Number(amountInput.value);

  event.currentTarget.reset();

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(resolve => {
        Notiflix.Notify.success(resolve);
      })
      .catch(reject => {
        Notiflix.Notify.failure(reject);
      });
    firstDelay = firstDelay + stepDelay;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  }, delay);
  return promise;
}
