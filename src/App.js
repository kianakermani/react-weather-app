import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Weather App <i class="fa-solid fa-cloud-bolt"></i>
        </h1>
        <Weather />

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
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
