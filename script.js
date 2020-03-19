var d = new Date();
var currentDay = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
var dayOne = (d.getMonth() + 1) + "/" + (d.getDate() + 1) + "/" + d.getFullYear();
var dayTwo = (d.getMonth() + 1) + "/" + (d.getDate() + 2) + "/" + d.getFullYear();
var dayThree = (d.getMonth() + 1) + "/" + (d.getDate() + 3) + "/" + d.getFullYear();
var dayFour = (d.getMonth() + 1) + "/" + (d.getDate() + 4) + "/" + d.getFullYear();
var dayFive = (d.getMonth() + 1) + "/" + (d.getDate()+5 ) + "/" + d.getFullYear();
console.log(currentDay);
console.log(dayOne);
console.log(dayTwo);
console.log(dayThree);
console.log(dayFour);
console.log(dayFive);
var citySave = [];
var cityView = $("#city-view");



$(document).ready(function(){
    var weatherContainer = $(".weather-container");
    var userInput = $("form-control");
   
    function citySearch(){
        
        var city = $(".form-control").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=166a433c57516f51dfab1f7edaed8413";   
        var urlSave = {
            city: city, 
            queryURL: queryURL
         }
         citySave.push(urlSave);
         console.log(citySave);
         
        $.ajax({
            url: queryURL,
            method: "GET"
        }   ).then(function(response){
            console.log(response);
            console.log(response.value);
            console.log(response.coord.lat);
            console.log(response.coord.lon);
            // console.log(response.weather[0].icon);
            
                // console.log(date);
                
                $("#city").text(response.name + " " + "(" + currentDay + ")");
                var iconCode = response.weather[0].icon;
                var iconURl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
                var iconPNG = $("<img>").attr("src", iconURl);
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                $("#humidity").text("Humidity: " + response.main.humidity + " %")
                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1);
                $("#temp").text("Temperature: " + tempF + "°F");
                var weatherSave = JSON.stringify(citySave);
                // $("#image-icon").attr("src", iconPNG);S
                console.log(iconPNG);
                
                console.log(weatherSave);

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
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=166a433c57516f51dfab1f7edaed8413";

        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(forecast){
            console.log(forecast);
            // day 1
            $("#dateOne").text(dayOne);
            $("#windOne").text("Wind Speed: " + forecast.list[0].wind.speed + " MPH");
            $("#humidityOne").text("Humidity: " + forecast.list[0].main.humidity + " %")
            var tempFOne = ((forecast.list[0].main.temp - 273.15) * 1.80 + 32).toFixed(1);
            $("#tempOne").text("Temperature: " + tempFOne + "°F");
            // day 2
            $("#dateTwo").text(dayTwo);
            $("#windTwo").text("Wind Speed: " + forecast.list[7].wind.speed + " MPH");
            $("#humidityTwo").text("Humidity: " + forecast.list[7].main.humidity + " %")
            var tempFTwo = ((forecast.list[7].main.temp - 273.15) * 1.80 + 32).toFixed(1);
            $("#tempTwo").text("Temperature: " + tempFTwo + "°F");
            // day 3
            $("#dateThree").text(dayThree);
            $("#windThree").text("Wind Speed: " + forecast.list[15].wind.speed + " MPH");
            $("#humidityThree").text("Humidity: " + forecast.list[15].main.humidity + " %")
            var tempFThree = ((forecast.list[15].main.temp - 273.15) * 1.80 + 32).toFixed(1);
            $("#tempThree").text("Temperature: " + tempFThree + "°F");
            // day 4
            $("#dateFour").text(dayFour);
            $("#windFour").text("Wind Speed: " + forecast.list[23].wind.speed + " MPH");
            $("#humidityFour").text("Humidity: " + forecast.list[23].main.humidity + " %")
            var tempFFour = ((forecast.list[23].main.temp - 273.15) * 1.80 + 32).toFixed(1);
            $("#tempFour").text("Temperature: " + tempFFour + "°F");
            // day 5
            $("#dateFive").text(dayFive)
            $("#windFive").text("Wind Speed: " + forecast.list[31].wind.speed + " MPH");
            $("#humidityFive").text("Humidity: " + forecast.list[31].main.humidity + " %")
            var tempFFive = ((forecast.list[31].main.temp - 273.15) * 1.80 + 32).toFixed(1);
            $("#tempFive").text("Temperature: " + tempFFive + "°F");

        });
    }
    // function storeCityName(){
    //     localStorage.setItem(, JSON.stringify(weatherSave))
    // }
    
    
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


