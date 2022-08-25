var citySearchEl = document.querySelector("#city-search");
var searchBtnEl = document.querySelector("#city-search-btn");
var searchHistoryEl = document.querySelector("#search-history");
var clearHistBtnEl = document.querySelector("#clear-hist");
var currentCity = document.querySelector("#current-city");
var currentTemp = document.querySelector("#current-temp");
var currentHumidity = document.querySeelector("#humidity");
var currentWindSpeed = document.querySelector("#wind-speed");
var UVindex = document.querySelector("#uv-index");

// main section of website
var mainWeather = document.querySelector("main-weather");

// Previous searches
var searchList =[];

// OpenWeather API Key
var APIkey = "96a5ee9e3a7722ef69cc9a0d00b10a2a";

var getWeather = function(){
    var apiUrl = ""

    fetch (apiUrl)
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                displayWeather()
            })
        }
    })
}