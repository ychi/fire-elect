import React from 'react';
import CommingSoon from '../CommingSoon/CommingSoon';

export default ({ready, renderComp})=>{
    return ready ? renderComp() : <CommingSoon/>;
};
