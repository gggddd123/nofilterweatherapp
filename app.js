/*alert("hello world");
function isWindy (speed) {

    if (speed>5) {
        return true;
       
    }
    else {
        return false;
       

    }
}
let lisbonSpeed = 10
if (isWindy(lisbonSpeed)) {
    alert ("it is windy!"); 
}
else {
alert ("it is not windy");    
}*/

let selected      = document.querySelector('.day__block--selected');
let days          = document.querySelectorAll('.day__block');
let temperature   = document.querySelector('.weather-temp--today');
let wind          = document.querySelector('#wind-speed');
let humidity      = document.querySelector('#humidity');
let description   = document.querySelector('#weather-description');
let place         = document.querySelector('#weather-location');
let icon          = document.querySelector('.weather__icon--today');


let root   = 'https://api.openweathermap.org';
let apiKey = 'fbd1d45093c06868c8295c672935d622';
let path   = 'data/2.5/weather';
let city   = 'London';

/*TEMPERATURE*/

axios.get(root + '/' + path + '?q=' + city + '&appid=' + apiKey + '&units=metric')
  .then(function(response) {

    temperature.innerHTML = Math.round(response.data.main.temp); 
    console.log(response);
    });
 
/*PLACE
    axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
  .then(function(response) {

    place.innerHTML = Math.round(response.data.main.temp_min); 
    console.log(response);
    });*/


 /*ICON*/   
    axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        icon.innerHTML = Math.round(response.data.weather[0].icon.slice(0, 2)); 
        /*console.log(response);*/
        });

/*WIND*/
    
        axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        wind.innerHTML = Math.round(response.data.wind.speed); 
        console.log(response);
        });


/*HUMIDITY*/
        axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        humidity.innerHTML = Math.round(response.data.main.humidity); 
        console.log(response);
        }); 



