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


export default function Landing() {
    return(
    <div className="warroom">
        {/* 選單 */}
        <Grid container xs={12} spacing={4}>         
            <Grid container item sm={2} xs={12} className="fixed">
                <Grid container item xs={12}>
                    <Grid item xs={8}>
                        <Typography gutterBottom>
                            <Box fontSize="h2.fontSize" fontWeight="fontWeightBold" lineHeight={1.3}>大選<br/>速報</Box>
                        </Typography>
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
                            <Box fontSize="substitle.fontSize" fontWeight={700} lineHeight={1.3}>即時戰情總覽</Box>
                        </CardContent>
                    </CardActionArea>
                    <Divider/>
                    <CardActionArea>
                        <CardContent>
                        <Typography>
                            <Box fontSize="substitle.fontSize" fontWeight={700} lineHeight={1.3}>總統大選開票</Box>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Divider/>
                    <CardActionArea>
                        <CardContent>
                        <Typography>
                            <Box fontSize="substitle.fontSize" fontWeight={700} lineHeight={1.3}>立法委員開票</Box>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
            </Grid>
        </Grid>

         {/* Overview 區塊 */}
        <Grid container xs={12} spacing={4}>
            <Hidden smDown>
                <Grid item sm={2}></Grid>
            </Hidden>
            <Grid container item sm={10} xs={12} spacing={3}>
                {/* 總統候選人 */}
                <Grid container item xs={12} sm={6} direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">總統大選開票</Box>
                    <Grid container item xs className="padding_15">
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" lineHeight={1.2}>蔡</Box>
                                <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>蔡英文</Box> 
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測得票率</Box>
                                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓</Box>
                                <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票</Box> 
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>     
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測當選率</Box>
                                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓</Box>
                                <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票率</Box> 
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="middle"/>
                    <Grid container item xs>
                        <Grid container item xs alignItems="center" className="padding_15">
                            <Grid item xs>
                                <Typography component="div">
                                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" lineHeight={1}>韓</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>韓楚瑜</Box> 
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測得票率\當選率</Box>
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓\99%</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票</Box> 
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票數</Box> 
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>6890000</Box>     
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider orientation="vertical"/>
                        <Grid container item xs alignItems="center" className="padding_15">
                            <Grid xs>
                                <Typography component="div">
                                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" lineHeight={1}>宋</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>宋國瑜</Box> 
                                </Typography>
                            </Grid>
                            <Grid xs>
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測得票率\當選率</Box>
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓\99%</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票</Box> 
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票數</Box> 
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>6890000</Box>     
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
                <Grid container item xs={12} sm={6} direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">決戰立法院</Box>
                    {/* 立委ＡＩ預測 */}
                    <Grid container item xs direction="column">
                        <Grid item xs={4}>
                            <Box fontSize="substitle.fontSize" fontWeight={400} lineHeight={1.3}>AI預測政黨立委席次</Box>
                        </Grid>
                        <Grid container item xs>
                            <Grid container item xs direction="column">
                                <Grid item xs>
                                    <Box fontSize="substitle.fontSize" fontWeight={400} lineHeight={1.3}>不分區 AI 預估</Box>
                                </Grid>
                                <Grid item xs>
                                <Box fontSize="substitle.fontSize" fontWeight={400} lineHeight={1.3}>原住民立委 AI 預估</Box> 
                            </Grid>
                            </Grid>
                            <Grid item xs>
                                <Box fontSize="substitle.fontSize" fontWeight={400} lineHeight={1.3}>區域 AI 預估</Box>
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

    </div>
    );
}