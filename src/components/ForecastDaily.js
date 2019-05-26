import React from "react";
class ForecastDaily extends React.Component {
    render() {


        // console.log("LOG OF PROPS", this.props.ForecastDaily);
        // console.log("LOG OF ARRAY", forecast5Day);
        return (
            <div className="daily-Forecast-Container" >

                {this.props.ForecastDaily.map(eachDay => {
                    console.log(eachDay);
                    const iconUrl = `http://openweathermap.org/img/w/${eachDay.weather[0].icon}.png`;
                    let day = new Date(eachDay.dt_txt).getDay();
                    console.log(day);
                    switch (day) {
                        case 0:
                            day = "Sunday";
                            break;
                        case 1:
                            day = "Monday";
                            break;
                        case 2:
                            day = "Tuesday";
                            break;
                        case 3:
                            day = "Wednesday";
                            break;
                        case 4:
                            day = "Thursday";
                            break;
                        case 5:
                            day = "Friday";
                            break;
                        case 6:
                            day = "Saturday";
                            break;
                        default:
                            break;
                    }
                    return (
                        <div key={eachDay.dt} className="weatherCard">
                            <div className="dayName"> {day} </div>
                            <div className="dailyTemp">
                                <img alt="" className="eachDayWeatherIcon" src={iconUrl} width="90px" height="90px"></img>
                                <div className="eachDayWeather">{eachDay.weather[0].main}</div>
                                {/* <p className="tempTitle">max temp:</p><br/> */}
                                <div className="dailyTempMax">{eachDay.main.temp_max} &#8451;</div>
                                {/* <p className="tempTitle">min temp:</p><br/> */}
                                <div className="dailyTempMin">{eachDay.main.temp_min} &#8451;</div>
                            </div>
                            <div className="tempTitle">humidity:{eachDay.main.humidity}%</div>
                        </div>

                    )
                })}

            </div>
        )
    }
}

export default ForecastDaily;