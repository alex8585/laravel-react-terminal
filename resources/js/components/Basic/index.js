
import React from 'react';
import ReactDOM from 'react-dom';

import { Button,Form } from 'react-bootstrap';
import { Formik, Field, Form as  FormikForm } from 'formik';
const Basic = () => (

   
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            price:'',
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }} 
    >


                 <FormikForm>
  
                    <div className="formgroup">
                        <label htmlFor="price">Price</label>
                        <input name="price"  
                        
                        type="text" className="formcontrol" id="price"  placeholder="Price" />
                    </div>
                    <div className="formgroup">
                        <label htmlFor="amount">Amount</label>
                        <input name="amount" 
                            type="text" className="formcontrol" id="amount" placeholder="Amount" />
                    </div>

                    <div className="formgroup">
                        <label htmlFor="total">Total</label>
                        <input name="total" 
                            type="text" className="formcontrol" id="total" placeholder="Total" />
                    </div>

                    <button type="submit" className="btn btnprimary">Buy</button>
                </FormikForm>

                
        
    </Formik>
);
 

 export default Basic;