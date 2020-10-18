import React from 'react';
import { Alert } from 'react-bootstrap';



import CandlestickChart from '../CandlestickChart';

import Book from '../Book';
import styles from './index.css';
import Statistics from '../Statistics';
import Symbols from '../Symbols';
import {useDispatch, useSelector} from 'react-redux';
import BuyForm from '../BuyForm';
export default () => {
    const alert = useSelector(state => state.terminal.alert);
    return (
        <div className="container pt-3">
            <div className="row">
                <div className='col-md-12'>
                {alert && 
                        <div className="alert alert-danger" role="alert">
                            {alert} 
                        </div> 
                    }
                    
                </div>
            </div>
            <div className="row">
                <div className='col-md-3'>
                <Book />
                </div>
                <div className='col-md-6'>
                    <Statistics />
                   <CandlestickChart />
                </div>
                <div className='col-md-3'>
                    <Symbols />
                </div>
                
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <BuyForm/>
                    
                </div>
                <div className='col-md-6'>
                    {/* <BuyForm/> */}
                    
                </div>
            </div>
            
        </div>
    );
    
}




