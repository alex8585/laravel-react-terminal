import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import BookRow from '../BookRow';
import {fetchSymbols} from '../../redux/actions/symbolsActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.symbols.loading);
    const symbolsArr = useSelector(state => state.symbols.symbolsArr);

    useEffect(() => {
        dispatch(fetchSymbols());
        console.log('useEffect SYMBOLS');
        const interval = setInterval(() => {
            dispatch(fetchSymbols());
            console.log('useEffect SYMBOLS');
        }, 60000);
        return () => clearInterval(interval);

    },[]); 
    
    

    if(loading) {
        return(
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } 

    let symbols = symbolsArr.map(symbol => {
        let stat = JSON.parse(symbol.data);
        const quoteVolume =  Math.round(+stat.quoteVolume);
        return (
            <tr key={symbol.stat_id}>
                <td>{symbol.symbol}</td>
                <td>{(+symbol.price).toFixed(4)}</td>
                <td>{new Intl.NumberFormat('en-Us', { }).format(quoteVolume)}</td>
            </tr>
        )
    })
    
    
   
    

    return (
        <div className='order-book'>
            <table className="table symbols-table">
            <thead>
                <tr>
                <th scope="col">Pair</th>
                <th scope="col">Price</th>
                <th scope="col">Volume</th>
                </tr>
            </thead>
                <tbody>
                   {symbols}
                </tbody>
            </table>

            
        </div>
    )
}