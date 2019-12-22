import React from 'react';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    title: {
        flexGrow: 1,
        alignSelf: 'center',
        textAlign: 'left',
        padding: '0 30px',
    }
}));

export default ({routes}) => {
    const location = useLocation();
    const classes = useStyles();
    return (
        <AppBar position="static">
            
            <Tabs value={location.pathname}>
            <Typography variant="h5" className={classes.title}>
                Fire Elect
            </Typography>
                {routes.map((route)=>(
                    <Tab label={route.label} 
                        value={route.path} 
                        to={route.path}
                        component={
                            React.forwardRef((props, ref)=>
                                <RouterLink innerRef={ref} {...props}/>)}/>
                    ))
                }
            </Tabs>
        </AppBar>
    );
};