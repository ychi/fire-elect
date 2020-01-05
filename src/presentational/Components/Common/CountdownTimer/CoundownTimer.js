import React, { useState } from "react";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import styles from "./CountdownTimer.module.scss";

function CoundownTimer() {

  const [difference, setDifference] = useState(new Date("2020-01-11") - new Date());

  function tickTock() {
    setDifference(new Date("2020-01-11") - new Date());
  }

  setInterval(tickTock, 1000);

  return (
    <Box component="div" width="30px" height="90vh" className={styles.countdownSection}>
      <Typography
        component="div"
        variant="h5"
      >
        <Box fontWeight="fontWeightBold">貳零貳零</Box>
        <hr />
        <Box fontWeight="fontWeightBold">壹月拾壹</Box>
        <hr />
        <Box fontWeight="fontWeightBold">距大選</Box>
      </Typography>
      <br/>
      <Typography
        component="div"
        variant="h5"
        className={styles.countdownTimer}
      >
        <Box fontWeight="fontWeightBold">{Math.floor(difference / (1000 * 60 * 60 * 24))}</Box>
        <Box fontWeight="fontWeightBold">天</Box>
        <Box fontWeight="fontWeightBold">{Math.floor((difference / (1000 * 60 * 60)) % 24)}</Box>
        <Box fontWeight="fontWeightBold">時</Box>
        <Box fontWeight="fontWeightBold">{Math.floor((difference / 1000 / 60) % 60)}</Box>
        <Box fontWeight="fontWeightBold">分</Box>
        <Box fontWeight="fontWeightBold">{Math.floor((difference / 1000) % 60)}</Box>
        <Box fontWeight="fontWeightBold">秒</Box>
      </Typography>
    </Box>
  );
}

export default CoundownTimer;
    