import React from "react";
import EeachDayForecast from "./EeachDayForecast";
import { Line } from 'react-chartjs-2';
class ForecastDaily extends React.Component {
    state =
        {
            showChart: this.props.showChart,
            temps: [],
            hours: [],
            Max:[],
            Min:[]
        }
    ShowChart = (input) => {
        const temps = input.map(item => item.temp);
        const hours = input.map(item => item.Hour);
        const Max = input.map(item => item.tempMax);
        const Min = input.map(item => item.tempMin);

        this.setState({
            showChart: "block",
            temps,
            hours,
            Max,
            Min,
        })
    }
    render() {
        const PassData = this.props.ForecastDaily;
        const dayNum = PassData.map((item) => {
            return {
                Hour: new Date(item.dt_txt).getHours(),
                MonthDayNum: new Date(item.dt_txt).getDate(),
                WeekDayNum: new Date(item.dt_txt).getDay(),
                temp: item.main.temp,
                tempMin: item.main.temp_min,
                tempMax: item.main.temp_max,
                icon: item.weather[0].icon,
                humidity: item.main.humidity
            };
        });
        const d_num = [...new Set(dayNum.map(each => each.MonthDayNum))];
        const res = d_num.map(item => {
            const data_i = dayNum.filter(each => each.MonthDayNum === item)
            return (
                <EeachDayForecast
                    key={item.MonthDayNum}
                    ShowChart={this.ShowChart}
                    data={data_i}
                />
            )
        });
        return (
            <div className="daily-Forecast-Container">
                <div className="weatherCard-Container">
                    {res}
                </div>
                <div style={{ display: this.state.showChart }} className="chart">
                    <Line width={650}
                        data={
                            {
                                labels: this.state.hours,
                                datasets: [
                                    {
                                        data: this.state.temps,
                                        label: "Temperature per 3 Hours",
                                        fill: false,
                                        borderColor: "white",
                                        lineTension: 0.1,
                                        backgroundColor: 'white',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'white',
                                        pointBackgroundColor: 'white',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 10,
                                        pointHoverBackgroundColor: '#00157e',
                                        pointHoverBorderColor: 'white',
                                        pointHoverBorderWidth: 4,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                    },
                                    {
                                        data: this.state.Max,
                                        label: "Maximum Temperature per 3 Hours",
                                        fill: false,
                                        borderColor: "red",
                                        lineTension: 0.1,
                                        backgroundColor: 'white',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'white',
                                        pointBackgroundColor: 'white',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 10,
                                        pointHoverBackgroundColor: '#00157e',
                                        pointHoverBorderColor: 'white',
                                        pointHoverBorderWidth: 4,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                    }
                                ],
                                
                            }
                        }
                        options={{
                            maintainAspectRatio: false,
                            responsive: true
                        }} />
                </div>
            </div>

        )
    }
}

export default ForecastDaily;