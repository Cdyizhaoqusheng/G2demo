
import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizgoblin';
// import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import './App.css';

// 度量配置
const defs = [
    { range: [0, 1] }
];


class Demo2 extends Component {
    state = {
        data: [],
    }

    chartData = () => {
        clearInterval(chartInterval);
        let newDate = this.state.data;
        let currentYear = 0;
        let chartInterval = setInterval(() => {
            currentYear++;
            console.log(this.state.data)
            newDate.push({
              fps: currentYear + '',
              num: Math.floor(Math.random() * 10) //数据随机数区间
            });
            if (this.state.data.length ===20) { //数据总个数
              newDate.shift();
            }
      
            this.setState({
              data: newDate
            });
            
        }, 500);
    }
    
    componentWillMount() {
        this.chartData()
    }

    render() {
        return (
            <Chart height={240} width={320} data={this.state.data}  animate={false} forceFit={true}>
                <Axis dataKey='fps' />
                <Axis dataKey='num' />
                <Tooltip crosshairs="line" />
                <Geom geom='line' position='fps*num' />
            </Chart>
        );
    }
}

export default Demo2;