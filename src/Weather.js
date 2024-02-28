import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [wdata, setWdata] = useState({});
  const [city, setCity] = useState(props.city);

  function handle(r) {
    console.log(r.data);

    setWdata({
      temp: Math.round(r.data.main.temp),
      wind: r.data.wind.speed,
      city: r.data.name,
      description: r.data.weather[0].description,
      humidity: r.data.main.humidity,
      max: Math.round(r.data.main.temp_max),
      min: Math.round(r.data.main.temp_min),
      feel: Math.round(r.data.main.feels_like),
      icon: r.data.weather[0].icon,
      date: r.data.dt * 1000,
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handle);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form action="" autoComplete="off" onSubmit={handleSubmit}>
          <div className="Search">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="search"
                  placeholder="Type a city name..."
                  className="sbox"
                  onChange={handleCityChange}
                  autoFocus="on"
                />
              </div>
              <input
                type="submit"
                value="Search 🔍"
                id="searchbtn"
                className="but col-md-3"
              />
              <input
                type="button"
                value="Current"
                id="currentbtn"
                className=" but col-md-3"
              />
            </div>
          </div>
        </form>
        <div className="sec1">
          <div className="we1">
            <img
              className="today-icon"
              src={`http://openweathermap.org/img/wn/${wdata.icon}@2x.png`}
              id="todayIcon"
              alt="icon"
            ></img>
            <br />
            <span className="temoji text-capitalize" id="description">
              {wdata.description}
            </span>
          </div>
          <div className="we2">
            <h4>{wdata.city}</h4>
            <span id="date">
              <Date value={wdata.date} />
            </span>
          </div>
          <div className="we3">
            <h4 className="deg">
              <span id="degree">{wdata.temp}</span>°C
            </h4>
            <span className="C">
              <span id="tempHigh">{wdata.max}</span>°/
              <span id="tempLow">{wdata.min}</span>° feels like
              <span id="feelslike"> {wdata.feel}</span>°
            </span>
          </div>
          <div className="vl"></div>
          <div className="we4">
            Wind: <span id="wind">{wdata.wind}</span>km/h <br />
            Humidity: <span id="humidity"> {wdata.humidity}</span>% <br />
            AQI: <span id="aqi">110</span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
