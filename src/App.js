import React, { Component } from 'react';
import './App.css';
import G2 from '@antv/g2';


class App extends Component {

  state = {
    data: [],
  }

  componentDidMount() { //初始化
    let chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      forceFit: true,
      height: 600,
      width: 800,
      animate: false,
    });
    chart.source(this.state.data); // 这里放数据的
    chart.scale('value', {
      min: 0,
    });
    chart.scale('year', {
      range: [0, 1],
    });
    // chart.axis('value', {
    //   label: null,
    // });
    chart.axis('year', { //清除x轴样式
      label: null,
      tickLine: null
    });

    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    chart.line().position('year*value');


 
    let newDate = this.state.data;
    let currentYear = 0;
    setInterval(() => {
      currentYear++;
      newDate.push({
        year: currentYear + '',
        value: Math.floor(Math.random() * 50) //数据随机数区间
      });
      if (this.state.data.length === 20) { //数据总个数
        newDate.shift();
      }

      this.setState({
        data: newDate
      });
      //图标初始化
      chart.render();
    }, 500);


  }

  render() {

    return (

      <div>
        <div id='c1'></div>
      </div>
    );
  }

}

export default App;

