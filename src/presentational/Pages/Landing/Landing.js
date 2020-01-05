import React from 'react';
import './landing.scss';
import ActionBloc from '../../Components/ActionBloc/ActionBloc';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import landingbg1 from './img/landing_1.svg';
import landingbg2 from './img/landing_2.svg';
import landingbg3 from './img/landing_3.svg';
import landingbg5 from './img/landing_5.svg';
import landingbg8 from './img/landing_8.svg';



export default function Landing() {
    return(
    <div className="landing">
        <header className="header">
         <Grid container spacing={3}>
            <Hidden smDown>
            <Grid container item xs={12} sm={2} spacing={2}>
                <Grid item xs={12}><img src={landingbg1} className="img" alt="logo" /></Grid>
                <Grid item xs={12}><img src={landingbg2} className="img" alt="logo" /></Grid>
            </Grid>
            </Hidden>
            <Grid container item xs={12} sm={4} md={3} spacing={2}>
                <Grid item xs={12}>
                    <div  className="stripe_1">
                    <ActionBloc title={"AI戰情室"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"2020.01.11 17:00 開放"}/>   
                    </div>                
                </Grid>     
                <Hidden smDown>      
                <Grid item xs={12}>
                    <img src={landingbg3} className="img" alt="logo" />
                </Grid>
                </Hidden>  
            </Grid>
            <Grid container item xs={12} sm={8} md={7} spacing={2}>
                <Hidden smDown> 
                <Grid container item xs={12} spacing={2} className="height_30">
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
                </Hidden>  
                <Grid container item xs={12} spacing={2} className="height_70">
                    <Grid item xs={12} sm={6} md={5}>
                        <div  className="stripe_5">
                        <ActionBloc title={"我大膽預測"} subtitle={"大衛在潛水艇中一直請求藍仙女，直到大衛身體的能源用完，海水也被冰凍起來"} desc={"2020.01.11 17:00 開放"}/>     
                        </div>              
                    </Grid>
                    <Hidden smDown> 
                    <Grid item xs={2}>
                        <div className="stripe_3">
                            <img src={landingbg8} className="img" alt="logo" />
                        </div>
                    </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={6} md={5}>
                        <div  className="stripe_4">
                        <ActionBloc title={"庶民欸心聲"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"2020.01.11 17:00 開放"}/>
                        </div>                   
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </header>
    </div>
    );
}