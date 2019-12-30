import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../../container/Firebase/Context'

import Masthead from '../Components/Masthead/Masthead';
import { Table, TableBody,TableHead, TableRow, TableCell } from '@material-ui/core';

function RealtimeExample(){
    const [state, setState] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        const unsubscribe = firebase.db.collection('president')
            .onSnapshot( snapshot => {
                const results = []
                snapshot.forEach( doc => { 
                    results.push(doc.data())
                    
                })
                console.log(results)
                setState(results)
        })
        return () => unsubscribe()
    },[firebase]);

    return (
        <div>
            <Masthead title={"Realtime"}/>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>候選人</TableCell>
                    <TableCell>得票數</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {state.map(candidate => (
                <TableRow>
                    <TableCell>{candidate.name}</TableCell>
                    <TableCell>{candidate.vote}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    );
}

function RestfulExample() {
    const [state, setState] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        firebase.db.collection('mayor_raw').get()
            .then((snapshot) => {
                const results = []
                snapshot.forEach(doc => {
                    results.push({
                    id:doc.id,
                    ...doc.data()
                })})
                setState(results)
            }) 
    },[firebase]);

    return (
        <div>
            <Masthead title={"Restful"}/>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>候選人</TableCell>
                    <TableCell>已送投開票所數</TableCell>
                    <TableCell>得票數</TableCell>
                    <TableCell>得票率</TableCell> 
                    <TableCell>應送投開票所數</TableCell> 
                    <TableCell>時間</TableCell> 
                    <TableCell>縣市</TableCell> 
                    <TableCell>行政區</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {state.map(current => (
                <TableRow>
                    <TableCell>{current['候選人']}</TableCell>
                    <TableCell>{current['已送投開票所數']}</TableCell>
                    <TableCell>{current['得票數']}</TableCell>
                    <TableCell>{current['得票率']}</TableCell>
                    <TableCell>{current['應送投開票所數']}</TableCell>
                    <TableCell>{current['時間']}</TableCell>
                    <TableCell>{current['縣市']}</TableCell>
                    <TableCell>{current['行政區']}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    )
}

export default function Armeggeddon() {
    return (<div>
        <RealtimeExample />
        <RestfulExample />
    </div>)
}