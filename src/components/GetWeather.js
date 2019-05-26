import React from "react";

class GetWeather extends React.Component {
    render() {
        return (
            <div className="GetWeather" >
                <form  autoComplete="on" className="GetWeatherForm" onSubmit={this.props.GetWeather} >
                <input type="text" placeholder="Enter City Name" name="city" />
                <input type="text" placeholder="Enter Country Name" name="country"/>
                <button> Get Weather</button>
                </form>
                
            </div>
        )
    }
}
export default GetWeather;