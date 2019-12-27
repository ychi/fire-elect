import React from 'react';
import './actionbloc.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  section: {
      margin: theme.spacing(4),
  },
  block: {
      margin: theme.spacing(2),
  },
}));


function ActionBloc(props) {
  const classes = useStyles();
  return (
  <div className={classes.section}>
      <div className={classes.block}>
          <Typography component="div">
            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" lineHeight={2}>{props.title}</Box>
            <Box fontSize="subtitle.fontSize " lineHeight={1.8}>{props.subtitle}</Box>
            <Box fontSize="body2.fontSize" lineHeight={1.6}>{props.desc}</Box>
          </Typography>
      </div>
      <Button variant={'outlined'} size="large">
          {props.button}
      </Button>  
  </div>
  );
}

export default ActionBloc;
    