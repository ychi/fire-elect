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


const toTab = (route)=>(
    <Tab label={route.label} 
        value={route.path} 
        to={route.path}
        className = {(route.className) ? styles[route.className] : styles.normalTab}
        classes = {{
            textColorInherit: styles.inherit,
        }}
        component={
            React.forwardRef((props, ref)=>
                <RouterLink innerRef={ref} {...props}/>)}/>

    ); 

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
                    {toTab(routes[0])}
                    <div className={styles.expander}/>
                    <IconButton
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon 
                       
                        classes={{
                            root: styles.menuIcon}} />
                    </IconButton>
                </Hidden>
                <Hidden xsDown>
                    <Tabs 
                        value={location.pathname}
                        classes={{
                            root: styles.tabsContainer,
                            flexContainer: styles.flexContainer,
                            indicator: styles.indicator
                        }}
                    >
                        {toTab(routes[0])}
                        <div className={styles.expander}/>
                        {routes.slice(1)
                        .map((route)=>(
                            <Tab label={route.label} 
                                value={route.path} 
                                to={route.path}
                                className = {(route.className) ? styles[route.className] : styles.normalTab}
                                classes = {{
                                    textColorInherit: styles.inherit,
                                }}
                                component={
                                    React.forwardRef((props, ref)=>
                                        <RouterLink innerRef={ref} {...props}/>)}/>
                        
                            ))
                        }
                    </Tabs>
                </Hidden>
                <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <div className={styles.drawerMenu}>
                    <IconButton
                        aria-label="close drawer"
                    >
                        <MenuIcon 
                        classes={{
                            root: styles.menuIcon}} />
                    </IconButton>
                    </div>
                    <Tabs 
                        classes={{
                            indicator: styles.indicator
                        }}
                        value={location.pathname} 
                        orientation="vertical"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                                {routes
                                .map((route)=>(
                                    <Tab label={route.label} 
                                        value={route.path} 
                                        to={route.path}
                                        className = {(route.className)? styles[route.className] : styles.normalTab}
                                        classes ={{
                                            wrapper: styles.drawerTab,
                                            textColorInherit: styles.xsInherit
                                        }}
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