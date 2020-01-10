import React from 'react';
import styles from './PresidentSummary.module.scss';

export default ({s=33, h=33, t=33})=>(
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.nameCal} >宋</div>
            <div className={styles.barCal}>
                <div className={styles.s} style={{width: `${s}%`}}></div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.nameCal} >韓</div>
            <div className={styles.barCal}>
            <div className={styles.h} style={{width: `${h}%`}}></div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.nameCal}>蔡</div>
            <div className={styles.barCal}>
            <div className={styles.t} style={{width: `${t}%`}}></div>
            </div> 
        </div>
    </div>
);