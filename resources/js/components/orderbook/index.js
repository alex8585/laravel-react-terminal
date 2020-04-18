import React from 'react';
import PropTypes from 'prop-types';
import withStore from '../../hocs/withStore';
import { observer, inject } from 'mobx-react';
import styles from './index.css';

@observer class OrderBook extends React.Component {

    constructor(props) {
        super(props);
        this.orderBookModel = this.props.stores.orderBook;
        this.orderBookModel.load().then(function (result) {
            console.log(result);
        });
    }

    render() {


        let bids = this.orderBookModel.book.map((order, index, array) => {
            if (order.type == 'bid') {
                return (
                    <div key={order.id}>{order.price}</div>
                )
            }
        });

        let asks = this.orderBookModel.book.map((order, index, array) => {
            if (order.type == 'ask') {
                return (
                    <div key={order.id}>{order.price}</div>
                )
            }
        });

        return (
            <div className='orderbook'>
                <div className="orders bids">
                    <div>bids</div>
                    {bids}
                </div>


                <div className="orders asks">
                    <div>asks</div>
                    {asks}
                </div>
            </div>
        )

    }
}

export default withStore(OrderBook);