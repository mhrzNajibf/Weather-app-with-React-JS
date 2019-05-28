import React from "react";
import EeachDayForecast from "./EeachDayForecast"

class ForecastDaily extends React.Component {
    render() {
        const PassData = this.props.ForecastDaily;
        const dayNum = PassData.map((item) => {
            return {
                MonthDayNum: new Date(item.dt_txt).getDate(),
                WeekDayNum: new Date(item.dt_txt).getDay(),
                temp: item.main.temp,
                tempMin: item.main.temp_min,
                tempMax: item.main.temp_max,
                icon:item.weather[0].icon,
                humidity:item.main.humidity
            };
        });
        const d_num = [...new Set(dayNum.map(each => each.MonthDayNum))];
        const res = d_num.map(item => {
            const data_i = dayNum.filter(each => each.MonthDayNum === item)
            return (
                <EeachDayForecast
                    data={data_i}
                />
            )
        });
        return (
            <div className="daily-Forecast-Container" >
                {res}
            </div>
        )
    }
}

export default ForecastDaily;