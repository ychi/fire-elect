import React,{ useReducer } from 'react';
import styles from './spread.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Form from '../../Components/Form/Form'
import CoundownTimer from "../../Components/Common/CountdownTimer/CoundownTimer";

function presidentReducer(state, action) {
    switch (action.type) {
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

const initialLegislativeDistribution = [];


function legislativeReducer(state, action) {
    let filtered = state.filter((d) => (d.partyId !== action.partyId));
    let filteredTotal = filtered.reduce((agg, p) => (agg + p.prediction), 0);
    let verifiedPrediction = action.prediction > 0 ? Math.min(113 - filteredTotal, action.prediction) : 0;
    return [
        ...filtered,
        { partyId: action.partyId, prediction: verifiedPrediction }
    ].sort((a, b) => (b.prediction - a.prediction));
}

  





export default function PeopleVoice({ submittable = true, formContent = null, submitForm = (i, p) => { console.log({i: i, p:p})} }) {
    const [presidentPercentages, dispatchPresidentPercentages] = useReducer(presidentReducer, { s: 33, h: 33, t: 33 });
    const [legislativeDistribution, dispatchLegislativeDistribution] = useReducer(legislativeReducer, initialLegislativeDistribution);

    const onClickSubmit = (formState) => {
        submitForm(
            formState,
            {
                president: presidentPercentages,
                legislative: legislativeDistribution
            });
    };



    return(
    <div>
        <section className={styles.window__section}>
            <Grid container >
                <Grid item xs={1} md={1} >
                    <Hidden smDown>
                        <Box textAlign="right">
                            <Box height="10vh"></Box>
                            <Typography variant="h5" className={styles.text__vertical__lr} display="inline">SPREAD THE WORD</Typography>
                            <Box borderLeft={2} height="25vw" width="24px" ml="6vw"></Box>
                        </Box>
                    </Hidden>
                </Grid>
                
                <Grid item xs={10} md={5}>
                    <Grid container alignItems='flex-end'>
                        <Grid item md={6}>
                            <img src={require('./index_pattern.svg')} alt="cover page img"/>
                        </Grid>
                        <Grid item md={6}>
                            <Hidden smDown>
                                <Typography variant="h1" component="h1" gutterBottom className={styles.predict__title__vertical}>認同請<br />分享</Typography>
                            </Hidden>
                            <Hidden mdUp>
                                <Typography variant="h1" component="h1" gutterBottom className={styles.predict__title__vertical__sm}>認同請<br />分享</Typography>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Hidden mdUp>
                        <Typography variant="h5" display="inline">SPREAS THE WORD</Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <Box height="25vh"></Box>
                    </Hidden>
                    <Box>
                        <Typography variant="body3" align="left">
                            <Box>發文不附圖，感覺很模糊</Box>
                            <Box>資訊不分享，全民不幸福</Box>
                            <Box>十年選舉無人聞,一頁成名天下知！</Box>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={false} md={5}></Grid>

                <Grid item xs={1} md={1} alignItems="center">
                    <Box height="30px"></Box>
                    <Hidden mdUp>
                        <CoundownTimer  fontSize="h6" clockHeight="80vh"/>
                    </Hidden>
                    <Hidden smDown>   
                        <CoundownTimer  fontSize="h5" clockHeight="90vh"/>
                    </Hidden>
                </Grid>

                <Grid item xs={12}>
                    <Box display="inline-block" width={`${100/12}%`} height="40px"></Box>
                    <Box display="inline-block" width={`${100/12*10}%`} border={3}></Box>
                </Grid>
            </Grid>
        </section>

        <section className={styles.window__section}>
            <Grid container>
                <Grid xs={1} md={1}></Grid>
                <Grid container xs={10} md={1}>
                    <Grid item xs={12} md={12}>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <img src={require('./section_pattern.svg')} alt="" width="200%" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">身在<br/>是何方</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box height="8vh"></Box>
                    </Grid>
                    
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
                <Grid container xs={12} md={2}></Grid>
                <Grid container xs={12} md={8}>
                    
                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
            </Grid>
        </section>


        <section className={styles.window__section}>
            <Grid container>
                <Grid xs={1} md={1}></Grid>
                <Grid container xs={10} md={1}>
                    <Grid item xs={12} md={12}>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <img src={require('./section_pattern.svg')} alt="" width="200%" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">台灣<br/>走透透</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box height="8vh"></Box>
                    </Grid>
                    
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
                <Grid container xs={12} md={2}></Grid>
                <Grid container xs={12} md={8}>
                    
                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
            </Grid>
        </section>


        <section className={styles.window__section}>
            <Grid container>
                <Grid xs={1} md={1}></Grid>
                <Grid container xs={10} md={1}>
                    <Grid item xs={12} md={12}>
                        <Box width={50} height={50} display="inline-block" textAlign="center">
                            <img src={require('./section_pattern.svg')} alt="" width="200%" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">鋼鐵的<br/>意志</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box height="8vh"></Box>
                    </Grid>
                    
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
                <Grid container xs={12} md={2}></Grid>
                <Grid container xs={12} md={8}>
                    
                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
            </Grid>
        </section>


        <section>
            <Grid container >
                <Grid container xs={12} md={6}>
                    <Grid item xs={1} md={2}>
                        <Box bgcolor="#FF2600" height="60vh"></Box>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Box bgcolor="#FF2600" height="60vh" textAlign="left">
                            <Box height="30%"></Box>
                            <Typography className={styles.bottom__linkIntro__text} fontSize="body2.fontSize">
                                <Box>局勢怎麼走</Box>
                                <Box>是當局者迷還是旁觀者清</Box>
                                <br/>   
                                <Box>選前預測不封關</Box>
                                <Box>把握倒數幾天</Box>
                                <Box marginTop="12px" marginBottom="24px">看看你能否鐵口直斷</Box>
                            </Typography>
                            <Button variant="contained" className={styles.bottom__button__black}>
                                我要預測
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <Box height="60vh" borderRigsht={21} className={styles.bottom__graphic__goldLine}>
                            <img src={require('./predict.svg')} alt="" height="90%"/>
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