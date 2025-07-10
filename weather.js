
// const apikey ='f08ca2d6b7980c61e42a953f7a25263c'
// const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather'//?q=delhi&appid=f08ca2d6b7980c61e42a953f7a25263c&units=metric'

// const searchBox = document.querySelector('.search input')
// const searchBtn = document.querySelector('.search button')
// const weatherIcon= document.querySelector('.weather-icon')
// async function checkweather(city){


//     const url = `${ApiUrl}?q=${city}&appid=${apikey}&units=metric`;
//     const response = await fetch (url);


// if (response.status === 404) {
//         alert('City not found');
//         return;
//     };



//    const data = await response.json();
//     console.log(data);

//     document.querySelector('.City').innerHTML=data.name;
//     document.querySelector('.temp').innerHTML=Math.floor(data.main.temp)+'°C';
//     document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
//     document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';

  

//     console.log('weather condition from API:', weatherMain );//data.weather[0].main
//    const imageFile = weatherImages[weatherMain]||'default.png';
  
  
  
//   data.weather[0].main = "Snow";
//   console.log('weather condition frome api',data.weather[0].main);

//     // Map conditions to image filenames
// const weatherMain = data.weather[0].main.toLowerCase();
//       console.log('weather condition from API:', weatherMain );//data.weather[0].main
//     const weatherImages = {
//         clear: 'clear.png',
//         clouds: 'clouds.png',
//         drizzle: 'drizzle.png',
//         rain: 'rain.png',
//         snow: 'snow.png',
//         mist: 'mist.png',
//         haze: 'mist.png',
//         smoke: 'mist.png',
//         fog: 'mist.png',
//         thunderstorm: 'rain.png',
//          dust: 'mist.png',
       
//     };
    


// weatherIcon.src = `${imageFile}?v=${Date.now()}`;
// console.log("Setting image to:", imageFile); 
// weatherIcon.src=`${imageFile}`;


//  }


//    searchBtn.addEventListener('click', () => {
//     checkweather(searchBox.value);
// });

// // default value 

// checkweather('City');


const apikey = 'f08ca2d6b7980c61e42a953f7a25263c';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkweather(city) {
    const url = `${ApiUrl}?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(url);

    if (response.status === 404) {
        alert('City not found');
        return;
    }

    const data = await response.json();

    document.querySelector('.City').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    // 🔧 FOR TESTING ONLY — remove this line in final version
    //data.weather[0].main = "Snow"; // simulate snow response

    const weatherMain = data.weather[0].main.toLowerCase();
    console.log('weather condition from API:', weatherMain );//data.weather[0].main

    const weatherImages = {
        clear: 'clear.png',
        clouds: 'clouds.png',
        drizzle: 'drizzle.png',
        rain: 'rain.png',
        snow: 'snow.png',
        mist: 'mist.png',
        haze: 'mist.png',
        smoke: 'mist.png',
        fog: 'mist.png',
        thunderstorm: 'rain.png',
        dust: 'mist.png'
    };

    const imageFile = weatherImages[weatherMain] || 'default.png';
    console.log("Setting image to:", imageFile);

 
 
 
 
 
    weatherIcon.src = `${imageFile}?v=${Date.now()}`; // ✅ Only one line
console.log("Actual condition:", data.weather[0].main);
console.log("Mapped image:", imageFile);
document.querySelector('.weather-type').innerHTML = data.weather[0].main;

}

// Event listener for search
searchBtn.addEventListener('click', () => {
    checkweather(searchBox.value);
});

// Load default
checkweather('London');










