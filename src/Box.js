import React from "react";
import "./Box.css";

export default function Box() {
  let weatherData = {
    city: "Tappernøje",
    temperature: 19,
    maxTemp: 19,
    minTemp: 14,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div className="Box">
      <h1 id="city-header">{weatherData.city}</h1>
      <hr />
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title" id="day">
            Today
          </h2>
          <h4 className="card-title" id="time">
            {" "}
            Now{" "}
          </h4>
          <div className="card-text">
            <span id="temp"> {weatherData.temperature} </span>
            <span className="tempUnit" id="tempUnit">
              <a href="/" id="celsius-link" className="active temp">
                °C
              </a>{" "}
              |{" "}
              <a href="/" id="fahrenheit-link" className="temp">
                °F
              </a>
            </span>
            &#8287;&#8287;&#8287;&#8287;{" "}
            <span>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                style={{ width: 60, height: 60 }}
              />
            </span>
            <div className="row" id="tempwindhum">
              <div className="col-4">
                <strong> Temperatures </strong>
              </div>
              <div className="col-4">
                <strong> Wind </strong>
              </div>
              <div className="col-4">
                <strong> Humidity </strong>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span id="maxTemp"> {weatherData.maxTemp}</span>
                <span>°</span> |{" "}
                <span id="minTemp"> {weatherData.minTemp} </span>
                <span>°</span>
              </div>
              <div className="col-4">
                <span id="wind"> {weatherData.wind} </span> <span> m/s</span>
              </div>
              <div className="col-4">
                <span id="humidity"> {weatherData.humidity} </span>{" "}
                <span> %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
