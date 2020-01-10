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
            <Typography component="div" align="left" style={{color: '#e9f2f2'}}>
              <Box fontSize="body3.fontSize" fontWeight="500" lineHeight={1.6}>
                通往民主的車票<br/>
                是不是隔日作廢？<br/>
                我們不是老司機<br/>
                只求大家一起上車
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body3" align="left" style={{color: '#e9f2f2', fontWeight: '700'}}>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>文案撰寫</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Chiung Shen</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>資訊圖表</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Claire Tsao, Yu Lin</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>UI/UX</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Chiung Shen, Ansin</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>視覺設計</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Yu Lin</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>資料處理</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>YK</Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" align="left" style={{color: '#e9f2f2'}}>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>前端工程</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Ansin, Kai, Elfie</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>後端工程</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Bonich, <Link style={{color: '#e9f2f2'}} href="https://twitter.com/ychichen">Kn</Link></Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>即時選情預測、AI 資料處理</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Po-Nan Li</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>開放資料</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}>Claire Tsao</Box>
              <Box fontSize="fontSize" lineHeight={1.6} fontWeight="fontWeightBold" style={{color: '#CC9423'}}>測試整合</Box>
              <Box fontSize="fontSize" fontWeight="fontWeightMedium" lineHeight={2}><Link style={{color: '#e9f2f2'}} href="https://twitter.com/ychichen">Kn</Link></Box>
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
