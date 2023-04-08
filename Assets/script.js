const API_KEY = "c742f6a434aba29ee3de171e2674ca24";
const baseUrl = `https://api.openweathermap.org/data/2.5/forecast`;

var form = document.querySelector("form");

let cityName = document.getElementById("currentCity");
let cityTemp = document.getElementById("cityTemp");
let cityWind = document.getElementById('cityWind')
let cityHumidity = document.getElementById('cityHumidity')

let box1Day = document.getElementById('box1Day')

const changeTempFormat = (temp) => {
  // function that changes the format
  // return yyour new data
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var input = document.getElementById("searchInput").value;
  // GET
  fetch(`${baseUrl}?q=${input}&appid=${API_KEY}`) // Go fetch me some bread 5 grain 1 foot long and is $5  -Alan
    .then((response) => response.json()) // Hey alan I have a response for you...
    .then((data) => {
      // here is what type of bread I got you...
      console.log(data);
      cityName.innerHTML = data.city.name;
      cityTemp.innerHTML += data.list[0].main.temp; //add farenheight with template literal 
      cityWind.innerHTML += data.list[0].wind.speed;
      cityHumidity.innerHTML += data.list[0].main.humidity;
      box1Day.innerHTML += data.list[4].dt_txt;
    })

    .catch((err) => {
      // Oh no, they had none ...
      console.log("error", err);
    });
});

/**
 * @POST
 * * Request being sent to a server
 */

/**
 * @PUT
 * * Is a request sent to a server to update
 *
 */
