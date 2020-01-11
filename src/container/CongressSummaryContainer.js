import React, { useContext, useEffect, useState } from 'react';
import {TileMap, TileStyles} from '../presentational/Components/PredictSeats/Tiles';
import {distributionToSeats} from '../logicUtils/PartyUtil';
import FirebaseContext from '../tools/firebase/Context';
export default ()=>{
    const firebase = useContext(FirebaseContext);
    const [seats, setSeats] = useState(distributionToSeats([]));
    useEffect(()=>{
        const unsub = firebase.db.collection('summary_congress')
          .onSnapshot(snapshot => {
            const dist = snapshot.docs.map(d => ({
              partyId: d.id === 'independent' ? 'other' : d.id,
              prediction: d.data().data.total_confirmed
            }))
            const seats = distributionToSeats(dist);
            setSeats(seats);
          });

        return unsub;
    }, [firebase]);
    
    return (
    <div style={{padding: '5px 0'}}>
        <TileMap seats={seats} tileClass={TileStyles.xs}/>
    </div>);
};