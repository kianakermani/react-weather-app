import { useState, useEffect } from "react";
import axios from "axios";
import Date from "./Date";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather({ city: initialCity }) {
  const [city, setCity] = useState(initialCity);
  const [wdata, setWdata] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const weatherKey = "346306cfc5ae6f62d18006d5ed13bf4c";
      const aqiKey = "1f4cba53146181e48c2aeb1f4746903446e654a4";

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`;
      const aqiUrl = `https://api.waqi.info/feed/${city}/?token=${aqiKey}`;

      try {
        const [weatherRes, aqiRes] = await Promise.all([
          axios.get(weatherUrl),
          axios.get(aqiUrl),
        ]);

        setWdata({
          temp: Math.round(weatherRes.data.main.temp),
          wind: weatherRes.data.wind.speed,
          city: weatherRes.data.name,
          description: weatherRes.data.weather[0].description,
          humidity: weatherRes.data.main.humidity,
          max: Math.round(weatherRes.data.main.temp_max),
          min: Math.round(weatherRes.data.main.temp_min),
          feel: Math.round(weatherRes.data.main.feels_like),
          icon: weatherRes.data.weather[0].icon,
          date: weatherRes.data.dt * 1000,
          coordinates: weatherRes.data.coord,
        });

        setAqi(aqiRes.data.data.aqi ?? null);
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 401) {
          setError("API Key is invalid or expired 🔑");
        } else if (err.response && err.response.status === 404) {
          setError("City not found 😕");
        } else {
          setError("Something went wrong 😵");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.elements.cityInput.value.trim());
  };

  if (loading) return <div className="Weather">Loading...</div>;
  if (error) return <div className="Weather error">{error}</div>;

  return (
    <div className="Weather">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="Search row">
          <div className="col-md-9">
            <input
              name="cityInput"
              type="search"
              placeholder="Type a city name..."
              className="sbox"
              defaultValue={city}
              autoFocus
            />
          </div>
          <input type="submit" value="Search 🔍" className="but col-md-3" />
        </div>
      </form>

      <div className="sec1">
        <div className="we1">
          <img
            src={`http://openweathermap.org/img/wn/${wdata.icon}@2x.png`}
            alt="weather icon"
          />
          <span className="temoji text-capitalize">{wdata.description}</span>
        </div>

        <div className="we2">
          <h4>{wdata.city}</h4>
          <Date value={wdata.date} />
        </div>

        <div className="we3">
          <h4>{wdata.temp}°C</h4>
          <span>
            {wdata.max}° / {wdata.min}° feels like {wdata.feel}°
          </span>
        </div>

        <div className="we4">
          Wind: {wdata.wind} km/h <br />
          Humidity: {wdata.humidity}% <br />
          AQI: {aqi ?? "—"}
        </div>
      </div>

      <Forecast coordinates={wdata.coordinates} />
    </div>
  );
}
