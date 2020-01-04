import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './footer.scss';
import bgteam from './bg_team.svg';
import bgfooter from './bg_footer.svg';


function Footer(props) {
  return (
    <div className="footer">
      <Grid container>
        <Grid item container sm={12} md={5} className="teambloc">
          <Grid item xs={12}>
            <Typography component="div" Align="left">
              <Box fontSize="body2.fontSize" lineHeight={1.6}>
                身為一介庶民<br/>
                除了用選票教訓政黨<br/>
                就是製作一個視覺化網站<br/>
                讓團員們一起同甘共苦
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" Align="left">
              <Box fontSize="caption.fontSize" lineHeight={1.6}>文案撰寫</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>文案撰寫</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>文案撰寫</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>文案撰寫</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" Align="left">
              <Box fontSize="caption.fontSize" lineHeight={1.6}>吃齋念佛</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>吃齋念佛</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>吃齋念佛</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>吃齋念佛</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={0} md={1} className="bg_team">
          <img src={bgteam} className="img" alt="textdeco" />
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="bg_footer_left">
            <img src={bgfooter} className="img img_ani" alt="textdeco" />
          </div>
            
        </Grid>
      </Grid>
    </div> 
  );
}

export default Footer;
    