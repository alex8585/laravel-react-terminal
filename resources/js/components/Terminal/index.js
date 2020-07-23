import React from 'react';
import { Alert } from 'react-bootstrap';

import Post from '../BookRow';
import FetchedPosts from '../Book';
import styles from './index.css';

class Terminal extends React.Component {
    render() {
        return (
            <div className="container pt-3">
                <div className="row">
                    <div className='col-md-3'>
                    <FetchedPosts />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                      
                        
                    </div>
                    <div className='col'>
                       
                       
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Terminal;


