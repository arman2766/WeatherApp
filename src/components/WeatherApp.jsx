import React, { useState } from 'react';
import './WeatherApp.css';
import CurrentDayDate from './CurrentDayDate';

function WeatherApp() {
  const api_key = "d5e1099449c022bc0f63419f2337daf0";

  // const [currentLocationWeather, setCurrentLocationWeather] = useState(null);

  const search = async () => {
    const element = document.getElementsByClassName("input_field");
    if (element[0].value === "") {
      return 0;
    }
    else {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      updateWeatherInfo(data);
    }
  }

  const getCurrentLocationWeather = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        updateWeatherInfo(data);
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  const updateWeatherInfo = (data) => {
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperate = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperate[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;


  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="img_section">
            <div className="default_info">
              <CurrentDayDate />
              <h2 className="default_day">{CurrentDayDate.day}</h2>
              <span className="default_date">{CurrentDayDate.formattedDate}</span>
            </div>
          </div>
          <div className="content_section">

            <form>
              <input
                type="text"
                placeholder="Search Location"
                className="input_field"
              />
              <button onClick={search} type="button" className="btn_search">Search</button>

            </form>

            <div className="day_info">
              <div className="content">
                <p className="title">LOCATION</p>
                <span className="weather-location">Patna</span>
              </div>
              <div className="content">
                <p className="title">TEMP</p>
                <span className="temp">20 °C</span>
              </div>
              <div className="content">
                <p className="title">HUMIDITY</p>
                <span className="humidity-percent">30 %</span>
              </div>
              <div className="content">
                <p className="title">WIND SPEED</p>
                <span className="wind-rate">16 km/h</span>
              </div>
            </div>
            <div className='current_search'>
              <button onClick={getCurrentLocationWeather} type="button" className="btn_current_search">My Weather </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
