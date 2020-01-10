import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { TileMap, Tile } from './Tiles';
import styles from './PredictSeats.module.scss';

const partyInfos = {
  kmt: {
    label: '國民黨',
    colorClass: styles.kmt,
    lastTerm: 35
  },
  dpp: {
    label: '民進黨',
    colorClass: styles.dpp,
    lastTerm: 68
  },
  pfp: {
    label: '親民黨',
    colorClass: styles.pfp,
    lastTerm: 3
  },
  tpp: {
    label: '民眾黨',
    colorClass: styles.tpp,
    lastTerm: 'N/A'
  },
  npp: {
    label: '時代力量',
    colorClass: styles.npp,
    lastTerm: 3
  },
  tsp: {
    label: '台灣基進',
    colorClass: styles.tsp,
    lastTerm: 'N/A'
  },
  np: {
    label: '新黨',
    colorClass: styles.np,
    lastTerm: 0
  },
  gp: {
    label: '綠黨',
    colorClass: styles.gp,
    lastTerm: 0
  },
  others: {
    label: '其他政黨',
    colorClass: styles.others,
    lastTerm: 4
  }
};




const distributionToSeats = (dist) => {
  let aggr = dist.reduce((aggregate, party) => {
    for (let i = 0; i < party.prediction; i++) {
      aggregate.seats.push({
        colorClass: partyInfos[party.partyId].colorClass
      });
    }
    aggregate.count += party.prediction;
    return aggregate;
  }, { count: 0, seats: [] });

  while (aggr.count < 113) {
    aggr.seats.push({
      colorClass: styles.default
    });
    aggr.count++;
  }
  return aggr.seats;
};




export default function PredictSeats({distribution, dispatch}) {
  const predicted = distribution.reduce((sum, party) => { return sum + party.prediction }, 0);
  const unusedSeats = 113 - predicted;
  const seats = distributionToSeats(distribution);
  
  return (
    <div>
      <TileMap seats={seats} />
      <Grid container item md={12} justify="flex-end" alignItems="flex-end">
        <Typography variant="h2">
          {predicted}
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
          {Object.keys(partyInfos).map((partyId, idx) => {
            let existing = distribution.find((p)=>(p.partyId===partyId));
            let party = partyInfos[partyId];
            return (
              <Grid
                key={idx}
                container
                item
                md={6}
                spacing={1}
                justify="flex-start"
                alignItems="center"
              >
                <Tile colorClass={party.colorClass} />

                <Grid item md={3} sm={8} xs={10}>
                  {party.label}
                </Grid>
                <Grid item md={9} sm={10}>
                  <TextField
                    value = {existing?existing.prediction:''}
                    onChange= {(e)=>{dispatch({partyId: partyId, prediction: e.currentTarget.value})}}
                    variant="outlined"
                    type="number"
                    placeholder={`前屆: ${party.lastTerm}`}
                    inputProps={{max: unusedSeats}}
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