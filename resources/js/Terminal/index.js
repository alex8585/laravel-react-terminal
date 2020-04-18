import React from 'react';
import { Alert } from 'react-bootstrap';
import OrderBook from '../components/orderbook';
import withStore from '../hocs/withStore';

class Terminal extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-4'>
                        <OrderBook />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStore(Terminal);


