const API_KEY = "c742f6a434aba29ee3de171e2674ca24";
const baseUrl = `https://api.openweathermap.org/data/2.5/forecast`;
// var iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
var form = document.querySelector("form");

let cityName = document.getElementById("currentCity");
let cityTemp = document.getElementById("cityTemp");
let cityWind = document.getElementById('cityWind')
let cityHumidity = document.getElementById('cityHumidity')

let boxDay0 = document.getElementById('boxDay0')
let boxTemp0 = document.getElementById('boxTemp0')
let boxWind0 = document.getElementById('boxWind0')
let boxHumidity0 = document.getElementById('boxHumidity0')

let boxDay8 = document.getElementById('boxDay8')
let boxTemp8 = document.getElementById('boxTemp8')
let boxWind8 = document.getElementById('boxWind8')
let boxHumidity8 = document.getElementById('boxHumidity8')

let boxDay16 = document.getElementById('boxDay16')
let boxTemp16 = document.getElementById('boxTemp16')
let boxWind16 = document.getElementById('boxWind16')
let boxHumidity16 = document.getElementById('boxHumidity16')

let boxDay24 = document.getElementById('boxDay24')
let boxTemp24 = document.getElementById('boxTemp24')
let boxWind24 = document.getElementById('boxWind24')
let boxHumidity24 = document.getElementById('boxHumidity24')

let boxDay32 = document.getElementById('boxDay32')
let boxTemp32 = document.getElementById('boxTemp32')
let boxWind32 = document.getElementById('boxWind32')
let boxHumidity32 = document.getElementById('boxHumidity32')


form.addEventListener("submit", (event) => {
  event.preventDefault();
  var input = document.getElementById("searchInput").value;

  fetch(`${baseUrl}?q=${input}&appid=${API_KEY}`)
    .then((response) => response.json()) 
    .then((data) => {
      console.log(data);

      cityName.innerHTML = data.city.name;
      cityTemp.innerHTML += `${data.list[0].main.temp} &#8457`;  
      cityWind.innerHTML += `${data.list[0].wind.speed} MPH`;
      cityHumidity.innerHTML += `${data.list[0].main.humidity} %`;
      for(var i=0; i< 40;i=i+8){
        boxDay0.textContent = new Date(data.list[4].dt_txt).toLocaleDateString();
        boxTemp0.textContent = `Temp: ${data.list[4].main.temp} F`;
        boxWind0.textContent = `Wind: ${data.list[4].wind.speed} MPH`;
        boxHumidity0.textContent = `Humidity: ${data.list[4].main.humidity} %`;
          
        boxDay8.textContent = new Date(data.list[12].dt_txt).toLocaleDateString();
        boxTemp8.textContent = `Temp: ${data.list[12].main.temp} F`;
        boxWind8.textContent = `Wind: ${data.list[12].wind.speed} MPH`;
        boxHumidity8.textContent = `Humidity: ${data.list[12].main.humidity} %`;

        boxDay16.textContent = new Date(data.list[20].dt_txt).toLocaleDateString();
        boxTemp16.textContent = `Temp: ${data.list[20].main.temp} F`;
        boxWind16.textContent = `Wind: ${data.list[20].wind.speed} MPH`;
        boxHumidity16.textContent = `Humidity: ${data.list[20].main.humidity} %`;

        boxDay24.textContent = new Date(data.list[28].dt_txt).toLocaleDateString();
        boxTemp24.textContent = `Temp: ${data.list[28].main.temp} F`;
        boxWind24.textContent = `Wind: ${data.list[28].wind.speed} MPH`;
        boxHumidity24.textContent = `Humidity: ${data.list[28].main.humidity} %`;

        boxDay32.textContent = new Date(data.list[36].dt_txt).toLocaleDateString();
        boxTemp32.textContent = `Temp: ${data.list[36].main.temp} F`;
        boxWind32.textContent = `Wind: ${data.list[36].wind.speed} MPH`;
        boxHumidity32.textContent = `Humidity: ${data.list[36].main.humidity} %`;
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
});

