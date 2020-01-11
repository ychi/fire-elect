import React from 'react';
import './linegraph.scss';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    name: '韓 實際得票率',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
}, {
    name: '蔡 實際得票率',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
}, {
    name: '宋 實際得票率',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
}, {
    name: '韓 預測得票率',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: '蔡 預測得票率',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
}, {
    name: '宋 預測得票率',
    data: [23916, 21024, 22742, 12851, 13490, 10282, 14121, 16434]
},]
};

const LineGraph = () => (
  <div className="linegraph" width="100%">
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>
);

export default LineGraph;