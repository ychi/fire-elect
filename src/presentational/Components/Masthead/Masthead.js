import React from 'react';
import './masthead.scss';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  section: {
      margin: theme.spacing(4, 10),
  },
}));

function ActionBloc(props) {
  const classes = useStyles();
  return (
  <div className="masthead">
      <div className={classes.section}>
          <Typography gutterBottom variant={'h2'}>
              {props.title}
          </Typography>
      </div>
  </div>
  );
}

export default ActionBloc;
    