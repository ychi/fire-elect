import React from 'react';
import styles from './predict.module.scss';
import Masthead from '../../Components/Masthead/Masthead';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';



  
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

export default function Landing() {

    return(
    <div>
        <Masthead title={"我大膽預測"}/>
        <div className={styles.predict}>
         <Grid container justify="center">
                <Grid item xs={12} sm={3} spacing={8} direction="column">
                <Typography component="div">
                    <Box fontSize="h5.fontSize" lineHeight={1.6}>2020 總統大選</Box>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={2}>蒜什麼總統</Box>
                    <Box fontSize="subtitle.fontSize " fontWeight="fontWeightBold" lineHeight={2}>拉拉看妳預測的總統候選人得票率</Box>
                    <Box fontSize="body2.fontSize" lineHeight={1.6}>台灣政壇瞬息萬變<br/>你的猜測神不神、準不準<br/>選前趕快來預測！</Box>
                </Typography>
                </Grid>
                <Grid item xs={12} sm={7} spacing={8} justify="center" direction="column" alignItems="center" >
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
        </div>
        <Divider/>
        <div className={styles.predict}>
         <Grid container justify="center">
                <Grid item xs={12} sm={3} spacing={8} direction="column">
                <Typography component="div">
                    <Box fontSize="h5.fontSize" lineHeight={1.6}>2020 立委選舉</Box>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" lineHeight={2}>選個席次好過年</Box>
                    <Box fontSize="subtitle.fontSize " fontWeight="fontWeightBold" lineHeight={2}>政黨立委席次填填看</Box>
                    <Box fontSize="body2.fontSize" lineHeight={1.6}>幾家歡樂幾家愁<br/>你看好的政黨能奪幾席？<br/>現在預測！</Box>
                </Typography>
                </Grid>
                <Grid container xs={12} sm={7} spacing={2} justify="center" direction="column" alignItems="center">
                    <div>
                        <TextField label="Size" id="standard-size-small" defaultValue="Small" size="small" />
                        <TextField label="Size" id="standard-size-normal" defaultValue="Normal" />
                    </div>
                    <div>
                        <TextField
                        label="Size"
                        id="filled-size-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                        />
                        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
                    </div>
                    <div>
                        <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                        />
                        <TextField
                        label="Size"
                        id="outlined-size-normal"
                        defaultValue="Normal"
                        variant="outlined"
                        />
                    </div>
                </Grid>
                
            </Grid>
        </div>
    </div>
    );
}