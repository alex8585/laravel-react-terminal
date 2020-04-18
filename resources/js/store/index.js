import { configure } from 'mobx';

import orderbookStore from './orderbook';


//import * as products from '~/api/products';
//import * as cart from '~/api/cart';

// configure({ enforceActions: "observed" })

class RootStore {
    constructor() {
        this.api = {

        };
        this.orderBook = new orderbookStore(this);
    }
}

export default new RootStore();