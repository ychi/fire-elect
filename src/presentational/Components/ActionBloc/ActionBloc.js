import React from 'react';
import './actionbloc.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

function ActionBloc(props) {
  return (
    <Box className="actionbloc">
      <CardActionArea>
        <Box className="textbloc">
          <Typography className="type">
            <Box fontSize="body2.fontSize" lineHeight={1.6}>{props.desc}</Box>
            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" lineHeight={1.3}>{props.title}</Box>
            <Box fontSize="caption.fontSize " lineHeight={1.8}>{props.subtitle}</Box>
          </Typography>
          
        </Box> 
        <div className="call2act">進入</div>
      </CardActionArea>
    </Box>
  );
}

export default ActionBloc;
    