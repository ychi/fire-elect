import React, { useState, useContext } from 'react';

import FireBaseContext from '../tools/firebase/Context';

import Predict from '../presentational/Pages/Predict/Predict';


export default ({formContent=null})=>{
    
    const firebase = useContext(FireBaseContext);
    const [submitted, setSubmited] = useState(false);

    const submitForm = (formContent, prediction)=>{
        const s = window.localStorage.getItem('i') || false;
        const i = JSON.parse(s);
        Promise.all([
            firebase.db.collection('PresidentPrediction').add({
                // firebase supports querying nested data structure in a document
                // ex collection('PresidentPrediction').where('prediction.value', '>', 50)
                "prediction": prediction.president,
                "original": i || formContent,
                "demographic": formContent,
                "return": !!i
            }),
            firebase.db.collection('LigislativePrediction').add({
                "prediction": prediction.legislative,
                "original": i || formContent,
                "demographic": formContent,
                "return": !!i
            })
        ])
        .then(()=>{
            setSubmited(true);
            if(!i) {window.localStorage.setItem('i', JSON.stringify(formContent))}
        }).catch((r)=>{
            //TODO: add crash-lytics; later
        });
    };

    return(<Predict 
        submitable={!submitted} 
        formContent={formContent}
        submitForm={submitForm}>
    </Predict>);
};