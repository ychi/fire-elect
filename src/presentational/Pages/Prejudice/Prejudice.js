import React from 'react';
import styles from './prejudice.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core';
import { positions } from '@material-ui/system';
import Hidden from '@material-ui/core/Hidden';
import Form from '../../Components/Form/Form'

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


export default function PeopleVoice() {
    return(
    <div>
        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid item xs={1} md={1} >
                    <Box height="90vh" textAlign="right">
                        <Box height="10vh"></Box>
                        {/* <img src={require('./predict_it.svg')} alt=""/> */}
                        <Typography variant="h5" className={styles.text__vertical__lr} display="inline">VOICE YOUR PREJUDICE</Typography>
                        <Box borderLeft={2} height="35vw" width="24px" ml="6vw"></Box>
                    </Box>
                </Grid>
                
                <Grid item xs={8} md={5}>
                        <Grid container alignItems='flex-end'>
                            <Grid item md={6}>
                                <img src={require('./index_pattern.svg')} alt="cover page img"/>
                            </Grid>
                            <Grid item md={6} >
                                <Typography variant="h1" component="h1" gutterBottom className={styles.predict__title__vertical}>庶民ㄟ<br/>心聲</Typography>
                            </Grid>
                        </Grid>
                    <Box>
                        <Typography variant="body3" align="left">
                            <Box>一碗滷肉飯一瓶礦泉水,</Box>
                            <Box>一個便當吃不飽可以吃兩個,</Box>
                            <Box>如果你一生充滿皺摺，</Box>
                            <Box>如果你是民國認證的庶民庶民給問嗎？</Box>
                            <Box>來這大聲說出你的心聲！</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={0} md={5}>
                    <Box height="90vh"></Box>
                </Grid>
                <Grid item xs={3} md={1} alignItems="center" >
                    <Box height="90vh">
                        <Typography component="div" variant="h6" className={styles.date}>
                            <Box>貳零貳零</Box>
                            <hr/>
                            <Box>壹月拾壹</Box>
                            <hr/>
                            <Box>距大選</Box>
                            <Box className={styles.date_gold}>   
                                <Box>{10}</Box>
                                <Box>天</Box>
                                <Box>{10}</Box>
                                <Box>時</Box>
                                <Box>{10}</Box>
                                <Box>分</Box>
                                <Box>{10}</Box>
                                <Box>秒</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box display="inline-block" width={`${100/12}%`} height="40px"></Box>
                    <Box display="inline-block" width={`${100/12*10}%`} border={3}></Box>
                </Grid>
            </Grid>
        </section>

        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid xs={2} md={1}></Grid>
                <Grid container xs={10} md={1}>
                    <Grid item xs={12} md={12}>
                        <Box height="10vh"></Box>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <img src={require('./section_pattern.svg')} alt="" width="200%" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">庶民<br/>給問嗎？</Typography>
                        </Box>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item xs={0} md={12}>
                            <Box height="15vh"></Box>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={12}>
                        <Box textAlign="left" > 
                            <Typography component="div"  className={styles.section__brief}>
                                <Box fontSize="body2.fontSize">不管你是1450、鋼鐵韓粉</Box>
                                <Box fontSize="body2.fontSize">還是中壢李姓選民</Box>
                                <Box fontSize="body2.fontSize">又或者以上標籤無法代表你</Box>
                                <Box fontSize="body2.fontSize">我們好奇你對這次選情的觀察</Box>
                                <br/>
                                <Box fontSize="body2.fontSize">右側標籤，各別代表不同族群</Box>
                                <Box fontSize="body2.fontSize">你覺得哪個族群更傾向支持誰呢？</Box>
                                <Box fontSize="body2.fontSize">點選標籤分享你的觀察</Box>
                                <Box fontSize="body2.fontSize" color="#FF2600">每欄最多3個</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12} md={2}>

                </Grid>
                <Grid container xs={12} md={2}>
                    <Grid item md={12}>
                        標籤選擇<br/>
                        點選標籤後進入指定候選人
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Button variant="contained">未婚女性</Button>
                            <Button variant="contained">已婚女性</Button>
                            <Button variant="contained">未婚男性</Button>
                            <Button variant="contained">已婚男性</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">博碩學歷</Button>
                            <Button variant="contained">大學學歷</Button>
                            <Button variant="contained">高中學歷</Button>
                            <Button variant="contained">國中學歷</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">銀髮族群</Button>
                            <Button variant="contained">中年族群</Button>
                            <Button variant="contained">青年族群</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">高收入</Button>
                            <Button variant="contained">低收入</Button>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Button variant="contained">勞工階級</Button>
                            <Button variant="contained">農民朋友</Button>
                            <Button variant="contained">白領階級</Button>
                            <Button variant="contained">軍公教</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">博碩學歷</Button>
                            <Button variant="contained">大學學歷</Button>
                            <Button variant="contained">高中學歷</Button>
                            <Button variant="contained">國中學歷</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">銀髮族群</Button>
                            <Button variant="contained">中年族群</Button>
                            <Button variant="contained">青年族群</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">高收入</Button>
                            <Button variant="contained">低收入</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} md={6}>
                    <Grid item md={4}>
                        <img width="140px" src={require('./SONG_A_BAY.svg')} alt=""/>
                        <img width="140px" src={require('./voteBox.svg')} alt=""/>
                    </Grid>
                    <Grid item md={4}>
                        <img width="140px" src={require('./KOREAN_FISH.svg')} alt=""/>
                        <img width="140px" src={require('./voteBox.svg')} alt=""/>
                    </Grid>
                    <Grid item md={4}>
                        <img width="140px" src={require('./YIN_WEN.svg')} alt=""/>
                        <img width="140px" src={require('./voteBox.svg')} alt=""/>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section>
            <Form/>
        </section>

        <section height="60vh">
            <Grid container >
                <Grid container xs={12} md={6}>
                    <Grid item xs={1} md={2}>
                        <Box bgcolor="#FF2600" height="60vh"></Box>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Box bgcolor="#FF2600" height="60vh" textAlign="left">
                            <Box height="30%"></Box>
                            <Typography className={styles.bottom__linkIntro__text} fontSize="body2.fontSize">
                                <Box>身為一介庶民</Box>
                                <Box>除了用選票教訓政黨</Box>
                                <Box>你的心聲你的苦</Box>
                                <Box>現在踹共</Box>
                                <Box marginTop="12px" marginBottom="24px">讓大家一起同甘共苦</Box>
                            </Typography>
                            <Button variant="contained" className={styles.bottom__button__black}>
                                我要發聲
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <Box height="60vh" borderRight={21} className={styles.bottom__graphic__goldLine}>
                            <img src={require('./ppl_voice.svg')} alt="" height="100%"/>
                            {/* <Typography className={styles.predict__Bottom__subtitle}>庶民的心聲</Typography> */}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} md={6}>
                    <Grid item xs={2} md={2}>
                        <Box bgcolor="#FF2600" height="100%" borderLeft={35} className={styles.bottom__graphic__whiteLine}></Box>
                    </Grid>

                    <Grid container xs={8} md={8} alignItems='stretch'>
                        <Grid item xs={3} md={12} >
                            <Box height="100%" width="100%" bgcolor="#273A3C"></Box>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Box height="100%" className={styles.bottom__redOval__container}>
                                <Box className={styles.bottom__oval__red}></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={1} md={4} flexGrow="10">
                            <Box bgcolor="#F2EDE9" height="100%" className={styles.bottom__oval__container}>
                                <Box className={styles.bottom__oval__gold} border={3}></Box>
                                <Box className={styles.bottom__oval__gold} border={3}></Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container xs={2} md={2}>
                        <Grid item xs={2} md={2}></Grid>
                        <Grid item xs={10} md={10}>
                            <Box height= "75%">
                                <Box display="inline-block" height="100%" width="20%" bgcolor="#CC9423"></Box>
                                <Box display="inline-block" height="100%" width="20%" bgcolor="white"></Box>
                                <Box display="inline-block" height="100%" width="60%" bgcolor="#FF2600"></Box>
                            </Box>
                            <Box bgcolor="white" height= "5%"></Box>
                            <Box bgcolor="#273A3C" height="20%"></Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </div>
    );
}