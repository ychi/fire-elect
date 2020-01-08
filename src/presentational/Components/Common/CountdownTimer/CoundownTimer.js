import React, { useState } from "react";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import styles from "./CountdownTimer.module.scss";

import useInterval from "../../../../hooks/useInterval";

function CoundownTimer(props) {

  const [difference, setDifference] = useState(new Date("2020-01-11T08:00:00") - new Date());

  function tickTock() {
    setDifference(new Date("2020-01-11") - new Date());
  }

  useInterval(tickTock, 1000);

  return (
    <Box
      component="div"
      width="30px"
      // height={props.clockHeight}
      className={styles.countdownSection}
    >
      <Typography component="div" variant={props.fontSize}>
        <Box fontWeight="fontWeightBold">貳零貳零</Box>
        <hr />
        <Box fontWeight="fontWeightBold">壹月拾壹</Box>
        <hr />
        {difference > 0 && <Box fontWeight="fontWeightBold">距大選</Box>}
      </Typography>
      <br />
      {difference > 0 && (
        <Typography
          component="div"
          variant={props.fontSize}
          className={styles.countdownTimer}
        >
          <Box fontWeight="fontWeightBold">
            {Math.floor(difference / (1000 * 60 * 60 * 24))}
          </Box>
          <Box fontWeight="fontWeightBold">天</Box>
          <Box fontWeight="fontWeightBold">
            {Math.floor((difference / (1000 * 60 * 60)) % 24)}
          </Box>
          <Box fontWeight="fontWeightBold">時</Box>
          <Box fontWeight="fontWeightBold">
            {Math.floor((difference / 1000 / 60) % 60)}
          </Box>
          <Box fontWeight="fontWeightBold">分</Box>
          <Box fontWeight="fontWeightBold">
            {Math.floor((difference / 1000) % 60)}
          </Box>
          <Box fontWeight="fontWeightBold">秒</Box>
        </Typography>
      )}
    </Box>
  );
}

export default CoundownTimer;
    