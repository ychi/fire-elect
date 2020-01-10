import React from 'react';
import styles from './distparliament.module.scss';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


function DistParliament({dist, winner, wincount, loser, losecount, losingStyle, winningStyle, winProb}) {
  return (
    <Grid item container xs={6} className={styles.distparliament}>
      <Grid item xs={3}>
        <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>{dist}</Box>
      </Grid>
      <Grid item container xs={9}>
        <Grid item xs={12}>
          <span className={styles.winner}>{winner}</span>
          <span className={styles.wincount}>{wincount}</span>
        </Grid>
        <Grid item xs={12}>
          <span className={styles.loser}>{loser}</span>
          <span className={styles.losecount}>{losecount}</span>
        </Grid>
      </Grid>  
      <Grid item xs={12} className={styles.predict_bar}>
        <div className={`${losingStyle} ${styles.baseStyle}`} style={{width: '100%'}}>
          <div className={`${winningStyle} ${styles.coverStyle}`} style={{width: winProb ? `${winProb}%`: 0}}></div>
        </div> 
      </Grid>
    </Grid>
  );
}

export default DistParliament;
    