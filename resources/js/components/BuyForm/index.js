import React from 'react';
import styles from './index.css';
import { setPrice, setAmount,  setTotal} from '../../redux/actions/buyFormActions.js';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import { Button,Form } from 'react-bootstrap';
import { Formik, ErrorMessage, Field, Form as  FormikForm } from 'formik';
const BuyForm = ({price, amount, total, setPrice, setAmount, setTotal}) => {
    
  

        useEffect(() => {
           
    
        },[]); 
        
         
        
       
    
        const handleChangeAmount = (e) => {
            e.preventDefault();
            setAmount(e.target.value)
        }
    
        const handleChangeTotal = (e) => {
            e.preventDefault();
            setTotal(e.target.value)
        }

        const handleChange = (e) => {
            e.preventDefault();
            console.log(e.target);
        }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('33333');
        // this.setState({value: event.target.value});
    }
    

  

    const  validateEmail = (value) => {
        console.log(value);
        let error;
        if (!value) {
        error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
        }
        return error;
    }


    const handleChangePrice = (value) => {
        console.log(value);
        let error;
        if (!value) {
        error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
        }
        return error;
    }

    return(
        <Formik  
        initialValues={{
            price:'',
            amount: '',
            total: '',
        }}

        validate= { values => {
            console.log('validate');
            const errors = {};
            if (!values.price) {
                errors.price = 'Required';
            } else if ( !/^[\d]*[\.]{0,1}[\d]+$/i.test(values.price) ) {
                errors.price = 'Invalid price';
            }

            if (!values.amount) {
                errors.amount = 'Required';
            } else if ( !/^[\d]*[\.]{0,1}[\d]+$/i.test(values.amount) ) {
                errors.amount = 'Invalid amount';
            }

            if (!values.total) {
                errors.total = 'Required';
            } else if ( !/^[\d]*[\.]{0,1}[\d]+$/i.test(values.total) ) {
                errors.total = 'Invalid total';
            }

            return errors;
        }}

        

        onSubmit = {(values, { setSubmitting }) => {
           console.log(values);
        }} >  


        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <FormikForm onSubmit={handleSubmit}>
           
                   
                <Form.Group controlId="price">
                
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text" 
                        placeholder="Amount" 
                        isInvalid={errors.price && touched.price}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>
                
                </Form.Group>
                
                        
    
                <Form.Group controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={values.amount}
                        placeholder="Amount" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.amount && touched.amount}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.amount}
                        </Form.Control.Feedback>
                </Form.Group>
                

                <Form.Group controlId="total">
                    <Form.Label>Total</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={values.total}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Total" 
                        isInvalid={errors.total && touched.total}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.total}
                    </Form.Control.Feedback>
                </Form.Group>
                  
                <Button type="submit" variant="primary" >Buy</Button>
                
            </FormikForm>

            )}


        </Formik> 
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