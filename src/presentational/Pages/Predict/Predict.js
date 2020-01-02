import React from 'react';
import styles from './predict.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import Form from './form'



const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 40,
      label: '40%',
    },
    {
      value: 60,
      label: '60%',
    },
    {
      value: 80,
      label: '80%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

function valuetext(value) {
return `${value}°C`;
}

function electionCountDown(){
    return null;
}


export default function Landing() {
    return(
    <div>
        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid item className={styles.frame} md={1}>
                    <Box height="90vh" textAlign="right">
                        <Typography variant="h5" className={styles.text__vertical__lr} display="inline">I   PREDICT   IT</Typography>
                        <Box borderLeft={2} height="70vh" width="24px" ml={11}></Box>
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={5}>
                    <Box height="75vh">
                        <Grid container>
                            <Grid item md={6}>
                                <img src="" alt="cover page img"/>
                            </Grid>
                            <Grid item md={6}>
                                <Box mt="25vh"></Box>
                                <Typography variant="h1" component="h1" gutterBottom className={styles.predict__title__vertical}>我大膽<br/>預測</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box height="15vh">
                        <Typography variant="h6" align="left">
                            <Box>得民調者得痔瘡，</Box>
                            <Box>得民心者得天下，</Box>
                            <Box>是時候由你決定2020誰該屎心了！</Box>
                        </Typography>
                    </Box>

                </Grid>
                <Grid item className={styles.frame} md={5}>
                    <Box height="90vh"></Box>
                </Grid>
                <Grid item className={styles.frame} md={1}>
                    <Box height="90vh">
                        <Typography component="div" variant="h5" className={styles.date}>
                            <Box>貳零貳零</Box>
                            <hr/>
                            <Box>壹月拾壹</Box>
                            <hr/>
                            <Box>距大選</Box>
                            <Box>{10}</Box>
                            <Box>天</Box>
                            <Box>{10}</Box>
                            <Box>時</Box>
                            <Box>{10}</Box>
                            <Box>分</Box>
                            <Box>{10}</Box>
                            <Box>秒</Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </section>
        <hr/>


        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid item className={styles.frame} md={2}>
                    <Box height="90vh" textAlign="right">
                        <Box border={3} borderRadius="50%" width={50} height={50} display="inline-block">
                            <Typography variant="h4">1</Typography>
                        </Box>
                        <hr border={3}/>
                        <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">蒜什麼<br/>總統</Typography>
                        <Typography component="div" variant="v6" >
                            <Box fontSize="body1.fontSize" overflow="visible">台灣政壇瞬息萬變</Box>
                            <Box fontSize="body1.fontSize">總統候選人誰凍蒜</Box>
                            <Box fontSize="body1.fontSize">你是神預測還是馬後砲</Box>
                            <Box fontSize="body1.fontSize">快來拉拉看得票率！</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={3}>
                    <Box height="90vh">
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={5}>
                    <Box height="10vh"></Box>
                    <Grid container height="90vh">
                        <Grid item md={12}> 
                            <Box height="30vh" border={1}>chart</Box>
                        </Grid>
                        <Grid item md={12}> 
                            <Box height="10vh" border={1}>
                                <Typography>
                                    <Box><span>圖表</span><span>歷年總統得票率</span></Box>
                                    <Box><span>下方</span><span>2020總統大選：你的預測</span></Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={12} spacing={8} justify="center" direction="column" alignItems="center" >
                            <div className={styles.section}>
                                <Typography id="discrete-slider-always" gutterBottom>
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">宋楚瑜</Box>
                                    <Slider
                                        defaultValue={50}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider-always"
                                        step={1}
                                        marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">韓國瑜</Box>
                                    <Slider
                                        defaultValue={50}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider-always"
                                        step={1}
                                        marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" textAlign="left">蔡英文</Box>
                                    <Slider
                                        defaultValue={50}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider-always"
                                        step={1}
                                        marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                </Typography>
                            </div>    
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={styles.frame} md={2}>
                    <Box height="90vh"></Box>
                </Grid>
            </Grid>
        </section>
        <hr/>


        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid item className={styles.frame} md={2}>
                    <Box height="90vh"  textAlign="right">
                        <Box border={3} borderRadius="50%" width={50} height={50} display="inline-block">
                            <Typography variant="h4">2</Typography>
                        </Box>
                        <hr/>
                        <Typography  variant="h2" className={styles.predict__subtitle__vertical} display="inline">選個席次<br/>好過年</Typography>
                        <Typography>
                            <Box>哪個政黨上位?</Box>
                            <Box>哪個又被下架?</Box>
                            <Box>填填看你預測的席次！</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={3}></Grid>
                <Grid item className={styles.frame} md={5}>
                    <Grid container height="90vh">
                        <Grid item md={12}> 
                            <Box height="30vh" border={1}>chart1</Box>
                        </Grid>
                        <Grid item md={12}> 
                            <Box height="10vh" border={1}>
                                <Typography>
                                    <Box><span>113</span><span>議席</span></Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={12}> 
                            <Box height="30vh" border={1}>chart2</Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={styles.frame} md={2}>
                    <Box height="90vh">
                    </Box>
                </Grid>
            </Grid>
        </section>
        <hr/>


        <section>
            <Grid container >
                <Grid item className={styles.frame} md={3}>
                    <Box textAlign='left' marginLeft='8vw'>
                        <Typography variant="h1" display="inline">20</Typography>
                        <Typography variant="h6" display="inline">我</Typography>
                        <hr/>
                        <Typography variant="h1" display="inline">20</Typography>
                        <Typography variant="h6" display="inline">預言</Typography>
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={1}>
                    <Box height="60vh"></Box>
                </Grid>
                <Grid item className={styles.frame} md={5}>
                    <Form/>
                </Grid>
                <Grid item className={styles.frame} md={3}>
                    <Box height="10vh"></Box>
                </Grid>
            </Grid>
        </section>
        <hr/>
        <section height="60vh">
            <Grid container >
                <Grid item className={styles.frame} md={1}>
                    <Box height="60vh">
                        <Typography className={styles.predict__subtitle__verticalRotate}>庶民的心聲</Typography>
                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={9}>
                    <Box textAlign="left"  bgcolor="red" height="60vh">
                        <Grid container>
                            <Grid item md={1}></Grid>
                            <Grid item md={11}>
                                <Box height={60}></Box>
                                <Typography>
                                    <Box>身為一介庶民</Box>
                                    <Box>除了用選票教訓政黨</Box>
                                    <Box>你的心聲你的苦</Box>
                                    <Box>現在踹共</Box>
                                    <Box marginTop="12px" marginBottom="24px">讓大家一起同甘共苦</Box>
                                </Typography>
                                <Button variant="contained" color="primary">我要發聲</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item className={styles.frame} md={1}>
                    <Box height="50%"s bgcolor='black'></Box>
                    <Box height="50%"></Box>

                </Grid>
                <Grid item className={styles.frame} md={1}>
                    <Box height="60vh" bgcolor='gray'></Box>
                </Grid>
            </Grid>
        </section>
    </div>
    );
}