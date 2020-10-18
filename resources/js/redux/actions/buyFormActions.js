import * as types from '../types';

export function setPrice(price) {
    return {
        type: types.BUY_SET_PRICE,
        payload:price
    }

}

export function setAmount(amount) {
    return {
        type: types.BUY_SET_AMOUNT,
        payload:amount
    }

}

export function setTotal(total) {
    return {
        type: types.BUY_SET_TOTAL,
        payload:total
    }

}