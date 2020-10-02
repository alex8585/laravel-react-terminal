import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

import { fetchStatistics } from '../../redux/actions/statisticsActions.js';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import  Spinner from '../Common/Spinner';
import {connect} from 'react-redux';

const Statistics = ({fetchStatistics, loading, stat, currentSymbol }) => {
    
    useEffect(() => {
       fetchStatistics(currentSymbol);
        console.log('useEffect Statistics1');
        const interval = setInterval(() => {
            fetchStatistics(currentSymbol);
            console.log('useEffect Statistics2');
        }, 60000);
        return () => clearInterval(interval);

    },[currentSymbol]); 
    
    
    
    if(loading) {
        return  (<Spinner></Spinner>)
	} 
    

    const priceChange = +stat.priceChange;
    const priceChangePercent = +stat.priceChangePercent;
    const highPrice = +stat.highPrice;
    const lowPrice = +stat.lowPrice;
    const quoteVolume =  +stat.quoteVolume;

    const isPositive = (priceChange > 0) ? true:false;
    const priceChangeClass = isPositive ? 'green-price' : 'red-price';


    const lastPrice = +stat.lastPrice;

    return (
        
        <table className="table statistics">
            <thead>
                <tr>
                    <th> {currentSymbol}</th>
                    <th> 24h Change</th>
                    <th> 24h High</th>
                    <th> 24h Low</th>
                    <th> 24h Volume</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className={priceChangeClass}>{lastPrice}</th>
                    <td className={priceChangeClass} > 
                        {priceChange.toFixed(2)} 
                        {isPositive ? ' +' : ' -' }
                        {priceChangePercent.toFixed(2)} %
                    </td>
                    <td> {highPrice.toFixed(2)}</td>
                    <td> {lowPrice.toFixed(2)}</td>
                    <td> {new Intl.NumberFormat('en-Us', { }).format(quoteVolume)} $</td>
                </tr>
            </tbody>
        </table>
        
    )
}

const mapStateToProps = (state) => {
    return {
        loading:state.stats.loading,
        stat: state.stats.statisticArr,
        currentSymbol: state.terminal.currentSymbol,
    }
}

const actions = {
    fetchStatistics
}

export default connect(mapStateToProps, actions)(Statistics);