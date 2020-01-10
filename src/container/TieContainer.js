import React from 'react';
import DistParliament from '../presentational/Components/DistParliament/DistParliament';
import {PartyInfos} from '../logicUtils/PartyUtil';

export default ()=>{
    return (<DistParliament 
        dist="dist 1"
        winner="winner"
        wincount={253}
        loser="loser"
        losecount={232}
        losingStyle={PartyInfos.others.colorClass}
        winningStyle={PartyInfos.gp.colorClass}
        winProb={30}/>)
};