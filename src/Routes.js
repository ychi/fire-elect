import React from 'react';
import Landing from "./presentational/Pages/Landing/Landing";
import Predict from "./presentational/Pages/Predict/Predict";
import Warroom from "./presentational/Pages/Warroom/Warroom";
import Prejudice from "./presentational/Pages/Prejudice/Prejudice";
import Spread from "./presentational/Pages/Spread/Spread";
import CommingSoonWrapper from "./presentational/Pages/CommingSoon/CommingSoonWrapper";

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
        render: ()=>(<Predict/>)
    },    
    {
        label: '庶民ㄟ心聲',
        path: '/prejudice',
        className: 'normalTab',
        render: ()=>(<CommingSoonWrapper 
            ready={false} 
            renderComp={()=>(<Prejudice text="庶民ㄟ心聲"/>)}/>)

    },
    {
        label: 'AI戰情室',
        path: '/aiwarroom',
        render: ()=>(<CommingSoonWrapper
            ready={true}
            renderComp={()=>(<Warroom/>)}/>
            )
    },
    {
        label: '認同請分享',
        path: '/spreadword',
        render: ()=>(<Spread/>)
    },

]