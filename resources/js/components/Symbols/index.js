import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import BookRow from '../BookRow';
import {fetchSymbols } from '../../redux/actions/symbolsActions';
import {setCurrentSymbol } from '../../redux/actions/terminalActions';



import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

 function Symbols()  {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.symbols.loading);
    const symbolsArr = useSelector(state => state.symbols.symbolsArr);

    useEffect(() => {
        console.log('useEffect SYMBOLS1');
        dispatch(fetchSymbols(symbolsArr));
        console.log(symbolsArr);
    },[])
    
    useEffect(() => {
        let interval = setTimeout(() => {
            dispatch(fetchSymbols(symbolsArr));
            console.log('useEffect SYMBOLS2');
            console.log(symbolsArr);
        }, 60000);
        return () => clearTimeout(interval);
    },[symbolsArr]); 
    

    function sumbolClickHandler(symbol)  {
        dispatch(setCurrentSymbol(symbol));
    }


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

        let priceClases = ['price'];
        if(symbol.direction) {
            priceClases.push(symbol.direction);
        }
       

        return (
            <tr onClick={ () => {sumbolClickHandler(symbol.symbol)} } key={symbol.stat_id}>
                <td>{symbol.symbol}</td>
                <td className={priceClases.join(' ')} >{(+symbol.price).toFixed(4)}</td>
                <td>{new Intl.NumberFormat('en-Us', { }).format(quoteVolume)}</td>
            </tr>
        )
    })
    
    
   
    

    return (
      
        <div className='order-book'>
            <table className="table symbols-table">
            <thead>
                <tr >
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

export default Symbols;