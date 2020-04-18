import React from 'react';
import PropTypes from 'prop-types';
import withStore from '../../hocs/withStore';
import { observer, inject } from 'mobx-react';

@observer class OrderBook extends React.Component {
    render() {
        return (
            <div className="te">11111</div>
        )

    }
}

export default withStore(OrderBook);