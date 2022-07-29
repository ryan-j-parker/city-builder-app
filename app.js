// import functions and grab DOM elements
const futureImgTag = document.getElementById('future-img');
const futureDropdownEl = document.getElementById('future-dropdown');

const modernImgTag = document.getElementById('modern-img');
const modernDropdownEl = document.getElementById('modern-dropdown');

const historicImgTag = document.getElementById('historic-img');
const historicDropdownEl = document.getElementById('historic-dropdown');

const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const slogansEl = document.getElementById('slogans');

const timesChanged = document.getElementById('times-changed');


const cityButton = document.getElementById('city-button');
const cityInputEl = document.getElementById('city-input');


// let state
let timesFutureChanged = 0;
let timesModernChanged = 0;
let timesHistoricChanged = 0;

let slogans = [];
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
/*
cityButton.addEventListener('click', () => {
  cityNameEl.textContent = cityInputEl.value;

});
*/
cityInputEl.addEventListener('change', () => {
  getCityName();
});

function getCityName() {
  document.getElementById('city-name').textContent = cityInputEl.value;
}



futureDropdownEl.addEventListener('change', () => {
  futureImgTag.src = `/assets/${futureDropdownEl.value}.png`;
  timesFutureChanged++;
  displayStats();
});


modernDropdownEl.addEventListener('change', () => {
  modernImgTag.src = `/assets/${modernDropdownEl.value}.png`;
  timesModernChanged++;
  displayStats();
});

historicDropdownEl.addEventListener('change', () => {
  historicImgTag.src = `/assets/${historicDropdownEl.value}.png`;
  timesHistoricChanged++;
  displayStats();
});

sloganButton.addEventListener('click', () => {
  const newSlogan = sloganInputEl.value;
  slogans.push(newSlogan);
  displaySlogans();
  sloganInputEl.value = '';
});

function displaySlogans() {
  slogansEl.textContent = '';

  for (let slogan of slogans) {
    const sloganEl = document.createElement('p');
    sloganEl.textContent = `"${slogan}"`;
    sloganEl.classList.add('slogan');
    slogansEl.append(sloganEl);
  }

}

function displayStats() {

  timesChanged.textContent = `You changed the futuristic city ${timesFutureChanged} times, the modern city ${timesModernChanged} times, and the historic city ${timesHistoricChanged} times.`

}


