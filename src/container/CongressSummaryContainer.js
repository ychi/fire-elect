import React from 'react';
import {TileMap, TileStyles} from '../presentational/Components/PredictSeats/Tiles';
import {distributionToSeats} from '../logicUtils/PartyUtil';
export default ()=>{
    const seats = distributionToSeats([]);
    return (
    <div style={{padding: '5px 0'}}>
        <TileMap seats={seats} tileClass={TileStyles.xs}/>
    </div>);
};