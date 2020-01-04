import React from 'react';
import './landing.scss';
import ActionBloc from '../../Components/ActionBloc/ActionBloc';
import Grid from '@material-ui/core/Grid';
import landingbg1 from './img/landing_1.svg';
import landingbg2 from './img/landing_2.svg';
import landingbg3 from './img/landing_3.svg';
import landingbg4 from './img/landing_4.svg';
import landingbg5 from './img/landing_5.svg';
import landingbg6 from './img/landing_6.svg';
import landingbg7 from './img/landing_7.svg';
import landingbg8 from './img/landing_8.svg';


export default function Landing() {
    return(
    <div className="landing">
        <header className="header">
         <Grid container spacing={3}>
            <Grid container item xs={12} sm={2} spacing={2}>
                <Grid item xs={12}><img src={landingbg1} className="img" alt="logo" /></Grid>
                <Grid item xs={12}><img src={landingbg2} className="img" alt="logo" /></Grid>
            </Grid>
            <Grid container item xs={12} sm={3} spacing={2}>
                <Grid item xs={12} className="bg_lightblue">
                    <ActionBloc title={"我大膽預測"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"預計 2020.01.11 17:00 (GMT+8) 開放"}/>                   
                </Grid>             
                <Grid item xs={12}>
                    <img src={landingbg3} className="img" alt="logo" />
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={7} spacing={2}>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={3}>
                        <div  className="stripe_1"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={landingbg5} className="img" alt="logo" />
                    </Grid>
                    <Grid item xs={5}>
                        <div  className="stripe_2"></div>
                    </Grid>
                </Grid> 
                <Grid container item xs={12} spacing={2}>
                    <Grid item  xs={6}>
                        <ActionBloc title={"我大膽預測"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"預計 2020.01.11 17:00 (GMT+8) 開放"}/>                   
                    </Grid>
                    <Grid item xs={2}>
                        <div className="stripe_3">
                            <img src={landingbg8} className="img" alt="logo" />
                        </div>
                    </Grid>
                    <Grid item xs={4} className="bg_lightblue">
                        <ActionBloc title={"我大膽預測"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"預計 2020.01.11 17:00 (GMT+8) 開放"}/>                   
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </header>
    </div>
    );
}