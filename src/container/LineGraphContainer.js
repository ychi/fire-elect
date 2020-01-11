import React, { useContext, useEffect, useState } from 'react';
import LineGraph from '../presentational/Components/LineGraph/LineGraph';
import FirebaseContext from '../tools/firebase/Context';

function newLineGraphOptions() {
  return {
    title: {
      text: 'My stock chart'
    },
    series: [{
      name: '韓 實際得票率',
      data: []
    }, {
      name: '蔡 實際得票率',
      data: []
    }, {
      name: '宋 實際得票率',
      data: []
    }, {
      name: '韓 預測得票率',
      data: []
    }, {
      name: '蔡 預測得票率',
      data: []
    }, {
      name: '宋 預測得票率',
      data: []
    }]
  }
}
export default () => {
  const firebase = useContext(FirebaseContext);
  const [options, setOptions] = useState(newLineGraphOptions());

  useEffect(() => {
    const unsub = firebase.db.collection('president').orderBy('updateAt','desc').limit(100)
      .onSnapshot( snapshot => {
        let store = newLineGraphOptions()
        snapshot.docs.map(d => {
          let data = d.data()
          let total = data.han.counts + data.tsai.counts + data.soong.counts
          store.series[0].data.push((d.data().han.counts/total))
          store.series[1].data.push(d.data().tsai.counts/total)
          store.series[2].data.push((d.data().soong.counts/total))
          store.series[3].data.push(d.data().han.project)
          store.series[4].data.push(d.data().tsai.project)
          store.series[5].data.push(d.data().soong.project)
        })
        setOptions(store)
      })
    return unsub;
  }, [firebase]);

  return (
    <LineGraph options={options}/>
  );
};