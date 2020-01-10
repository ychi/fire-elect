import React, { useState } from 'react';
import styles from './spread.module.scss';
import Grid from '@material-ui/core/Grid';
import { Select, MenuItem } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import CoundownTimer from "../../Components/Common/CountdownTimer/CoundownTimer";

import FormControl from '../../../../node_modules/@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const countyImages = require.context('.', true);

const countySelectMenus = ["臺北市", "新北市", "基隆市","宜蘭縣","桃園市","新竹縣","新竹市","苗栗縣","臺中市","彰化縣","南投縣","嘉義市","嘉義縣","臺南市","高雄市","屏東縣","花蓮縣","臺東縣"]

const counties = {
  "臺北市": {
    "left": "./img/set1/taipei_map_margin_10y.png",
    "right": "./img/set1/taipei_margin_10y.png"
  },
  "新北市": {
    "left": "./img/set1/newtaipei_map_margin_10y.png",
    "right": "./img/set1/newtaipei_margin_10y.png"
  },
  "基隆市": {
    "left": "./img/set1/keelung_map_margin_10y.png",
    "right": "./img/set1/keelung_margin_10y.png"
  },
  "宜蘭縣": {
    "left": "./img/set1/yilan_map_margin_10y.png",
    "right": "./img/set1/yilan_margin_10y.png"
  },
  "桃園市": {
    "left": "./img/set1/taoyuan_map_margin_10y.png",
    "right": "./img/set1/taoyuan_margin_10y.png"
  },
  "新竹縣": {
    "left": "./img/set1/hsinchucounty_map_margin_10y.png",
    "right": "./img/set1/hualian_map_margin_10y.png"
  },
  "新竹市": {
    "left": "./img/set1/hsinchucity_map_margin_10y.png",
    "right": "./img/set1/hsinchucity__margin_10y.png"
  },
  "苗栗縣": {
    "left": "./img/set1/miaoli_map_margin_10y.png",
    "right": "./img/set1/miaoli_margin_10y.png"
  },
  "臺中市": {
    "left": "./img/set1/taichung_map_margin_10y.png",
    "right": "./img/set1/taichung_margin_10y.png"
  },
  "彰化縣": {
    "left": "./img/set1/changhua_map_margin_10y.png",
    "right": "./img/set1/changhua_margin_10y.png"
  },
  "南投縣": {
    "left": "./img/set1/nantou_map_margin_10y.png",
    "right": "./img/set1/nantou_margin_10y.png"
  },
  "嘉義市": {
    "left": "./img/set1/jiayicity_map_margin_10y.png",
    "right": "./img/set1/jiayicity_map_margin_10y.png"
  },
  "嘉義縣": {
    "left": "./img/set1/jiayicounty_map_margin_10y.png",
    "right": "./img/set1/jiayicounty_margin_10y.png"
  },
  "臺南市": {
    "left": "./img/set1/tainan_map_margin_10y.png",
    "right": "./img/set1/tainan_margin_10y.png"
  },
  "屏東縣": {
    "left": "./img/set1/pingtung_map_margin_10y.png",
    "right": "./img/set1/pingtung_margin_10y.png"
  },
  "花蓮縣": {
    "left": "./img/set1/hualian_map_margin_10y.png",
    "right": "./img/set1/hualian_margin_10y.png"
  },
  "臺東縣": {
    "left": "./img/set1/taitung_map_margin_10y.png",
    "right": "./img/set1/taitung_margin_10y.png"
  },
  "高雄市": {
    "left": "./img/set1/kaohsiung_map_margin_10y.png",
    "right": "./img/set1/kaohsiung_margin_10y.png" 
  }
}

export default function Spread() {
    const [county, setCounty] = useState('臺北市');

    return(
    <div>
        <section className={styles.window__section}>
            <Grid container >
                <Grid item xs={1} md={1} >
                    <Hidden smDown>
                        <Box textAlign="right">
                            <Box height="10vh"></Box>
                            <Typography variant="h5" className={styles.text__vertical__lr} display="inline">SPREAD THE WORD</Typography>
                            <Box borderLeft={2} height="25vw" width="24px" ml="7vw"></Box>
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
                            <Box>十年選舉無人聞，一頁成名天下知！</Box>
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
                    </Grid>
                </Grid>
                <Grid container xs={12} md={2}></Grid>
                <Grid container xs={12} md={8}>
                    <Hidden smUp>
                        <Grid item xs={1}></Grid>
                    </Hidden>
                    <Grid item xs={10} md={8} lg={10}>
                        <Box>
                            <Typography variant="body3" align="left">
                                <Box>提起藍綠版圖，「南綠北藍」是普遍印象。誰來自台南，「我感覺你是綠的」，誰出身台北，知識藍經濟藍的標籤，立刻浮現腦海。但是，地球的板塊都會位移了，沒道理政治的板塊不會變動。當國家機器動來動去，藍綠支持者究竟是要進來，還是要出去呢？十年藍綠兩茫茫，你的家鄉怎麼動，一起來看看。
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Hidden smUp>
                        <Grid item xs={1}></Grid>
                    </Hidden>               
                <Hidden smUp>
                    <Grid item xs={1}></Grid>
                </Hidden>
                <Grid container xs={10} md={12} direction="row">
                    <Box item mt={3}>
                      <FormControl className={styles.formControl}>
                        {/* <InputLabel id={tag}>{tag}</InputLabel> */}
                        <Select
                          labelId="spread-county-select-label"
                          name="spread-country-select"
                          value={county}
                          onChange={ (e) => {setCounty(e.target.value)}}
                        >
                          {countySelectMenus.map( (county, idx) => {
                            return (<MenuItem key={idx} value={county}>{county}</MenuItem>)
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    
                    <Grid container xs={12} md={12} direction="row">
                        <Box item>
                            <Typography className={styles.spread__subtitle}>十年平均藍綠得票率差異</Typography>
                            <Box><img src={countyImages(counties[county]['left'])} width="100%" alt="" /></Box>
                            <Box mt={1}><img src={require('./img/set1/map_who_win.svg')} width="100%" alt="" /></Box>
                        </Box>
                        <Box item>
                            <Typography className={styles.spread__subtitle}>2008-2018 歷次選舉藍綠得票率差異</Typography>
                            <img src={countyImages(counties[county]['right'])} width="100%" alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>

                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
                <Grid item xs={10} md={8} lg={10}>
                    <Box>
                        <Typography variant="body1" align="left">
                            <Box mt={2}>使用方法：</Box>
                        </Typography>
                        <Typography variant="body2" align="left">
                            <Box>
                            左圖為縣市各村里十年得票率差異平均，藍色即為藍贏，綠色是綠贏，米白色表示差異接近 0。十年平均可以視為該縣市兩政營支持基準。<br/>
                            <br/>
                            右圖為縣市所有村里，十年間七次選舉（縣市長及總統）的兩黨勝差，一條線代表一個村里，線段顏色來自該村里「前一次」選舉，是藍勝或是綠勝，比如從 2012 到 2014 的線段，會是 2012 該村里的勝利陣營的代表色。<br/>
                            <br/>
                            註：藍綠勝利顏色單純依候選人披掛政黨設定，如該年度有無黨籍或其他黨籍候選人參選，如 2014 的台北市，不會被計入藍綠勝負中。<br/>
                            </Box>
                        </Typography>
                        <Typography className={styles.spread__subtitle}>寶傑，十年選舉路，你怎麼看</Typography>
                        <Typography variant="body3" align="left">
                            <Box mt={2}>觀察右圖的七次選舉，兩黨得票率差異，直轄市六都的線段大多平行變動，隨當年大勢同幅增長或減少，趨勢和幅度都相當一致。然而關注其他縣市的 2012-2018 區段，會發現兩群村里往不同方向變動的情形，比如雲林 2012-2014 、花蓮 2014-2016、南投 2012-2016。台東及花蓮的 2012-2014 則是變動走向一致，但有部分村里消長幅度較大的情形。另外，屏東跟高雄有明顯分成兩群，藍綠村里涇渭分明的情形。
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>

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
                    </Grid>
                </Grid>
                <Grid container xs={12} md={2}>
                </Grid>

                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
                <Grid container xs={10} md={8}>
                    <Typography className={styles.spread__subtitle}>各縣市十年平均藍綠得票率差異</Typography>
                    <Grid container xs={12} md={8} lg={10} mb={2} direction="row">
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/keelung_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>基隆市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/newtaipei_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>新北市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/taipei_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>臺北市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/yilan_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>宜蘭縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/taoyuan_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>桃園市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/hsinchucounty_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>新竹縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/hsinchucity_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>新竹市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/miaoli_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>苗栗縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/taichung_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>臺中市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/changhua_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>彰化縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/nantou_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>南投縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/jiayicity_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>嘉義市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/jiayicounty_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>嘉義縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/tainan_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>臺南市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/kaohsiung_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>高雄市</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/pingtung_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>屏東縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/hualian_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>花蓮縣</Box></Typography>
                        </Box>
                        <Box item height="150px">
                            <Box height="120px"><img src={require('./img/set1/taitung_map_margin_10y.png')} width="150px" alt="" /></Box>
                            <Typography variant="body4" align="left"><Box>臺東縣</Box></Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8} lg={10}>
                        <Typography className={styles.spread__subtitle}>齁，我的鄰居都是 X 粉啦</Typography>
                        <Typography variant="body3" align="left">
                            <Box mt={2}>鍵盤繞境台灣，會發現各縣市的藍綠區塊，頗有一種漸層質感。藍色的相鄰區塊，大致是藍的，綠色的鄰居，大多也是綠的，藍綠相接處，常有接近 0 的米白色，或至少淺藍淺綠作為緩衝。深藍綠短兵相接處雖有，但數量稀少。
                            </Box>
                            <Box mt={2}>大部分的縣市，藍綠壁壘分明，唯有基隆，全區夢幻粉彩，輕飄飄跨越藍綠之間，來去自如。藍綠除了開戰濁水溪南北之外，部分包含山區的縣市，也有平地區域較綠、而大面積的山地區塊較藍的情形。
                            </Box>
                        </Typography>
                    </Grid>

                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
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
                    </Grid>
                </Grid>
                <Grid container xs={12} md={2}></Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
                <Grid container xs={10} md={8}>
                    <Grid item xs={12} md={8} lg={10}>
                        <Typography className={styles.spread__subtitle}>鐵藍區長什麼樣子？</Typography>
                        <Typography variant="body3" align="left">
                            <Box mt={2}>我們將最國民黨支持度最高的前 10% 村里抓出來，標記為鐵桿藍營區，以回歸模型探索，是否有哪些人口特徵，與高度支持藍營相關。模型發現這些藍營區，大體男性人口較多，且多為已婚男性多的區域。民進黨支持度最高的區域，則大致呈現相反的趨勢。
                            </Box>
                        </Typography>
                        <Typography className={styles.spread__subtitle}>十年藍綠得票率差異</Typography>
                        <Box><img src={require('./img/set2/margin_y.svg')} width="100%" alt="" id="toggleImage"/></Box>
                        <Typography className={styles.spread__subtitle}>上大學會怎樣？</Typography>
                        <Typography variant="body3" align="left">
                            <Box mt={3}>改從人口特徵出發，拉出擁有大學學歷的人口比例最多，跟最少的 10% 村里，檢視這兩群村里的藍綠得票率差異，會發現教育程度較高的這一群村里，相較於教育程度較低的那群，兩黨的勝差更小，也有整體轉藍或者轉綠的情況，可能對政黨的忠誠度較低。而大學學歷人口比例最少的村里群，雖然也有部分變天，但數量較少，單一村里開出的票，對特定政黨的支持較穩定。
                            </Box>
                        </Typography>
                    </Grid>
                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
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
                            <Typography variant="h2" className={styles.predict__subtitle__vertical} display="inline">資料在<br/>哪裡</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box height="8vh"></Box>
                    </Grid>

                    <Grid item xs={12} md={12}></Grid>
                </Grid>

                <Grid container xs={12} md={2}></Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
                <Grid container xs={10} md={8}>
                    <Grid item xs={12} md={8} lg={10}>
                        <Typography variant="body3" align="left">
                            <Box mt={2}>本篇圖表所使用的，加上村里代碼的 2008-2018 選舉資料
                                <a href="https://github.com/missmoss/expires-next-day-2020-data" target="_blank"  className={styles.spread__link}>
                                    在此
                                </a>
                                ，請隨意夾去配
                            </Box>
                        </Typography>
                        <Typography className={styles.spread__subtitle}>特別感謝</Typography>
                        <Typography variant="body3" align="left">
                            <Box mt={2}>Kirby Wu 的 <a href="https://plotdb.com/" target="_blank" className={styles.spread__link}>Plotdb</a> 讓畫地圖變得容易。室友 Po & Maureen 幫忙救火。
                            </Box>
                        </Typography>
                    </Grid>
                    <Hidden mdUp>
                        <Grid xs={1}></Grid>
                    </Hidden>
                    <Grid md={1}></Grid>
                </Grid>
                <Hidden smUp>
                        <Grid item xs={1}></Grid>
                </Hidden>
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
