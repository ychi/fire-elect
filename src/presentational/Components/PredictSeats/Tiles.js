import React from 'react';

import styles from './PredictSeats.module.scss';

const Tile = ({colorClass = styles.default}) =>(
    <div className={`${styles.tile} ${colorClass}`}></div>
);

const TileMap = ({seats}) => (
    <div className = {styles.tilesContainer}>
        {seats.map((seat)=>(<Tile colorClass={seat.colorClass}/>))}
    </div>
);

export {Tile, TileMap};