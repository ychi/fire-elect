import React, { useContext, useEffect, useState } from 'react';
import {TileMap, TileStyles} from '../presentational/Components/PredictSeats/Tiles';
import {distributionToSeats} from '../logicUtils/PartyUtil';
import FirebaseContext from '../tools/firebase/Context';
export default ({type="total_project", seatTotal})=>{
    const firebase = useContext(FirebaseContext);
    const [seats, setSeats] = useState(distributionToSeats([]));
    useEffect(()=>{
        const unsub = firebase.db.collection('summary_congress')
          .onSnapshot(snapshot => {
            const dist = snapshot.docs.map(d => ({
              partyId: d.id === 'independent' ? 'others' : d.id,
              prediction: ((type) => {
                switch (type) {
                  case "aborigines_project":
                    return d.data().data.aborigines_project
                  case "party_list_project":
                    return d.data().data.party_list_project
                  case "total_project":
                  default:
                    return d.data().data.total_project
                  }
              })(type)
              // d.data().data.total_confirmed
            }))
            console.log("dist")
            console.log(dist)
            const seats = distributionToSeats(dist,seatTotal);
            setSeats(seats);
          });

        return unsub;
    }, [firebase]);
    
    return (
    <div style={{padding: '5px 0'}}>
        <TileMap seats={seats} tileClass={TileStyles.xs}/>
    </div>);
};