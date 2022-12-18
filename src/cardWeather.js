export { getCardWeather };

function getCardWeather(dataWeather) {
    
    let totalWeather = ``
    let currentWeather
for (let i = 0; i < dataWeather.forecast.forecastday.length; i += 1) {
    currentWeather = `<li class="day-card__item">
        <p class="day-card__date">${dataWeather.forecast.forecastday[i].date}</p>
        <div class="day-card__main">
            <img class="day-card__img" src="https:${dataWeather.forecast.forecastday[i].day.condition.icon}" alt="">
            <p class="day-card__temp-text">${dataWeather.forecast.forecastday[i].day.condition.text}</p>
            <div class="day-card__temp-main">
                <p class="day-card__main-min">${dataWeather.forecast.forecastday[i].day.mintemp_c} C</p>
                <p class="day-card__main-aver">${dataWeather.forecast.forecastday[i].day.avgtemp_c} C</p>
                <p class="day-card__main-max">${dataWeather.forecast.forecastday[i].day.maxtemp_c} C</p>
            </div>
        </div>
        <ul class="list day-card__temp">
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[0].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[0].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[0].wind_kph} к/г</p>
            </li>
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[4].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[4].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[4].wind_kph} к/г</p>
            </li>
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[8].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[8].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[8].wind_kph} к/г</p>
            </li>
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[12].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[12].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[12].wind_kph} к/г</p>
            </li>
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[16].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[16].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[16].wind_kph} к/г</p>
            </li>
            <li class="day-card__temp-detale">
                <img class="day-card__temp-img" src="https:${dataWeather.forecast.forecastday[i].hour[20].condition.icon}" alt="">
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[20].temp_c} C</p>
                <p class="day-card__temp-moment">${dataWeather.forecast.forecastday[i].hour[20].wind_kph} к/г</p>
            </li>
        </ul>
    </li>`
    totalWeather += currentWeather
    }
    return totalWeather
}

