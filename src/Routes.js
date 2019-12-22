import React from 'react';
import Shoegaze from "./presentational/Shoegaze/Shoegaze";
import Dummy from "./presentational/Dummy/Dummy";

export default [
    {
        label: 'Home',
        path: '/',
        render: ()=>(<Shoegaze/>)
    },
    {
        label: 'Archive',
        path: '/archive',
        render: ()=>(<Dummy text="Archive"/>)
    },
    {
        label: 'Predict',
        path: '/predict',
        render: ()=>(<Dummy text="Predict"/>)
    },
    {
        label: 'Attribution',
        path: '/attribution',
        render: ()=>(<Dummy text="Attribution"/>)
    },
    {
        label: 'The Day',
        path: '/theday',
        render: ()=>(<Dummy text="The Day"/>)
    },

];