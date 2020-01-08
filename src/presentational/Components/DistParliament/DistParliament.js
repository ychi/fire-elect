import React from 'react';
import './distparliament.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
      <Grid item xs={12} className="predict_bar"></Grid>
    </Grid>
  );
}

export default DistParliament;
    