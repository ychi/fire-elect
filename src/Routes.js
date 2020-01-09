import React from 'react';
import Landing from "./container/Home";
import PredictContainer from "./container/PredictContainer";
import Warroom from "./presentational/Pages/Warroom/Warroom";
import Prejudice from "./presentational/Pages/Prejudice/Prejudice";
import Spread from "./presentational/Pages/Spread/Spread";
import Dummy from "./presentational/Dummy/Dummy";

export default [
    {
        label: '隔日作廢',
        path: '/',
        render: ()=>(<Landing/>),
        className: 'title'
    },
    {
        label: '我大膽預測',
        path: '/ipredict',
        render: ()=>(<PredictContainer/>)
    },    
    {
        label: '庶民ㄟ心聲',
        path: '/prejudice',
        className: 'normalTab',
        render: ()=>(<Prejudice text="庶民ㄟ心聲"/>)
    },
    {
        label: 'AI戰情室',
        path: '/aiwarroom',
        render: ()=>(<Warroom/>)
    },
    {
        label: '認同請分享',
        path: '/spreadword',
        render: ()=>(<Spread/>)
    },

]