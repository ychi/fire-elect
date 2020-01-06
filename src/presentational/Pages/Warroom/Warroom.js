import React from 'react';
import './warroom.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import title from './img/title.svg';
import tsai from './img/tsai.svg';
import sung from './img/sung.svg';
import han from './img/han.svg';
import tsai_head from './img/tsai_head.png';


export default function Landing() {
    return(
    <div className="warroom">
{/* 選單 */}
        <Hidden smDown>
        <Grid container xs={12} spacing={4}>         
            <Grid container item sm={3} xs={12} className="menu fixed">
                <Grid container item xs={12}>
                    <Grid item xs={8}>
                        <Box fontSize="h2.fontSize" fontWeight="900" lineHeight={1.3}>大選<br/>速報</Box>
                    </Grid>
                    <Grid container item xs={4} alignItems="flex-end">
                        <Grid item xs>
                            <img src={title} className="img" alt="title" />
                            <Typography gutterBottom>
                                <Box fontSize="caption.fontSize" lineHeight={1.3}><b>45秒</b>前即時更新</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Box className="nav">
                    <CardActionArea>
                        <CardContent>
                            <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1.3}>即時戰情總覽</Box>
                        </CardContent>
                    </CardActionArea>
                    <Divider/>
                    <CardActionArea>
                        <CardContent>
                            <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1.3}>總統大選開票</Box>
                        <Typography variant="body2" color="textSecondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Divider/>
                    <CardActionArea>
                        <CardContent>
                            <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1.3}>立法委員開票</Box>
                        <Typography variant="body2" color="textSecondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
            </Grid>
        </Grid>
        </Hidden>
{/* 右側視覺化區塊 */}
        <Grid container xs={12} spacing={4} className="vizbloc">
{/* 總統候選人 */}
            <Grid container item xs={12} sm={7} direction="column">
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">總統大選開票</Box>
                <Grid container item xs spacing={3} className="padding_15" alignItems="center">
                    <Grid container item xs>
                        <Grid item xs={12}>
                            <Box fontSize="substitle.fontSize"><span className="ranking">1</span><span>st</span></Box>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={tsai} className="img" alt="tsai" />
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box fontSize="caption.fontSize" lineHeight={1}>AI預測得票率</Box>
                            <Box fontSize="h3.fontSize" fontWeight="500" lineHeight={1.5}>41%<small>▲</small></Box>
                            <Box fontSize="caption.fontSize" lineHeight={1}>最新得票</Box> 
                            <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>     
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box fontSize="caption.fontSize" lineHeight={1}>AI預測當選率</Box>
                            <Box fontSize="h3.fontSize" fontWeight="500" lineHeight={1.5}>41%<small>▼</small></Box>
                            <Box fontSize="caption.fontSize" lineHeight={1}>最新得票率</Box> 
                            <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>     
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <img src={tsai_head} className="img" alt="tsai" />
                    </Grid>
                </Grid>
                <Divider variant="middle"/>
                <Grid container item xs>
                    <Grid container item xs alignItems="center" spacing={3} className="padding_15">
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">2</span><span>nd</span></Box>
                            </Grid>
                            <Grid item xs={12}>
                            <img src={han} className="img" alt="han" />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>41%<small>▼</small><small>\</small> 99%</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>6890000</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical"/>
                    <Grid container item xs alignItems="center" spacing={3} className="padding_15">
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">3</span><span>rd</span></Box>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={sung} className="img" alt="sung" />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>41%<small>▼</small><small>\</small> 99%</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>6890000</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider variant="middle"/>
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">實際開票走勢/AI預測走勢</Box>
                <Grid container item xs></Grid>
                <Hidden smDown>
                <Divider orientation="vertical"/>
                </Hidden>
            </Grid>
            
            {/* 立委 */}
            <Grid container item xs={12} sm={5} direction="column">
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">決戰立法院</Box>
                {/* 立委ＡＩ預測 */}
                <Grid container item xs>
                    <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>AI預測政黨立委總席次</Box>
                    ◼ 35 ◼ 13 ◼ 23 ◼ 12 ◼12 ◼ 61 ◼ 31

                    <Grid container item xs>
                        <Grid container item xs direction="column">
                            <Grid item xs>
                                <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>不分區 AI 預估</Box>
                            </Grid>
                            <Grid item xs>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>原住民立委 AI 預估</Box> 
                        </Grid>
                        </Grid>
                        <Grid item xs>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>區域 AI 預估</Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                {/* 區域拉鋸選區 */}
                <Grid container item xs direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={400} lineHeight={3}>拉鋸選區勝選率AI預測</Box> 
                    <Grid item xs container>
                        <Grid item xs container></Grid>
                        <Grid item xs container></Grid>
                    </Grid>
                </Grid>
            </Grid> 
            <Divider variant="middle"/>
            <Grid container xs={12} spacing={4}> 
                <Hidden smDown>
                    <Grid item sm={2}></Grid>
                </Hidden>
                <Grid container item sm={10} xs={12} spacing={3}>
                <Box fontSize="substitle.fontSize" fontWeight={700} lineHeight={1.3} className="header_bd">即時戰情總覽</Box>
                </Grid>
            </Grid>
        </Grid> 

    </div>
    );
}