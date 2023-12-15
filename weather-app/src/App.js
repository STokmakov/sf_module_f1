import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

// eslint-disable-next-line
const API_KEY = "1b0f5c7556a804dca17e626cbfb18036";

class App extends React.Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;