import React, { useContext } from 'react';
import FireBaseContext from '../tools/firebase/Context';
import Landing from '../presentational/Pages/Landing/Landing';

export default ()=>{
    const firebase = useContext(FireBaseContext);
    firebase.analytics.logEvent('view_item', {items: 'Landing Page'});
    return (<Landing/>);
}
