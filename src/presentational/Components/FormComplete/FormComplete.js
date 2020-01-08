import React from '../../../../node_modules/react';
import styles from './formComplete.module.scss';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


export default function FormComplete(){
    return (
        <Grid container>
            <Grid item xs={12} md={5}>
                <Hidden xsDown>
                    <Box bgcolor="#273A3C" height="80vh"></Box>
                </Hidden>
                <Hidden smUp>
                    <Box bgcolor="#273A3C" height="15vh"></Box>
                </Hidden>
            </Grid>

            <Grid item xs={12} md={7}>
                <Hidden xsDown>
                    <Box bgcolor="#E9F2F2" height="80vh" textAlign="center">
                        <img src={require('./formCompleteGraph.svg')} alt="" width="80%" className={styles.graph}/>
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Box bgcolor="#E9F2F2" height="65vh" textAlign="center">
                        <img src={require('./formCompleteGraph_sm.svg')} alt="" width="80%" className={styles.graph}/>
                    </Box>
                </Hidden>

            </Grid>

        </Grid>
    )
}