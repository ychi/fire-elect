import React, {useReducer} from 'react';
import styles from './predict.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Form from './form/form';
import PresidentPredict from '../../Components/PresidentPredict/PresidentPredict';



function presidentReducer (state, action) {
    switch(action.type) {
        case 'S':
            return {
                ...state,
                s: (state.h + state.t + action.commitedV > 100) ? 
                    100 - state.h - state.t : 
                    action.commitedV
            };
        case 'H':
            return {
                ...state,
                h: (state.s + state.t + action.commitedV > 100) ?
                    100 - state.s - state.t :
                    action.commitedV
            };
        case 'T':
            return {
                ...state,
                t: (state.s + state.h + action.commitedV > 100) ?
                    100 - state.s - state.h : 
                    action.commitedV
            };
        default: 
            return state;
    }
}

function legislativeReducer (state, action) {
    return state;
}


export default function Predict({submittable = true, formContent = null, submitForm = ()=>{}}) {

    const [presidentPercentages, dispatchPresidentPercentages] = useReducer(presidentReducer, {s: 33, h: 33, t: 33});
    const [legislativeDistribution, dispatchLegislativeDistribution] = useReducer(legislativeReducer, {})

    const onClickSubmit = (formContentSnapshot)=> {
        submitForm(
            formContentSnapshot, 
            {
                president: presidentPercentages, 
                legislative: legislativeDistribution
            });
    };

    return(
    <div>
        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid item md={1}>
                    <Box height="90vh" textAlign="right">
                        <Box height="10vh"></Box>
                        <Typography variant="h5" className={styles.text__vertical__lr} display="inline">I   PREDICT   IT</Typography>
                        <Box borderLeft={2} height="59vh" width="24px" ml={11}></Box>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box>
                        <Grid container alignItems='flex-end'>
                            <Grid item md={6}>
                                <img src={require('./index_pattern.svg')} alt="cover page img"/>
                            </Grid>
                            <Grid item md={6} >
                                <Typography variant="h1" component="h1" gutterBottom className={styles.predict__title__vertical}>我大膽<br/>預測</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Typography variant="body3" align="left">
                            <Box>得民調者得痔瘡，</Box>
                            <Box>得民心者得天下，</Box>
                            <Box>是時候由你決定2020誰該屎心了！</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box height="90vh"></Box>
                </Grid>
                <Grid item md={1} alignItems="center">
                    <Grid item>
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
                </Grid>

                <Grid item md={12}>
                    <Box display="inline-block" width={`${100/24}%`}></Box>
                    <Box display="inline-block" width={`${100/12*11}%`} border={3}></Box>
                </Grid>
            </Grid>
        </section>

        <section className={styles.window__section}>
            <Grid container height="90vh">
                <Grid md={1}></Grid>
                <Grid item md={1}>
                    <Grid item md={12}>
                        <Box height="10vh"></Box>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <Typography variant="h3">1</Typography>
                            <Box top="-40px" left='-30px' position="relative" zIndex='-1'>
                                <img src={require('./section_pattern.svg')} alt="" width="200%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">蒜什麼<br/>總統</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box height="35vh"></Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box textAlign="left" > 
                            <Typography component="div"  className={styles.section__brief}>
                                <Box fontSize="body2.fontSize">台灣政壇瞬息萬變</Box>
                                <Box fontSize="body2.fontSize">總統候選人誰凍蒜</Box>
                                <Box fontSize="body2.fontSize">你是神預測還是馬後砲</Box>
                                <Box fontSize="body2.fontSize">快來拉拉看得票率！</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Box height="90vh">
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box height="10vh"></Box>
                    <Grid container height="90vh">
                        <Typography className={styles.votes__subtitle}>歷年總統得票率</Typography>
                        <Grid item md={12}> 
                            <img src={require('./votesChart.png')} width="100%" alt=""/>
                            {/* <Box height="30vh" border={1}>chart</Box> */}
                        </Grid>
                        <Grid item md={12}> 
                                <Typography className={styles.votes__subtitle} align="left">2020總統大選：你的預測</Typography>
                        </Grid>
                        <Grid item md={12} spacing={8} justify="center" direction="column" alignItems="center" >
                            <div className={styles.section}>
                                <PresidentPredict
                                    percentages = {presidentPercentages}
                                    commit = {(k, v)=>{
                                        dispatchPresidentPercentages({type: k, commitedV: v});
                                    }}
                                />
                            </div>    
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2}>
                    <Box height="90vh"></Box>
                </Grid>
            </Grid>
        </section>
        <section className={styles.window__section}>
            <Grid container height="90vh">
            <Grid md={1}></Grid>
                <Grid item md={1}>
                    <Grid item md={12}>
                        <Box height="10vh"></Box>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <Typography variant="h3">2</Typography>
                            <Box top="-40px" left='-30px' position="relative" zIndex='-1'>
                                <img src={require('./section_pattern.svg')} alt="" width="200%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">選個席次<br/>好過年</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box height="20vh"></Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box textAlign="left" > 
                            <Typography component="div"  className={styles.section__brief}>
                                <Box fontSize="body2.fontSize">哪個政黨上位</Box>
                                <Box fontSize="body2.fontSize">哪個又被下架</Box>
                                <Box fontSize="body2.fontSize">填填看你預測的席次！</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid item md={5}>
                    <Box height="10vh"></Box>
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
                <Grid item md={2}>
                    <Box height="90vh">
                    </Box>
                </Grid>
            </Grid>
        </section>
        <section>
            <Grid container>
                <Grid item md={12}>
                    <Box height="60vh">
                        <Form 
                            preloadedContent = {formContent}
                            submittable = {submittable}
                            onClickSubmit = {onClickSubmit}
                        />
                    </Box>
                </Grid>
            </Grid>
        </section>
        
        <section height="60vh">
            <Grid container >
                <Grid container md={6}>
                        <Grid item md={2}>
                            <Box bgcolor="#FF2600" height="60vh"></Box>
                        </Grid>
                        <Grid item md={8}>
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
                        <Grid item md={2}>
                            <Box height="60vh" borderRight={21} className={styles.bottom__graphic__goldLine}>
                                <Typography className={styles.predict__Bottom__subtitle}>庶民的心聲</Typography>
                            </Box>
                        </Grid>
                </Grid>

                <Grid container md={6}>
                    <Grid item md={2}>
                        <Box bgcolor="#FF2600" height="60vh" borderLeft={35} className={styles.bottom__graphic__whiteLine}></Box>
                    </Grid>

                    <Grid container md={8} alignItems='stretch'>
                        <Grid container md={12}>
                            <Grid item md={12} >
                                <Box height="100%" width="100%" bgcolor="#273A3C"></Box>
                            </Grid>
                            <Grid item md={8}>
                                <Box height="100%" className={styles.bottom__redOval__container}>
                                    <Box className={styles.bottom__oval__red}></Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} flexGrow="10">
                                <Box bgcolor="#F2EDE9" height="100%" className={styles.bottom__oval__container}>
                                    <Box className={styles.bottom__oval__gold} border={3}></Box>
                                    <Box className={styles.bottom__oval__gold} border={3}></Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container md={2}>
                        <Grid item md={2}></Grid>
                        <Grid item md={10}>
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