import React from "react";
import { Bar , Line, Pie } from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // chartData:{
            //     lables:[1,2,3,4],
            //     datasets:[
            //         {
            //             lable:'Temprature',
            //             data : [
            //                 101112,
            //                 131415,
            //                 161718,
            //                 192021
            //             ],
            //             backgroundColor: [
            //                 'rgba(255,99,132,0.6)',
            //                 'rgba(54,162,235,0.6)',
            //                 'rgba(255,206,86,0.6)',
            //                 'rgba(75,192,192,0.6)'
            //                 // 'rgba(153,102,255,0.6)',
            //                 // 'rgba(255,159,64,0.6)',
            //                 // 'rgba(255,99,132,0.6)',
            //             ]
            //         }
            //     ]
            // }
        }
    }
    render() {
      let  chartData={
            lables:[1,2,3,4],
            datasets:[
                {
                    lable:'Temprature',
                    data : [
                        101112,
                        131415,
                        161718,
                        192021
                    ],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)'
                        // 'rgba(153,102,255,0.6)',
                        // 'rgba(255,159,64,0.6)',
                        // 'rgba(255,99,132,0.6)',
                    ]
                }
            ]
        }
        // console.log(this.state.data);
        return (
            <div >
                <Line
                    data={chartData}
                    width={30}
                    height={30}
                    options={{}}
                />
    
            </div>
        );
    }
}
export default Chart;