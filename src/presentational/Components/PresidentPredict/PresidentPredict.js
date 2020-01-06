import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Slider from '@material-ui/core/Slider';


const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 40,
      label: '40%',
    },
    {
      value: 60,
      label: '60%',
    },
    {
      value: 80,
      label: '80%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function valuetext(value) {
    return `${value}%`;
    }


export default ({percentages = {s: 33, h: 33, t: 33}, commit = ()=>{}})=>(
    <Typography id="discrete-slider-always" gutterBottom>
        <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">宋楚瑜</Box>
        <Slider
            value={percentages.s}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            onChange = {(evt, val)=>{commit('S', val)}}
        />
        <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">韓國瑜</Box>
        <Slider
            value={percentages.h}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            onChange = {(evt, val)=>{commit('H', val)}}
        />
        <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">蔡英文</Box>
        <Slider
            value={percentages.t}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            onChange = {(evt, val)=>{commit('T', val)}}
        />
    </Typography>
);