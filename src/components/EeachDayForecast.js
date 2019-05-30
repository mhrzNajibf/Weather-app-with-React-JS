import React from "react";

const EeachDayForecast = (props) => {
    // console.log("PROPS is ", props.data);

    let counts = {};
    for (let i = 0; i < props.data.length; i++) {
        var num = props.data[i].icon;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    };
    let iconArr = Object.values(counts);
    let max = Math.max(...iconArr);
    let iconName = [];
    for (let key in counts) {
        if (counts[key] === max) {
            iconName = key;
        }
    }
    const DayInfo = props.data.map(eachDay => {
        const dayWeek = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return {
            tempMax: eachDay.tempMax,
            tempMin: eachDay.tempMin,
            maxTemp_max: Math.round(Math.max.apply(Math, props.data.map(each => each.tempMax))),
            minTemp_min: Math.round(Math.min.apply(Math, props.data.map(each => each.tempMin))),
            humidity_avr: props.data.reduce((a, b) => (a + b.humidity), 0) / (props.data.length),
            humidity: eachDay.humidity,
            iconUrl: `http://openweathermap.org/img/w/${iconName}.png`,
            day: dayWeek[eachDay.WeekDayNum]
        }
    })
    // const chartClick = () => {
    //     document.querySelector(".chart").style.display = "flex";
    // }
    return (
        <div className="weatherCard" onClick={() => props.ShowChart(props.data)}>
            <div className="dayName"> {DayInfo[0].day} </div>
            <img alt="condition" className="eachDayWeatherIcon" src={DayInfo[0].iconUrl} width="100px" height="100px"></img>
            <div className="dailyTempMax">{DayInfo[0].maxTemp_max} &#8451;</div>
            <div className="dailyTempMin">{DayInfo[0].minTemp_min} &#8451;</div>
            <div className="tempTitle" style={{ paddingBottom: "25px", marginTop: "10px" }}>humidity:{DayInfo[0].humidity}%</div>
        </div>
    )

}
export default EeachDayForecast;
