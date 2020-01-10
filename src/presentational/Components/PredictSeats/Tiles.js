import React from 'react';

import styles from './Tiles.module.scss';

const Tile = ({colorClass = styles.default, tileClass= styles.tile}) =>(
    <div className={`${tileClass} ${colorClass}`}></div>
);

const TileMap = ({seats, tileClass=styles.tile}) => (
    <div className = {styles.tilesContainer}>
        {seats.map((seat, idx)=>(<Tile key={idx} colorClass={seat.colorClass} tileClas={tileClass}/>))}
    </div>
);

export {Tile, TileMap, styles as TileStyles};