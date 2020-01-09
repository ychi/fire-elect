import React from 'react';
import styles from './CommingSoon.module.scss';

export default ()=>(
    <div className={styles.container}>
        <img className={styles.animation} src = {require('./try2.gif')} alt="Comming Soon"></img>
    </div>
);