import React from 'react';
import CommingSoon from '../CommingSoon/CommingSoon';
import {
    useLocation
  } from "react-router-dom";

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }  

export default ({ready, renderComp})=>{
    let q = useQuery();
    let dev = q.get('developing');
    return ready|| dev ? renderComp() : <CommingSoon/>;
};
