import React from 'react';
import Landing from "./presentational/Pages/Landing/Landing";
import Predict from "./presentational/Pages/Predict/Predict";
import Warroom from "./presentational/Pages/Warroom/Warroom";
import Dummy from "./presentational/Dummy/Dummy";
import Armeggeddon from "./presentational/Armeggeddon/Armeggeddon";

export default [
    {
        label: 'Fire Elect',
        path: '/',
        render: ()=>(<Landing/>),
        className: 'title'
    },
    {
        label: '我大膽預測',
        path: '/ipredict',
        className: 'normalTab',
        render: ()=>(<Predict/>)
    },    
    {
        label: '庶民ㄟ心聲',
        path: '/pplvoice',
        className: 'normalTab',
        render: ()=>(<Dummy text="庶民ㄟ心聲"/>)
    },
    {
        label: 'AI戰情室',
        path: '/aiwarroom',
        render: ()=>(<Warroom/>)
    },
    {
        label: '認同請分享',
        path: '/archive',
        className: 'normalTab',
        render: ()=>(<Armeggeddon text="認同請分享"/>)
    },

];