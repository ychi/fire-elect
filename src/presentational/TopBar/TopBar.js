import React from 'react';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import './topbar.scss';

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
        <AppBar position="static" style={{boxShadow: 'none',}}>
            <div className="topbar">
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
            </div>
        </AppBar>
    );
};