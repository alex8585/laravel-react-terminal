import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import BookRow from '../BookRow';
import {fetchSymbols } from '../../redux/actions/symbolsActions';
import {setCurrentSymbol } from '../../redux/actions/terminalActions';
import  Spinner from '../Common/Spinner';


import {connect} from 'react-redux';
import {useEffect} from 'react';

function Symbols({setCurrentSymbol, fetchSymbols, loading, symbolsArr})  {

    useEffect(() => {

        if(symbolsArr.length == 0) {
            console.log('useEffect SYMBOLS 1');
            fetchSymbols(symbolsArr);
        }
      
        const interval = setTimeout(() => {
            console.log('useEffect SYMBOLS 2');
            //console.log(symbolsArr);
            fetchSymbols(symbolsArr);
        },60000);

        return () => clearTimeout(interval);

    },[symbolsArr]); 
    

    if(loading) {
        return  (<Spinner></Spinner>)
    }  
    

    let symbols = symbolsArr.map(symbol => {
        let stat = JSON.parse(symbol.data);
        const quoteVolume =  Math.round(+stat.quoteVolume);

        let priceClases = ['price'];
        if(symbol.direction) {
            priceClases.push(symbol.direction);
        }
       

        return (
            <tr onClick={ () => {setCurrentSymbol(symbol.symbol)} } key={symbol.stat_id}>
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

const mapStateToProps = (state) => {
    return {
        loading: state.symbols.loading,
        symbolsArr: state.symbols.symbolsArr,
    }
}

const actions = {
    fetchSymbols,
    setCurrentSymbol
}

export default connect(mapStateToProps, actions)(Symbols);
