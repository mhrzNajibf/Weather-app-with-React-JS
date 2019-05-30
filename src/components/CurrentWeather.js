import React from "react";
import locationIcon from "../image/locationIcon.png";
class CurrentWeather extends React.Component {
    render() {
        const city = this.props.city;
        const country = this.props.country;
        const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;
        return (
            <div className="current-Weather-Conitainer" style={{ display: city && country ? "flex" : "none" }}>
                <div className="location">
                    <img alt="" className="locationIcon" src={locationIcon} height="25px" width="25px"
                    ></img>
                    <div className="locationName">
                        {this.props.city} {this.props.country} </div>
                    <img alt="" src={iconUrl} width="60px" height="60px"></img>
                    
                </div>
                <div className="currentTemp">
                <div className="WeatherStatus">{this.props.weather}</div>
                    <p style={{ color: "gray", fontSize: "14px", fontFamily: "Arial", fontWeight: "400", alignSelf: "center", justifyContent: "center", marginLeft: "15px" }}>
                        Current temprature:</p>
                    <div className="WeatherDes"> {Math.round(this.props.temp)} &#8451;</div>
                    </div>
            </div>
        )
    }
}

export default CurrentWeather;