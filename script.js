



// function testClick (){
    //     alert("Click work");
    //     preventDefault();
// }    

function currentConditions(){
    
}
function fiveForecast(){

}
function searchHistory(){
    var city = $(this).attr("data-city")
    var APIkey = '27de6d576f342169797bf1826864e56a';
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=27de6d576f342169797bf1826864e56a";    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);s
        
    });
searchHistory();
}

function uvIndex(){

}

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


