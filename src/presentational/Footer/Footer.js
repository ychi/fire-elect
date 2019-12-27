import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 10),
    backgroundColor: '#ffffff',
  },
}));


function Footer(props) {
  const classes = useStyles();
  return (
  <div>
    <div className={classes.root}>
      <Typography component="div" color="textSecondary">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" lineHeight={1.6} textAlign="center">
              Fire Elect
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box fontSize="body" fontWeight="fontWeightBold" lineHeight={1.6}>
              關於我們
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box fontSize="body" fontWeight="fontWeightBold" lineHeight={1.6}>
                我大膽預測
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box fontSize="body" fontWeight="fontWeightBold" lineHeight={1.6}>
                庶民ㄟ心聲
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box fontSize="body" fontWeight="fontWeightBold" lineHeight={1.6}>
                AI 戰情室
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box fontSize="body" fontWeight="fontWeightBold" lineHeight={1.6}>
                認同請分享
            </Box>
          </Grid>
        </Grid>  
      </Typography>
      </div>
    </div>
  );
}

export default Footer;
    