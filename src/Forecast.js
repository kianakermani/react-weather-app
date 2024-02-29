import React from "react";
export default function Forecast() {
  return (
    <div>
      <div className="sec2" id="forecast">
        <div className="col-2">
          <div>day</div>
          <img
            // eslint-disable-next-line no-template-curly-in-string
            src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
            alt=""
            width="42"
          />
          <div>
            <span>max temp</span>
            <br />
            <span>min temp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
