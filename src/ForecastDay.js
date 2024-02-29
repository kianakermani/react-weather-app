import React from "react";
import "./Forecast.css";
export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  let icon = props.data.weather[0].icon;

  return (
    <div>
      <div className="sec2" id="forecast">
        <div className="col-2 element">
          <div className="day">{day()}</div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            width="42"
          />

          <div className="temp">
            <span>{maxTemperature()}</span>
            <br />
            <span> {minTemperature()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
