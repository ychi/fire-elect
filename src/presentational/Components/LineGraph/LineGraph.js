import React from 'react';
import './linegraph.scss';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const LineGraph = ({options={}}) => (
  <div className="linegraph" width="100%">
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>
);

export default LineGraph;