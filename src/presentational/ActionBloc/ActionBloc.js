import React from 'react';
import './actionbloc.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  section: {
      margin: theme.spacing(4, 10),
  },
  block: {
      margin: theme.spacing(4, 4),
  },
}));

  

function ActionBloc(props) {
  const classes = useStyles();
  return (
  <div className={classes.section}>
      <div className={classes.block}>
          <Typography gutterBottom variant={'h5'} fontWeight={700}>
              {props.title}
          </Typography>
          <Typography gutterBottom variant={'subtitle1'}>
              {props.subtitle}
          </Typography>
          <Typography variant={'h3'} color={'secondary'} gutterBottom>
              {props.desc}
          </Typography>
      </div>
      <Button variant="contained" variant="outlined" size="large">
          {props.button}
      </Button>  
  </div>
  );
}

export default ActionBloc;
    