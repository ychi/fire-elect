import React, { useContext, useEffect, useState } from 'react';
import {TileMap, TileStyles} from '../presentational/Components/PredictSeats/Tiles';
import {distributionToSeats} from '../logicUtils/PartyUtil';
import FirebaseContext from '../tools/firebase/Context';

export default ({county='台北市', seatCount})=>{
    const firebase = useContext(FirebaseContext);
    const [seats, setSeats] = useState(distributionToSeats([]));
    useEffect(()=>{
        const unsub = firebase.db.collection('summary_local').doc(county)
        .onSnapshot(snapshot => {
            const result = snapshot.data().data;
            console.log("CongressAIPredictContainer")
            console.log(result)
            let dist = [];
            for (let k in result) {
              console.log(k)
                dist.push({
                    partyId: result[k].party === 'independent' ? 'other' : result[k].party,
                    prediction: result[k].project
                })
            }
            console.log(dist)
            const seats =distributionToSeats(dist,seatCount);
            console.log(seats)
            setSeats(seats);
        });
        return unsub;
    }, [firebase]);
    
    return (
    <div style={{padding: '5px 0'}}>
        <TileMap seats={seats} tileClass={TileStyles.xs}/>
    </div>);
};