import React, { useState, useContext, useEffect } from 'react';
import './warroom.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

import DistParliament from '../../Components/DistParliament/DistParliament';
import Footer from '../../Footer/Footer';

import title from './img/title.svg';
import tsai from './img/tsai.svg';
import sung from './img/sung.svg';
import han from './img/han.svg';
import tsai_head from './img/tsai_head.png';


import FireBaseContext from '../../../tools/firebase/Context';

const headImages = require.context('./img', true);

function namePicSelector(name) {
  switch (name){
    case 'sonng':
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

    const [swing, setSwing] = useState([]);
    useEffect(() => {
      const unsub = firebase.db.collection('summary_swing')
        .onSnapshot( snapshot => {
          const results = snapshot.docs.map( d => ({...d.data()}));
          setSwing(results);
        })
      return unsub;
    },[firebase]);

    return(
    <div className="warroom">
{/* ------------- 固定位置選單 */}
        <Hidden smDown>
        <Grid container xs={12} spacing={4}>         
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
                        <Typography variant="body2" color="textSecondary">
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Divider/>
                    <CardActionArea>
                        <CardContent>
                            <Box fontSize="h6.fontSize" fontWeight={700} lineHeight={1.3}>立法委員開票</Box>
                        <Typography variant="body2" color="textSecondary">
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
            </Grid>
        </Grid>
        </Hidden>
{/* ----------------- 右側視覺化區塊 */}
        <Grid container xs={12} spacing={4} className="vizbloc">
{/* 總統候選人 */}
            <Grid container item xs={12} sm={7} direction="column">
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">總統大選開票</Box>
                <Grid container item xs spacing={3} className="p_2" alignItems="center">
                    <Grid container item xs>
                        <Grid item xs={12}>
                            <Box fontSize="substitle.fontSize"><span className="ranking">1</span><span>st</span></Box>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={president[0] ? namePicSelector(president[0]["id"]) : tsai} className="img" alt={president[0]?president[0].name: "蔡英文"} />
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box fontSize="caption.fontSize" lineHeight={1}>AI預測得票率</Box>
                            <Box fontSize="h3.fontSize" fontWeight="500" lineHeight={1.5}>{president[0] ? Math.round(president[0]['project']*100) : 0 }<small>%▼</small></Box>
                            <Box fontSize="caption.fontSize" lineHeight={1}>最新得票</Box> 
                            <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[0] ? president[0]['counts']: 0 }</Box>     
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box fontSize="caption.fontSize" lineHeight={1}>AI預測當選率</Box>
                            <Box fontSize="h3.fontSize" fontWeight="500" lineHeight={1.5}>{president[0] ? Math.round(president[0]['prob']*100) : 0 }<small>%▼</small></Box>
                            <Box fontSize="caption.fontSize" lineHeight={1}>最新得票率</Box> 
                            <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}></Box>     
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <img src={president[0]? headImages(`./${president[0]["id"]}_head.svg`): headImages("./han_head.svg")} className="img" alt="tsai" />
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container item xs>
                    <Grid container item xs alignItems="center" spacing={3} className="p_2">
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">2</span><span>nd</span></Box>
                            </Grid>
                            <Grid item xs={12}>
                            <img src={president[1] ? namePicSelector(president[1]["id"]) : han} className="img" alt="han" />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[1] ? Math.round(president[1]['project']*100) : 0 }<small>%▼</small> {president[1] ? Math.round(president[1]['prob']*100) : 0 }<small>%</small></Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>{president[1] ? president[1]['counts']: 0 }</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical"/>
                    <Grid container item xs alignItems="center" spacing={3} className="p_2">
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <Box fontSize="substitle.fontSize"><span className="ranking_s">3</span><span>rd</span></Box>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={president[2] ? namePicSelector(president[2]["id"]) : sung} className="img" alt="sung" />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography component="div">
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>AI預測得票率\當選率</Box>
                                <Box fontSize="h5.fontSize" fontWeight="500" lineHeight={1.5}>{president[2] ? Math.round(president[2]['project']*100) : 0 }<small>%▼</small> {president[2] ? Math.round(president[2]['prob']*100) : 0 }<small>%</small></Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>0000145</Box>
                                <Box fontSize="caption.fontSize" fontWeight="500" lineHeight={1}>最新得票數</Box> 
                                <Box fontSize="h6.fontSize" fontWeight="500" lineHeight={1.5}>{president[2] ? president[2]['counts']: 0 }</Box>     
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">實際開票走勢/AI預測走勢</Box>
                <Grid container item xs></Grid>
            </Grid>
            
{/* 立委 */}
            <Grid container item xs={12} sm={5} direction="column">
                <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={1.3} className="header_bd">決戰立法院</Box>
                {/* 立委ＡＩ預測 */}
                <Grid container item xs>
                    <Box fontSize="substitle2.fontSize" fontWeight={500} lineHeight={1.3}>AI預測政黨立委總席次</Box>
                    <Grid container item xs={12}>
                        <Grid container item xs direction="column">
                            <Grid item xs>
                                <Box fontSize="overline.fontSize" fontWeight={500} lineHeight={1.3}>不分區 AI 預估</Box>
                            </Grid>
                            <Grid item xs>
                            <Box fontSize="overline.fontSize" fontWeight={500} lineHeight={1.3}>原住民立委 AI 預估</Box> 
                        </Grid>
                        </Grid>
                        <Grid item xs>
                            <Box fontSize="overline.fontSize" fontWeight={500} lineHeight={1.3}>區域 AI 預估</Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                {/* 區域拉鋸選區 */}
                <Grid container item xs direction="column">
                    <Box fontSize="substitle.fontSize" fontWeight={500} lineHeight={3}>拉鋸選區勝選率AI預測</Box> 
                    <Grid item xs container spacing={2}>
                      {swing.map( (dist, idx) => 
                        <DistParliament key={idx} id={idx} dist={dist.name} winner={dist.data[0].name} wincount={dist.data[0].counts} loser={dist.data[1].name} losecount={dist.data[1].counts} />
                      )}
                    </Grid>
                </Grid>
            </Grid> 


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