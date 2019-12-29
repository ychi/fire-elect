import React, { useState } from 'react';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import styles from './topbar.module.scss';


export default ({routes}) => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setDrawerOpen(open);
    }
    return (
        <AppBar position="static" elevation="0" className={styles.topbar}>

                <Hidden smUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden xsDown>
                    <Tabs value={location.pathname}>
                        {routes
                        .map((route)=>(
                            <Tab label={route.label} 
                                value={route.path} 
                                to={route.path}
                                className = {(route.className)? styles[route.className] : null}
                                component={
                                    React.forwardRef((props, ref)=>
                                        <RouterLink innerRef={ref} {...props}/>)}/>
                            ))
                        }
                    </Tabs>
                </Hidden>
                <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Tabs 
                        value={location.pathname} 
                        orientation="vertical"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                                {routes
                                .map((route)=>(
                                    <Tab label={route.label} 
                                        value={route.path} 
                                        to={route.path}
                                        className = {(route.className)? styles[route.className] : null}
                                        component={
                                            React.forwardRef((props, ref)=>
                                                <RouterLink innerRef={ref} {...props}/>)}/>
                                    ))
                                }
                            </Tabs>
                </Drawer>
           
        </AppBar>
    );
};