// var APIKey = "166a433c57516f51dfab1f7edaed8413";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function(response){
//             console.log(queryURL);
//             console.log(response);
//             $(".city").html("<h1>" + response.name + "Weather Details</h1>");
//             $(".wind").html("Wind Speed: " + response.wind.speed);
//             $(".humidity").text("Humidity: " + response.main.humidity);
//             $(".temp").text("Temperature (F) " + response.main.temp);
//             var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//             $(".tempF").text("Temperature (Kelvin) " + tempF);
//             console.log("Wind Speed: " + response.wind.speed);
//             console.log("Humidity: " = response.main.humidity);
//             console.log("Temperature (F): " + response.main.temp);
            
            
            
            
//         });


     
    //   function displayCityInfo() {

    //     var weather = $(this).attr("data-name");
    //     var queryURL = "https://openweathermap.org/api" + weather + "&apikey=27de6d576f342169797bf1826864e56a";

       
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).then(function(response) {
    //         console.log(queryURL);
            
    //         var nameDiv = $("<div class='city-name'>");
    //         var name = response.name;
    //         var pOne = $("<p>").text(name);
    //         nameDiv.append(pOne);
    //         $("#city-view").prepend(nameDiv);
    //     });
    //     $(document).on("click", ".cityBtn", displayCityInfo);
    //     console.log(displayCityInfo);
        
    //   };
    function buttonClick(){
        alert("This button works!")
        
    }
    // document.getElementById("button").addEventListener("click", function(){
    //     console.log(function buttonClick);
        
    // });