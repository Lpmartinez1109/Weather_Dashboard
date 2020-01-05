$(document).ready(function(){
    var weatherContainer = $(".weather-container");
    var userInput = $("form-control");
    // var date = moment().format('MMMM Do YYYY, h:mm:ss a')
    //     // $("#currentDay").append(date)
    //     var date = moment().hour()
        var d = new Date();
        var currentDAy = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()
        console.log(today);
    
    function citySearch(){
        
            var city = $(".form-control").val();
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=166a433c57516f51dfab1f7edaed8413";   
    
            $.ajax({
            url: queryURL,
            method: "GET"
            }   ).then(function(response){
                console.log(response);
                console.log(response.value);
                console.log(response.coord.lat);
                console.log(response.coord.lon);
                console.log(date);
                
                $("#city").text(response.name)
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                $("#humidity").text("Humidity: " + response.main.humidity + " %")
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                $("#temp").text("Temperature: " + tempF + "°F");
                // var coordinatesLat = (response.coord.lat);
                // var coordinatesLon = (response.coord.lon);
                // var pOne = $("<p>").text("Location: " + coordinatesLat + "," + coordinatesLon);
                // weatherContainer.append(pOne);
                // var cityName = response.name;
                // var hOne = $("<h1>").text(cityName);
                // weatherContainer.append(hOne);
                // var cityWind = response.wind.speed;
                // var hTwo = $("<h2>").text("Wind Speed: " +  cityWind);
                // weatherContainer.append(hTwo);
                // var cityHumid = response.main.humidity;
                // var hHumidity =$("<h2>").text("Humidity: " + cityHumid + "%");
                // weatherContainer.append(hHumidity);
                // var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;

                // $(".weather-container").empty();
                // $(".weather-container").append(hOne, hTwo, hHumidity)
            // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            // $(".wind").text("Wind Speed: " + response.wind.speed);
            // $(".humidity").text("Humidity: " + response.main.humidity);
            // $(".temp").text("Temperature (F) " + response.main.temp);
        
        });
        // var uvURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?" +
        var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=166a433c57516f51dfab1f7edaed8413";

        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(forecast){
            console.log(forecast);
            
        })
    }
    function uvIndex(){};
    
    
    function currentConditions(){};
    
    
    function fiveForecast(){};
    
    
    $("#button").on("click", function(event){
        event.preventDefault();
        citySearch();
        // console.log("hi");
    });
    userInput.keypress(function(event){
        if (event.which === 13){
            citySearch();
        }
    })
});


// function getSearchMethod(searchTerm){
    //     if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)    
//     searchMethod = 'zip';
//     else
//         searchMethod = 'q';
// }

// function searchWeather(searchTerm){
    //     getSearchMethod(searchTerm);    
//     fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${apikey}&units=${units}`).then(result =>{
    //         return result.json();    
//     }).then(result =>{
    //         init(result);    
    //     })
    // }

// function init(resultFromServer){
//     switch (resultFromServer.weather[0].main) {
//         case 'Clear':    
            
//             break;
//         case 'Clouds':

//             break;
//         case 'Rain':
//         case 'Drizzle':
//         case 'Mist':
//             break;
//         case 'Thuderstorm':
//             break;
//         case 'Snow':
//             break;
    
//         default:
//             break;
//     }
//     var weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
//     var temperatureElement = document.getElementById('temperature');
//     var humidityElement = document.getElementById('humidity');
//     var windSpeedElement = document.getElementById('windSpeed');
//     var cityHeader = document.getElementById('cityHeader')
//     var weatherIcon = document.getElementById('documentIcon');

//     weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + ".png";

//     var resultDescription = resultFromServer.weather[0].description;
//     weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

//     temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
//     windSpeedElement.innerHTML = 'Winds at' + Math.floor(resultFromServer.wind.speed) + 'm/s';
//     cityHeader.innerHTML = resultFromServer.name;
//     humidityElement.innerHTML = 'Humidity levels at' + resultFromServer,main.humidity + '%';

// setPositionForWeatherInfo();
// }

// function setPositionForWeatherInfo(){
//     var weatherContainer = document.getElementById('weatherContainer');    
//     var weatherContainerHeight = weatherContainer.clientHeight;
//     var weatherContainerWidth = weatherContainer.clientWidth;

//     weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2})`;
//     weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3})`;
//     weatherContainer.style.visibility = 'visible';
// }

// document.getElementById('searchBtn').addEventListener('click', ()=> {
//     var searchTerm = document.getElementById('searchInput').nodeValue;    
//     if(searchTerm)
//         searchWeather(searchTerm);
// })


