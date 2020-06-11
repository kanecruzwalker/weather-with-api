// JS page linked
const express = require("express");
const app = express();

// use https to cary out get request from API
const https = require("https");

app.get("/", function (req, res){
    
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=daf08b427b26f11b51a8b3849391acfc&units=imperial";
    https.get(queryUrl, function (response){
        console.log(response.data);

        response.on("data", function (data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;

            const description = weatherData.weather[0].description;

 

            // now time to respond from our server
            res.write("<h1>The temperature is " + temp + "</h1>");
            res.write("<h2>The current description is: " + description+"</h2>");
            res.send();
        });
    });
});

app.listen(3000, function (){
    console.log("Server Listening on port 3000");
});