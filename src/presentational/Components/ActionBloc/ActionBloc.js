import React from 'react';
import './actionbloc.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

function ActionBloc(props) {
  return (
    <Card className="actionbloc" align="center" justifyContent="center">
      <CardActionArea>
        <Box className="textbloc">
          <Typography component="div">
            <Box fontSize="body2.fontSize" lineHeight={1.6}>{props.desc}</Box>
            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={2}>{props.title}</Box>
            <Box fontSize="h6.fontSize " lineHeight={1.8}>{props.subtitle}</Box>
          </Typography>
        </Box> 
      </CardActionArea>
    </Card>
  );
}

export default ActionBloc;
    