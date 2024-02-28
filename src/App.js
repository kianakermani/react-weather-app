import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Weather App <i className="fa-solid fa-cloud-bolt"></i>
        </h1>
        <Weather city="Tehran" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kianakermani"
            target="_blank"
            rel="noreferrer"
          >
            Kiana Kermani
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kianakermani/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
