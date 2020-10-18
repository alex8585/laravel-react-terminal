import React from 'react';
import styles from './index.css';
import { setPrice, setAmount,  setTotal} from '../../redux/actions/buyFormActions.js';
import { useForm } from "react-hook-form";

import {useEffect, useState} from 'react';
import {connect} from 'react-redux';

const BuyForm = ({price, amount, total, setPrice, setAmount, setTotal}) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>  {
        console.log(data);
        
    }

    useEffect(() => {
       

    },[]); 
    
    
    
    const handleChangePrice = (e) => {
        e.preventDefault();

       

        console.log(e.target.value);
        setPrice(e.target.value)
    }

    const handleChangeAmount = (e) => {
        e.preventDefault();
        console.log(errors);
        setAmount(e.target.value)
    }

    const handleChangeTotal = (e) => {
        e.preventDefault();
        setTotal(e.target.value)
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('33333');
    //     // this.setState({value: event.target.value});
    // }
    

    
        
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input name="price" value={price} onChange={handleChangePrice} 
                    ref={register({required: true, pattern: /^[0-9]+$/i})}
                    type="text" className="form-control" id="price"  placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input  ref={register} name="amount" value={amount} onChange={watch(handleChangeAmount)} type="text" className="form-control" id="amount" placeholder="Amount" />
                </div>

                <div className="form-group">
                    <label htmlFor="total">Total</label>
                    <input  ref={register} name="total" value={total} onChange={handleChangeTotal} type="text" className="form-control" id="total" placeholder="Total" />
                </div>

                <button type="submit" className="btn btn-primary">Buy</button>
            </form>
          );
        
    
}

const mapStateToProps = (state) => {
    return {
        price:state.buy_form.price,
        amount: state.buy_form.amount,
        total: state.buy_form.total,
    }
}

const actions = {
    setPrice,
    setAmount,
    setTotal
}

export default connect(mapStateToProps, actions)(BuyForm);