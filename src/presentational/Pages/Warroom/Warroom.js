import React from 'react';
import './warroom.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function Landing() {
    return(
    <div className="container">
        <Grid container className="bg1" xs={12} spacing={2}>
                {/* 選單 */}
                <Grid item sm={3} xs={12}>
                    <Typography gutterBottom variant="h2">
                        大選<br/>速報
                    </Typography>
                    <Card className="card">
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5">
                                即時戰情總覽
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Divider/>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5">
                                總統大選開票
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
                            <Typography gutterBottom variant="h5">
                                立法委員開票
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            區域與原住民立委
                            </Button>
                            <Button size="small" color="primary">
                            不分區立委
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Overview 區塊 */}
                <Grid container item sm={9} xs={12} className="bg2" spacing={2}>
                    {/* 總統候選人 */}
                    <Grid container item xs={7} className="bg1" direction="column">
                        <Typography gutterBottom variant="h5">總統大選開票</Typography>
                        <Grid container item xs className="bg3">
                            <Grid xs>
                                <Typography component="div">
                                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" lineHeight={1.2}>蔡</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>蔡英文</Box> 
                                </Typography>
                            </Grid>
                            <Grid xs>
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測得票率</Box>
                                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票</Box> 
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>     
                                </Typography>
                            </Grid>
                            <Grid xs>
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>AI預測當選率</Box>
                                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>41%↓</Box>
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={1}>最新得票率</Box> 
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" lineHeight={1.5}>46%</Box>     
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs className="bg2">
                            <Grid container item xs className="bg2" alignItems="center">
                                <Grid xs>
                                    <Typography component="div">
                                        <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" lineHeight={1}>韓</Box>
                                        <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>韓楚瑜</Box> 
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
                            <Grid container item xs className="bg4" alignItems="center">
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
                        <Typography gutterBottom variant="h5">實際開票走勢/AI預測走勢</Typography>
                        <Grid container item xs className="bg1"></Grid>
                    </Grid>
                    {/* 立委 */}
                    <Grid container item xs={5} className="bg4" direction="column">
                        <Typography gutterBottom variant="h5">決戰立法院</Typography>
                        {/* 立委ＡＩ預測 */}
                        <Grid container item xs className="bg1" direction="column">
                            <Grid item xs className="bg3">
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>AI預測政黨立委席次</Box> 
                                </Typography>
                            </Grid>
                            <Grid container item xs className="bg4">
                                <Grid container item xs direction="column">
                                    <Grid item xs>
                                        <Typography component="div">
                                            <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>不分區 AI 預估</Box> 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                    <Typography component="div">
                                        <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>原住民立委 AI 預估</Box> 
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item xs>
                                    <Typography component="div">
                                        <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>區域 AI 預估</Box> 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* 區域拉鋸選區 */}
                        <Grid container item xs className="bg2" direction="column">
                                <Typography component="div">
                                    <Box fontSize="caption.fontSize" fontWeight="fontWeightBold" lineHeight={2}>區域 AI 預估</Box> 
                                </Typography>
                            <Grid item xs container>
                                <Grid item xs container className="bg2"></Grid>
                                <Grid item xs container className="bg3"></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>  
        </Grid>
    </div>
    );
}