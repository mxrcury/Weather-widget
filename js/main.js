// 'use strict'

// async function getWeather(element, city){
//     element.innerHTML = `
//     <div class="weather_loading">
//          <img src="./img/loading.gif" alt="Loading">
//     </div>
//     `;

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=574e986eeab53f684105869f71a44fe3`, {
//         method:'GET',
//     })

//     const data = await response.json();

//     if(!response.ok){
//         element.innerHTML = data.message;
//         return;
//     }

//     const location = data.name;
//     const temp = Math.round(data.main.temp);
//     const feelsLike = Math.round(data.main.feels_like);
//     const weatherStatus = data.weather[0].main;
//     const weatherIcon = data.weather[0].icon;

//     element.innerHTML = `
//     <div class="weather_header">
//         <div class="weather_main">
//             <div class="weather_city">
//                 ${location}
//             </div>
//             <div class="weather_status">
//                 ${weatherStatus}
//             </div>
//         </div>
//         <!-- /weather_main -->
//         <div class="weather_icon">
//             <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="CLouds">
//         </div>
//         <!-- /weather_icon -->
//     </div>
//     <!-- /weather_header -->
//     <div class="weather_temp">${temp}</div>
//     <div class="weather_feels-like">Feels like: ${feelsLike}</div>
//     `;
// }

// document.querySelector('.weather_btn').onclick= addCity;

// function addCity(){
//     let inputValue = document.querySelector('.weather_input').value;
//     cities.push(inputValue);
// }

// const cities = ['Lviv','Kyiv','Warsaw', 'England'];
// const weatherBlock = document.querySelector('#weather');
// console.log(cities);
// if(weatherBlock){
//     for(const city of cities){
//         document.querySelector(`.${city}`).addEventListener('click', () => getWeather(weatherBlock, city));
//     }
// }

'use strict'

async function getWeather(element, city){

    element.innerHTML=`
    <div class="weather_loading">
          <img src="./img/loading.gif" alt="Loading">
    </div>`;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=574e986eeab53f684105869f71a44fe3`,{
        method:'GET',
    })

    const data = await response.json();

    if(!response.ok){
        element.innerHTML = data.message;
    }
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    element.innerHTML = `
    <div class="weather_header">
        <div class="weather_main">
            <div class="weather_city">
                ${location}
            </div>
            <div class="weather_status">
                ${weatherStatus}
            </div>
        </div>
        <!-- /weather_main -->
        <div class="weather_icon">
            <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="CLouds">
        </div>
        <!-- /weather_icon -->
    </div>
    <!-- /weather_header -->
    <div class="weather_temp">${temp}</div>
    <div class="weather_feels-like">Feels like: ${feelsLike}</div>
    `;

}

// let inputBtn= document.querySelector('.weather_btn');


// inputBtn.onclick = addCity;

// function addCity(){
//     let inputValue = document.querySelector('.weather_input').value;
//     cities.push(inputValue);
// }

const cities = ['Lviv', 'Kyiv','Warsaw','Tokyo'];
const weatherBlock = document.querySelector('#weather');

    if(weatherBlock){
        for(const city of cities){
            document.querySelector(`.${city}`).addEventListener('click', () =>
            getWeather(weatherBlock, city));
        }
    }