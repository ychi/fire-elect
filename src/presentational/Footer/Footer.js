import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import './footer.scss';
import bgteam from './bg_team.svg';
import bgfooter from './bg_footer.svg';
import { Link } from '@material-ui/core';


function Footer(props) {
  return (
    <div className="footer">
      <Grid container>
        <Grid item container sm={12} md={5} className="teambloc">
          <Grid item xs={12}>
            <Typography component="div" align="left">
              <Box fontSize="body1.fontSize" fontWeight="700" lineHeight={1.6}>
                身為一介庶民<br/>
                除了用選票教訓政黨<br/>
                就是製作一個視覺化網站<br/>
                讓團員們一起同甘共苦
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" align="left">
              <Box fontSize="caption.fontSize" lineHeight={1.6}>文案撰寫</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>資訊圖表</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Claire Tsao, Yu Lin</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>介面元件</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>視覺設計</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Yu Lin</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>我大膽預測</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>YK</Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" align="left">
              <Box fontSize="caption.fontSize" lineHeight={1.6}>前端工程</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Ansin, Kai, Elfie</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>後端工程</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Bonich, <Link color="textPrimary" href="https://twitter.com/ychichen">Kn</Link></Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>即時選情預測</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Ponan</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>開放資料</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}>Claire Tsao</Box>
              <Box fontSize="caption.fontSize" lineHeight={1.6}>測試整合</Box>
              <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" lineHeight={2}><Link color="textPrimary" href="https://twitter.com/ychichen">Kn</Link></Box>
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown> 
        <Grid item sm={false} md={1} className="bg_team">
          <img src={bgteam} className="img" alt="textdeco" />
        </Grid>
        </Hidden>
        <Grid item sm={6} md={3}>
          <div className="bg_footer_left">
            <img src={bgfooter} className="img img_ani" alt="textdeco" />
          </div>  
        </Grid>
        <Grid item sm={6} md={3}>
          <div className="bg_footer_right">
          </div>  
        </Grid>
      </Grid>
    </div> 
  );
}

export default Footer;
    