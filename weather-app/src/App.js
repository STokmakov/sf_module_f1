import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Weather5day from "./components/weathe5day";


// eslint-disable-next-line
const API_KEY = "1b0f5c7556a804dca17e626cbfb18036";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    
    if(city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
         
      const data = await api_url.json();
     
     
      this.setState({
        temp: data.main.temp,       
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined
      });
     
    const api_url2 = await
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data2 = await api_url2.json();

    this.setState({
      temp1: data2.list[0].main.temp, 
      temp2: data2.list[8].main.temp,
      temp3: data2.list[16].main.temp,
      temp4: data2.list[24].main.temp,
      temp5: data2.list[32].main.temp,
      pressure1: data2.list[0].main.pressure,
      pressure2: data2.list[8].main.pressure,
      pressure3: data2.list[16].main.pressure,
      pressure4: data2.list[24].main.pressure,
      pressure5: data2.list[32].main.pressure,
      error: undefined
    });
    } else {
      this.setState({
        temp: undefined,
        temp1: undefined,
        temp2: undefined,
        temp3: undefined,
        temp4: undefined,
        temp5: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        pressure1: undefined,
        pressure2: undefined,
        pressure3: undefined,
        pressure4: undefined,
        pressure5: undefined,
        error: "Введите название города"
      });
    }
  }
    
  


  render() {
    return (
      
        <div className="container"> 
          <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7 info">
              <Info />
            </div>          
              <div className="col-xs-12 col-sm-12 col-md-5 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    error={this.state.error}
                  />
              </div>             
          </div>
          <div className="row">
          
            <div className="col-xs-12 col-sm-6 col-md-2">
                <Weather5day
                    day={1}
                    temp={this.state.temp1}
                    city={this.state.city}
                    pressure={this.state.pressure1}
                    error={this.state.error}
                />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
                <Weather5day
                    day={2}
                    temp={this.state.temp2}
                    city={this.state.city}
                    pressure={this.state.pressure2}
                    error={this.state.error}
                />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
                <Weather5day
                    day={3}
                    temp={this.state.temp3}
                    city={this.state.city}
                    pressure={this.state.pressure3}
                    error={this.state.error}
                />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
                <Weather5day
                    day={4}
                    temp={this.state.temp4}
                    city={this.state.city}
                    pressure={this.state.pressure4}
                    error={this.state.error}
                />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
                <Weather5day
                    day={5}
                    temp={this.state.temp5}
                    city={this.state.city}
                    pressure={this.state.pressure5}
                    error={this.state.error}
                />
            </div>
         </div>  
      </div>
    </div>
</div>
    );
  }
}

export default App;