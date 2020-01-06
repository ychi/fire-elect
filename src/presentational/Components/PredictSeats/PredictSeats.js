import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import HeatMap from "../PredictSeats/HeatMap";

import styles from './PredictSeats.module.scss';

const partyHistory = {
  KMT: {
    index: 0,
    name: '國民黨',
    pastTake: 35,
    userPredict: 20,
    color: '#7986CB'
  },
  DPP: {
    index: 1,
    name: '民進黨',
    pastTake: 35,
    color: '#81C784'
  },
  PFP: {
    index: 2,
    name: '親民黨',
    pastTake: 35,
    color: '#FFB74D'

  },
  TPP: {
    index: 3,
    name: '民眾黨',
    pastTake: 35,
    color: '#4DB6AC'
  },
  NPP: {
    index: 4,
    name: '時代力量',
    pastTake: 35,
    color: '#FFF176'
  },
  TSP: {
    index: 5,
    name: '臺灣基進',
    pastTake: 35,
    color: '#A1887F'
  },
  NP: {
    index: 6,
    name: '新黨',
    pastTake: 35,
    color: '#4DD0E1'
  },
  GP: {
    index: 7,
    name: '綠黨',
    pastTake: 35,
    color: '#DCE775'
  },
  OTHERS: {
    index: 8,
    name: '其他政黨',
    pastTake: 35,
    color: '#90A4AE'
  }
}


export default function PredictSeats() {
    return (
      <div>
        2020總統大選：你的預測
        <br />
        <br />
        <br />
        <HeatMap />
        <Grid container item md={12} justify="flex-end" alignItems="flex-end">
          <Typography variant="h2">
            000
          </Typography>
          &nbsp;&nbsp;&nbsp;
          <Typography variant="subtitle2">
            <Box component="span" fontWeight="fontWeightBold">已預測</Box>
          </Typography>
          <Typography variant="h2">113</Typography>&nbsp;&nbsp;&nbsp;
          <Typography variant="subtitle2">
            <Box component="span" fontWeight="fontWeightBold">席次</Box>
          </Typography>
        </Grid>
        <br />
        <br />
        <br />
        <Box>
          <Grid container spacing={5}>
            {Object.values(partyHistory).map(party => {
              return (
                <Grid
                  key={party.index}
                  container
                  item
                  md={6}
                  spacing={1}
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item md={1}>
                    <div
                      style={{
                        width: 20 + "px",
                        height: 20 + "px",
                        backgroundColor: party.color
                      }}
                    />
                  </Grid>
                  <Grid item md={3}>
                    {party.name}
                  </Grid>
                  <Grid item md={8}>
                    <TextField
                      variant="outlined"
                      type="number"
                      placeholder={`上次得票席次: ${party.pastTake}`}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    );
}