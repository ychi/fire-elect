import React, { useState, useContext, useEffect } from 'react';
import './warroom.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CongressSummaryContainer from '../../../container/CongressSummaryContainer';
import TieContainer from '../../../container/TieContainer';
import LineGraph from '../../Components/LineGraph/LineGraph';
import Footer from '../../Footer/Footer';
import title from './img/title.svg';
import tsai from './img/tsai.svg';
import sung from './img/sung.svg';
import han from './img/han.svg';
import tsai_head from './img/tsai_head.png';
import PresidentSummaryContainer from '../../../container/PresidentSummaryContainer';
import CongressAIPredictContainer from '../../../container/CongressAIPredictContainer'

import FireBaseContext from '../../../tools/firebase/Context';
import LineGraphContainer from '../../../container/LineGraphContainer';

const headImages = require.context('./img', true);

function namePicSelector(name) {
  switch (name){
    case 'soong':
      return sung;
    case 'han':
      return han;
    case 'tsai':
    default:
      return tsai;

  }
}
export default function Landing() {
    const firebase = useContext(FireBaseContext);
    const [president, setPresident] = useState([]);

    useEffect(() => {
      const unsub = firebase.db.collection('summary_president').orderBy('counts', 'desc')
        .onSnapshot( snapshot => {
          const results = snapshot.docs.map( d => ({id: d.id, ...d.data()}));
          setPresident(results);
        })
      return unsub;
    },[firebase]);

    return(
    <div className="warroom">
{/* ------------- 固定位置選單 */}

        <Hidden smDown>
            <Grid container xs={0} md={2} spacing={4}>         
                <Grid container item sm={3} xs={12} className="menu">
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
                                <PresidentSummaryContainer/>
                            </CardContent>
                        </CardActionArea>
                        <Divider/>
                        <CardActionArea>
                            <CardContent>
                                <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1.3}>立法委員開票</Box>
                                <CongressSummaryContainer/>
                            </CardContent>
                        </CardActionArea>
                    </Box>
                </Grid>
            </Grid>
        </Hidden>
        {/* ----------------- 右側視覺化區塊 */}
        <Grid container xs={12} md={12} spacing={3} className="vizbloc">
            {/* 總統候選人 */}
            <Grid item xs={1} md={3} ></Grid>
            <Grid container item xs={10} md={5} direction="row">
                {/* subtitle */}
                <Grid md={12} xs={12}>
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">總統大選開票</Box>
                </Grid>
                {/* ranking No.1 */}
                <Grid container item xs={12} spacing={1} className="p_2" alignItems="center">

                    {/* Name & Ranking */}
                    <Grid container item xs={6} md={3}>
                        <Grid item xs={12}>
                            <Box fontSize="substitle.fontSize"><span className="ranking">1</span><span>st</span></Box>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={president[0] ? namePicSelector(president[0]["id"]) : tsai} className="img" alt={president[0]?president[0].name: "蔡英文"} />
                        </Grid>
                    </Grid>
                    {/* 預測當選率 */}
                    <Grid item xs={12} md={6}>
                        <Typography component="div">
                            <Box fontSize="caption.fontSize" lineHeight={1}>AI預測得票率</Box>
                            <Box fontSize="h3.fontSize" fontWeight="500" lineHeight={1.5}>{president[0] ? Math.round(president[0]['project']*100) : 0 }<small>%▼</small></Box>
                            <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[0] ? president[0]['counts']: 0 }</Box>     
                        </Typography>
                    </Grid>
                    {/* img */}
                    <Grid item xs={6} md={3}>
                        <img src={president[0]? headImages(`./${president[0]["id"]}_head.svg`): headImages("./han_head.svg")} className="img" alt="tsai" />
                    {/* img */}
                    </Grid>
                </Grid>
                <Divider/>
{/* ranking No.2 & No.3*/}
                <Grid container item xs={12} justify='space-around'>

                    {/* Ranking No.2 */}
                    <Grid container item xs={5} alignItems="center" spacing={0} className="p_2">

                        <Grid container item xs={12} md={6}>
                            <Grid item xs={12} md={5}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">2</span><span>nd</span></Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <img src={president[1] ? namePicSelector(president[1]["id"]) : han} className="img" alt="han" />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[1] ? Math.round(president[1]['project']*100) : 0 }<small>%▼</small> {president[1] ? Math.round(president[1]['prob']*100) : 0 }<small>%</small></Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>{president[1] ? president[1]['counts']: 0 }</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical"/>

                    {/* Ranking No.3 */}
                    <Grid container item xs={5} alignItems="center" spacing={0} className="p_2">
                        <Grid container item xs={12} md={6}>
                            <Grid item xs={12} md={5}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">3</span><span>rd</span></Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img src={president[2] ? namePicSelector(president[2]["id"]) : sung} className="img" alt="sung" />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[2] ? Math.round(president[2]['project']*100) : 0 }<small>%▼</small> {president[2] ? Math.round(president[2]['prob']*100) : 0 }<small>%</small></Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>{president[2] ? president[2]['counts']: 0 }</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>

{/* Line chart substitle                 */}
                <Grid xs={12} md={12}> 
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">實際開票走勢/AI預測走勢</Box>
                </Grid>

                <Grid container item xs={12} md={12}>
                    {/* <LineGraph/> */}
                    <LineGraphContainer />
                </Grid>
            </Grid>
            
            <Hidden smUp>
                <Grid item xs={1}></Grid>
            </Hidden>
{/* 立委 */}
            <Hidden smUp>
                <Grid item xs={1} md={4}></Grid>
            </Hidden>

            <Grid container item xs={10} md={4} direction="row">
                <Grid xs={12}> 
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">決戰立法院</Box>
                </Grid>
                {/* 立委ＡＩ預測 */}
                <Grid container item xs={12}>
                    <Grid container item xs={12}>
                        <Box fontSize="substitle2.fontSize" fontWeight={500} my={1}>AI預測政黨立委總席次</Box>
                        <CongressSummaryContainer type="total_project" seatTotal={13}/>
                    </Grid>

                    <Grid container item xs={12}>

                        <Grid container item xs={12}>
                            <Grid item xs={6}>
                                <Box fontSize="overline.fontSize" fontWeight={500} my={1}>不分區 AI 預估</Box>
                                  <CongressSummaryContainer type="party_list_project" seatTotal={34}/> 
                            </Grid>
                            <Grid item xs={6}>
                            <Box fontSize="overline.fontSize" fontWeight={500} my={1}>原住民立委 AI 預估</Box>
                              <CongressSummaryContainer type="aborigines_project" seatTotal={6}/> 
                            </Grid>
                        </Grid>

                        <Grid item container xs={12}>
                            <Grid item container xs={12}>
                                <Box fontSize="overline.fontSize" fontWeight={500} my={1}>區域 AI 預估</Box>
                            </Grid>
                            <Grid item container xs={12} sm={6}>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>台北市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="台北市" seatCount={8} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>新北市</Box><Box display="inline" ml={2}></Box>                                   
                                      <CongressAIPredictContainer county="新北市" seatCount={12} /> 
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>桃園市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="桃園市" seatCount={6} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>台中市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="台中市" seatCount={8} /> 
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>台南市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="台南市" seatCount={6} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>高雄市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="高雄市" seatCount={8} />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} sm={6}>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>基隆市</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="基隆市" seatCount={1} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>新竹縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="新竹縣" seatCount={2} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>新竹市</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="新竹市" seatCount={1} />
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>苗栗縣</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="苗栗縣" seatCount={2} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>彰化縣</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="彰化縣" seatCount={4} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>雲林縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="雲林縣" seatCount={2} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>南投縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="南投縣" seatCount={2} />
                                    </Grid>                                     
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>嘉義縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="嘉義縣" seatCount={2} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>嘉義市</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="嘉義市" seatCount={1} />
                                    </Grid>                                 
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>宜蘭縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="宜蘭縣" seatCount={1} />
                                    </Grid>
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>花蓮縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="花蓮縣" seatCount={1} />
                                    </Grid> 
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>台東縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="台東縣" seatCount={1} />
                                    </Grid>                                 
                                </Grid>
                                <Grid item container xs={12}>
                                    <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>屏東縣</Box><Box display="inline" ml={2}></Box>                                     
                                      <CongressAIPredictContainer county="屏東縣" seatCount={2} />
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>金門縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="金門縣" seatCount={1} />
                                    </Grid>
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>澎湖縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="澎湖縣" seatCount={1} />
                                    </Grid> 
                                    <Grid item container xs={4}>
                                        <Box display="inline" fontSize="overline.fontSize" fontWeight={400} my={1}>連江縣</Box><Box display="inline" ml={2}></Box>                                     
                                          <CongressAIPredictContainer county="連江縣" seatCount={1} />
                                    </Grid>                                 
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>

                {/* 區域拉鋸選區 */}
                <Grid container item xs={12} direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={3}>拉鋸選區勝選率AI預測</Box> 
                      <Grid item xs container spacing={0}>
                        {['台中 3', '台北 3', '台北 4', '台北 5', '新北 12', '花蓮']
                        .map((d, idx)=>(
                            <TieContainer key={idx} dist={d}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid> 

            <Hidden smUp>
                <Grid item xs={1} ></Grid>
            </Hidden>
{/* ------------------- 火熱開票中 */}
{/* ------------------- 總統 */}
{/*
            <Grid container item xs={12} spacing={4} className="hotresult divider_heavy"> 
                <Grid container item xs={12} sm={7}>
                    <Grid item xs={12} direction="colomn">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">總統大選火熱開票中</Box>
                    <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1} className="">與AI預測最相近為 <span className="highlight_color">40-49歲女性</span></Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={5}>
                    <Grid item xs={12} direction="colomn">
                        <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">鄉民預測</Box>
                        <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1} className="highlight_color">請選擇1組資料與AI預測比對</Box>
                        <Grid item xs={12} className="m_t_2">
                            <Chip
                                label="性別"
                                clickable
                                color="light"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className="m_t_2">
                        <Grid item container xs={4}>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3} className="highlight_color">ＡＩ預測結果</Box>
                        </Grid>  
                        <Divider orientation="vertical"/>
                        <Grid item container xs={8}>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12}>
                        <Box fontSize="caption.fontSize" fontWeight={500} lineHeight={1.3} className="m_t_2">最接近</Box>
                    </Grid>
                    <Grid container item xs={12} className="m_t_2">
                        <Grid item container xs={4}>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>1. 大學學歷</Box>
                        </Grid>  
                        <Divider orientation="vertical"/>
                        <Grid item container xs={8}>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12}>
                        <Box fontSize="caption.fontSize" fontWeight={500} lineHeight={1.3} className="m_t_2">最不接近</Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item xs={12} spacing={4} className="hotresult divider_heavy"> 
                <Grid container item xs={12} direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">立委選舉火熱開票中</Box>
                    <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1} className="">不同<span className="highlight_color"> 年齡之間 </span>與AI預測最相近的是 <span className="highlight_color">40-49歲女性</span></Box>
                </Grid>
                <Grid container item xs={12} sm={7}>
                    <Grid container item xs={12} direction="column"> 
                        <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">政黨選擇</Box>
                        <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1} className="highlight_color">請選擇你有興趣的政黨</Box>
                        <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="m_t_2">你已選擇：</Box>
                    </Grid>
                    <Grid item xs={12} className="m_t_2">
                        <Chip
                            label="性別"
                            clickable
                            color="light"
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={5}>
                    <Grid container item xs={12} direction="column"> 
                        <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">鄉民預測</Box>
                        <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1} className="highlight_color">請選擇1組資料與AI預測比對</Box>
                    </Grid>
                    <Grid item xs={12} className="m_t_2">
                        <Chip
                            label="性別"
                            clickable
                            color="light"
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} className="m_t_2">
                        <Grid item container xs={4}>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3} className="highlight_color">ＡＩ預測結果</Box>
                        </Grid>  
                        <Divider orientation="vertical"/>
                        <Grid item container xs={8}>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12}>
                        <Box fontSize="caption.fontSize" fontWeight={500} lineHeight={1.3} className="m_t_2">最接近</Box>
                    </Grid>
                    <Grid container item xs={12} className="m_t_2">
                        <Grid item container xs={4}>
                            <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>1. 大學學歷</Box>
                        </Grid>  
                        <Divider orientation="vertical"/>
                        <Grid item container xs={8}>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12}>
                        <Box fontSize="caption.fontSize" fontWeight={500} lineHeight={1.3} className="m_t_2">最不接近</Box>
                    </Grid>
            </Grid>
        */}
        </Grid> 
        <Footer/>

    </div>
    );
}