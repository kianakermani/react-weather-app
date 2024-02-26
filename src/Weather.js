import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form action="" autoComplete="off">
        <div className="Search">
          <div className="row">
            <div className="col-md-6">
              <input
                type="search"
                placeholder="Type a city name..."
                className="sbox"
              />
            </div>
            <input type="submit" value="Search 🔍" className="but col-md-3" />
            <input type="button" value="Current" className="col-md-3" />
          </div>
        </div>
      </form>
      <div className="sec1">
        <div className="we1">
          <img
            class="today-icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            id="todayIcon"
            alt="icon"
          ></img>
          <br />
          <span class="temoji" id="description">
            Rainy
          </span>
        </div>
        <div className="we2">
          <h4>New York</h4>
          <span></span>
        </div>
        <div className="we3">
          <h4 className="deg">
            <span>10</span>°C
            <span className="c">
              <span id="tempHigh">12</span>°/<span id="tempLow">7</span>° feels
              like
              <span id="feelslike">8</span>°
            </span>
          </h4>
        </div>
        <div className="vl"></div>
        <div className="we4">
          Wind: <span id="wind">13</span>km/h <br />
          Humidity: <span id="humidity"> 67</span>% <br />
          AQI: <span id="aqi">110</span>
        </div>
      </div>
    </div>
  );
}
