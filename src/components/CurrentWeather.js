import React from "react";
import locationIcon from "../image/locationIcon.png";
class CurrentWeather extends React.Component {
    render() {
        const city = this.props.city;
        const country = this.props.country;
        const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;
        return (
            <div className="current-Weather-Conitainer" style={{display: city && country ? "flex" : "none"}}>
                <div className="location">
                    <img alt="" className="locationIcon" src={locationIcon} height="30px" width="30px"
                    ></img>
                    <div className="locationName">
                        {this.props.city} {this.props.country} </div>
                </div>
                <div className="Weather">
                <img alt="" src={iconUrl} width="90px" height="90px"></img>
                    <div className="WeatherStatus">{this.props.weather}</div>
                    <p style={{color:"gray",fontSize:"18px",fontFamily:"Arial",fontWeight:"400"}}>
                     Current temprature:</p>
                    <div className="WeatherDes"> {this.props.temp} &#8451;</div>
                    <div 
                    style={{
                        color:"red",
                        fontSize:"30px",
                        fontFamily:"Arial",
                        fontWeight:"600",
                        // border:"1px solid red",
                        display:"flex",
                        justifyContent:"center",
                        flex:"1",
                        margin:"0 auto"}}>
                    {this.props.maxTemp} &#8451;</div>
                    <div 
                    style={{
                        color:"green",
                        fontSize:"30px",
                        fontFamily:"Arial",
                        fontWeight:"400",
                        // border:"1px solid red",
                        display:"flex",
                        justifyContent:"center",
                        flex:"1",
                        margin:"0 auto"}}>
                    {this.props.minTemp} &#8451;</div>

                </div>
            </div>
        )
    }
}

export default CurrentWeather;