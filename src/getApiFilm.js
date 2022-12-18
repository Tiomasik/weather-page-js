
// import {  } from "./index";
export { asyncGetWeather };
import { getCardTemp } from "./index"
import Notiflix from 'notiflix';


function getWeather(valueInput, days) {
    const url = "http://api.weatherapi.com/v1/forecast.json?";
    const parameters = {
        key: 'b1772f21bbd045f58d7145750221712',
        nameCity: valueInput,
    }
    const { key, nameCity } = parameters;
    
    return fetch(`${url}key=${key}&q=${nameCity}&days=${days}&lang=uk`)
};



async function asyncGetWeather(valueInput, days) {
    try {
        const promiseDataWeather = await getWeather(valueInput, days);
        const dataWeather = await promiseDataWeather.json();

        console.log(dataWeather)
        getCardTemp(dataWeather)

    } catch (error) {
        console.log(error)
        Notiflix.Notify.failure(`Вибачте, але такого населеного пункту ми не знайшли :(`);
    }
}


