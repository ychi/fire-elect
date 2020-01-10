import React, { useContext, useState, useEffect } from 'react';
import PresidentSummary from './../presentational/Components/PresidentSummary/PresidentSummary';
import FirebaseContext from '../tools/firebase/Context';

export default ()=>{
    const firebase = useContext(FirebaseContext);
    const [presidentSummary, setPresidentSummary] = useState({h:0, t:0, s:0});
    useEffect(()=>{
        const unsub =firebase.db.collection('summary_president')
        .onSnapshot(snapshot=>{
            const results = snapshot.docs.map(d => ({id: d.id, counts: d.data().counts||0}));
            let total = results.reduce((acc, r)=>(acc+r.counts), 0);
            let summary = {};
            for (let r of results) {
                summary[r.id] = r.counts / total * 100;
            }
            setPresidentSummary(summary);
        })
        return unsub;
    }, [firebase]);   
    return (<PresidentSummary 
        h={presidentSummary.han}
        s={presidentSummary.sonng}
        t={presidentSummary.tsai}/>);
};