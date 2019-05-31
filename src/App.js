import React from "react";
import Header from "./components/Header";
import GetWeather from "./components/GetWeather";
import CurrentWeather from "./components/CurrentWeather";
import './App.css';
import ForecastDaily from "./components/ForecastDaily";

const API_KEY = "ddc3f6acd6a4983de3c9095cd90878c4";
class App extends React.Component {
  state = {
    city: null,
    country: null,
    weather: null,
    weatherDes: null,
    maxTemp: null,
    minTemp: null,
    currentTemp: null,
    humidity: null,
    icon: null,
    temp: null,
    daily: [],
    chartData:[]
  }
  GetWeather = async (e) => {
    e.preventDefault();
    console.log(e);
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;
    const Lang = e.target.elements.Lang
    var urls = [
      `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=metric&lang=${Lang}&APPID=${API_KEY}`,
      `http://api.openweathermap.org/data/2.5/forecast/?q=${City},${Country}&units=metric&lang=${Lang}&cnt=40&APPID=${API_KEY}`
    ]
    Promise.all(urls.map(url =>
      fetch(url)
        .then(value => value.json())
    )).then(data => {
      // const dailyHourChange = [0, 8, 16, 24, 32];
      // const forecast5Day = dailyHourChange.map((item) => [...data[1].list][item]);
      this.setState({
        city: data[0].name,
        country: data[0].sys.country,
        weather: data[0].weather[0].main,
        weatherDes: data[0].weather[0].description,
        maxTemp: data[0].main.temp_max,
        minTemp: data[0].main.temp_min,
        currentTemp: data[0].main.temp,
        humidity: data[0].main.humidity,
        icon: data[0].weather[0].icon,
        temp: data[0].main.temp,
        daily: data[1].list,
        chartData:data[1].list
      })
    }).catch(err => {
      console.log(err);
    });
// console.log("day is",new Date(1558904400));

  }
  render() {
    return (
      <div>
        <Header />
        <GetWeather GetWeather={this.GetWeather} />
        <CurrentWeather {...this.state} />
        <ForecastDaily ForecastDaily={this.state.daily} chartData={this.state.chartData} />
      </div>
    );
  }
}
export default App;
