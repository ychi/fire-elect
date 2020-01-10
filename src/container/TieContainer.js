import React, {useContext, useState, useEffect} from 'react';
import DistParliament from '../presentational/Components/DistParliament/DistParliament';
import {PartyInfos} from '../logicUtils/PartyUtil';
import FirebaseContext from '../tools/firebase/Context';

const initialState = {
    winner: '', 
    wincount: 0, 
    winningStyle: '',
    loser: '', 
    losecount: 0, 
    losingStyle: '',
    winProb:0
};
export default ({dist})=>{
    const firebase = useContext(FirebaseContext);
    const [state, setState] = useState(initialState);
    useEffect(()=>{
        const unsub = firebase.db.collection('summary_swing').doc(dist)
        .onSnapshot(snapshot=>{
            const candidates = snapshot.data().data.sort((a, b)=>(b.counts - a.counts));
            const s = {
                winner: candidates[0].name,
                wincount: candidates[0].counts,
                winningStyle: candidates[0].party === 'independent'?
                    PartyInfos.others.colorClass : 
                    PartyInfos[candidates[0].party].colorClass,
                loser: candidates[1].name,
                losecount: candidates[1].counts,
                losingStyle: candidates[1].party === 'independent'? 
                    PartyInfos.others.colorClass :
                    PartyInfos[candidates[1].party].colorClass,
                winProb: candidates[0].prob * 100
            };
            setState(s);
        });
        return unsub;
    }, [firebase]);
    return (<DistParliament 
        dist={dist}
        winner={state.winner}
        wincount={state.wincount}
        loser={state.loser}
        losecount={state.losecount}
        losingStyle={state.losingStyle}
        winningStyle={state.winningStyle}
        winProb={state.winProb}/>)
};