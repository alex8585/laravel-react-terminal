import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default ({row}) => {
    return (
        <tr>
            
            <td>{row.price}</td>
            <td>{row.qty}</td>
            <td>{Math.round(row.price * row.qty) }</td>
        </tr>

        
    )
}