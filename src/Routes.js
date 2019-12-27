import React from 'react';
import Landing from "./presentational/Pages/Landing/Landing";
import Predict from "./presentational/Pages/Predict/Predict";
import Dummy from "./presentational/Dummy/Dummy";

export default [
    {
        label: 'Home',
        path: '/',
        render: ()=>(<Landing/>)
    },
    {
        label: '我大膽預測',
        path: '/ipredict',
        render: ()=>(<Predict/>)
    },    
    {
        label: '庶民ㄟ心聲',
        path: '/pplvoice',
        render: ()=>(<Dummy text="庶民ㄟ心聲"/>)
    },
    {
        label: 'AI戰情室',
        path: '/aiwarroom',
        render: ()=>(<Dummy text="AI戰情室"/>)
    },
    {
        label: '認同請分享',
        path: '/archive',
        render: ()=>(<Dummy text="認同請分享"/>)
    },

];