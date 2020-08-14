import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import BookRow from '../BookRow';
import {fetchBook} from '../../redux/actions/bookActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.book.loading);
    const book = useSelector(state => state.book.bookArr);
    const currentSymbol = useSelector(state => state.terminal.currentSymbol);

    useEffect(() => {
        dispatch(fetchBook(currentSymbol));
        console.log('useEffect BOOK');
        const interval = setInterval(() => {
            dispatch(fetchBook(currentSymbol));
            console.log('useEffect BOOK');
        }, 60000);
        return () => clearInterval(interval);

    },[currentSymbol]); 
    
    

    if(loading) {
        return(
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } 

    
    let bids = book.filter(row =>  row.type == 'bid' )
    bids = bids.sort((a, b) => (a.price > b.price) ? -1 : 1)
    bids = bids.map(row => <BookRow row={row} key={row.id}></BookRow>);


    let asks = book.filter(row =>  row.type == 'ask' )
    asks = asks.sort((a, b) => (a.price > b.price) ? -1 : 1)
    asks = asks.map(row => <BookRow row={row} key={row.id}></BookRow>);
   
    

    return (
        <div className='order-book'>
            <table className="table asks-table">
            <thead>
                <tr>
                <th scope="col">Price(USDT)</th>
                <th scope="col">Amount(ETH)</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
                <tbody>
                    { asks }
                </tbody>
            </table>

            <table className="table bids-table">
            <thead>
                <tr>
                <th scope="col">Price(USDT)</th>
                <th scope="col">Amount(ETH)</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
                <tbody>
                    { bids }
                </tbody>
            </table>
        </div>
    )
}