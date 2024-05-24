// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mohammed
// Created on: May 2024
// This file contains the JS functions for index.html


"use strict"

/**
 * Check service worker support"
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Osamah-Hasan/sw.js", {
    scope: "/ICS2O-Unit-6-01-Osamah-Hasan/",
  })
}

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    jsonData.main.temp = Math.round(jsonData.main.temp - 273.15)
    jsonData.main.feels_like = Math.round(jsonData.main.feels_like - 273.15)
    document.getElementById("answer").innerHTML = "The weather is " + jsonData.weather[0].main + " with " + jsonData.weather[0].description + "<br /> <br />" + "The temperature right now is " + jsonData.main.temp + " feels like " + jsonData.main.feels_like
    document.getElementById("weather-icon").innerHTML = "<img src='http://openweathermap.org/img/wn/" + jsonData.weather[0].icon + "@2x.png'>"
  } catch (err) {
    console.log(err)
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")