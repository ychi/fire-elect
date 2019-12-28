import React from 'react';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core';
import './topbar.scss';

const useStyles = makeStyles(theme=>({
    appbar: {
        boxShadow: 'none'
    },
    title: {
        fontSize: '20px',
        fontWeight: '800'
    },
    normalTab: {
        fontSize: '16px',
        fontWeight: '800'
    }
}));

export default ({routes}) => {
    const location = useLocation();
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <div className="topbar">
                <Tabs value={location.pathname}>
                    {routes
                    .map((route)=>(
                        <Tab label={route.label} 
                            value={route.path} 
                            to={route.path}
                            className = {(route.className)? classes[route.className] : null}
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