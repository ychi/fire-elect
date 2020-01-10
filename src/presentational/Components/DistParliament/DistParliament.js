import React from 'react';
import './distparliament.scss';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const bar = {
  chart: {
    height: 50,
    type: 'bar'
},
title: {
    text: ''
},
credits: {
  enabled: false
},
xAxis: {
    visible: false,
},
yAxis: {
    visible: false,
},
legend: {
    enabled: false,
},

plotOptions: {
    series: {
        stacking: 'normal',
        pointWidth: 10
    },
    bar: {
        dataLabels: {
            enabled: true,
            distance : -50,
            formatter: function() {
                var dlabel = this.series.name + '<br/>';
                dlabel += Math.round(this.percentage*100)/100 + ' %';
                    return dlabel
             },
            style: {
                color: 'white',
            },
        },
        
    },
},
series: [{
    name: '吳宜農',
    data: [64]
}, {
    name: '蔣萬安',
    data: [36]
}]
};

function DistParliament(props) {
  return (
    <Grid item container xs={6} className="distparliament">
      <Grid item xs={3}>
        <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>{props.dist}</Box>
      </Grid>
      <Grid item container xs={9}>
        <Grid item xs={12}>
          <span className="winner">{props.winner}</span>
          <span className="wincount">{props.wincount}</span>
        </Grid>
        <Grid item xs={12}>
          <span className="loser">{props.winner}</span>
          <span className="losecount">{props.losecount}</span>
        </Grid>
      </Grid>  
      <Grid item xs={12} className="predict_bar">
        <Box className="barwidth">
          <HighchartsReact
        highcharts={Highcharts}
        options={bar}
        />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DistParliament;
    