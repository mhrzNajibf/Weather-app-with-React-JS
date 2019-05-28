import React from "react";
import Chart from "./Chart"
const EeachDayForecast = (props) => {
    let counts = {};
    for (let i = 0; i < props.data.length; i++) {
        var num = props.data[i].icon;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    };
    let iconArr = Object.values(counts);
    let max = Math.max(...iconArr);
    let iconName = [];
    for (let key in counts) {
        if (counts[key] == max) {
            iconName = key;
        }
    }
    const DayInfo = props.data.map(eachDay => {
        const dayWeek = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return {
            maxTemp: Math.max.apply(Math, props.data.map(each => each.tempMax)),
            minTemp: Math.min.apply(Math, props.data.map(each => each.tempMin)),
            humidity_avr: props.data.reduce((a, b) => (a + b.humidity), 0) / props.data.length,
            humidity: eachDay.humidity,
            iconUrl: `http://openweathermap.org/img/w/${iconName}.png`,
            day:dayWeek[eachDay.WeekDayNum]
        }
    })
    return (
        <div className="weatherCard">
            <div className="dayName"> {DayInfo[0].day} </div>
            <img alt="" className="eachDayWeatherIcon" src={DayInfo[0].iconUrl} width="100px" height="100px"></img>
            <div className="dailyTempMax">{DayInfo[0].maxTemp} &#8451;</div>
            <div className="dailyTempMin">{DayInfo[0].minTemp} &#8451;</div>
            <div className="tempTitle" style={{paddingBottom:"25px",marginTop:"10px"}}>humidity:{DayInfo[0].humidity}%</div>
            {/* <div className="chart" style={{color:"white"}}>
                    <Chart />
                </div> */}

        </div>
    )

}
export default EeachDayForecast;
