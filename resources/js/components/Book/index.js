import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import BookRow from '../BookRow';
import {fetchBook} from '../../redux/actions/bookActions';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import  Spinner from '../Common/Spinner';

const Book  =  ({loading, book, currentSymbol, fetchBook}) => {
 
    useEffect(() => {
        fetchBook(currentSymbol);
        console.log('useEffect BOOK 1');

        const interval = setInterval(() => {
            fetchBook(currentSymbol);
            console.log('useEffect BOOK 2');
        },60000);

        return () => clearInterval(interval);

    },[currentSymbol]); 
    
    
    if(loading) {
        return  (<Spinner></Spinner>)
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

const mapStateToProps = (state) => {
    return {
        loading: state.book.loading,
        book: state.book.bookArr,
        currentSymbol: state.terminal.currentSymbol,
    }
}

const actions = {
    fetchBook
}

// const mapDispatchToProps = (state) => {
//     return {
      
//     }
// }



export default connect(mapStateToProps, actions)(Book);