
import { asyncGetWeather } from "./getApiFilm";
import { getCardWeather } from "./cardWeather";
export { getCardTemp }

//export {  };


const refs = {
    formEl: document.querySelector('.form'),
    listEl: document.querySelector('.day-card'),
    titleEl: document.querySelector('.name-lok')
};

let valueInput;
let counter = 1;
let days = 4;

refs.formEl.addEventListener('submit', sendForm)


function sendForm(evt) {
    evt.preventDefault();
    valueInput = evt.target.elements[0].value;
    console.log(valueInput)
    evt.target.elements[0].value = ''
    
    asyncGetWeather(valueInput, days)
};

function getCardTemp(dataWeather) {
    refs.listEl.innerHTML = getCardWeather(dataWeather);
    refs.titleEl.innerHTML = `<p class="name-loc__title">${dataWeather.location.name}, ${dataWeather.location.country}</p>`
}

