import * as types from "../types";

const initialState = {
    price: '',
    amount: '',
    total: ''
}

export const buyFormReduser = (state = initialState, action) => {
    switch(action.type) {
        case types.BUY_SET_PRICE:
            //console.log(state.amount);
            return {...state, price:action.payload, total: action.payload*state.amount}
        case types.BUY_SET_AMOUNT: 
            return {...state, amount:action.payload, total: state.price*action.payload}
        case types.BUY_SET_TOTAL:
            return {...state, total: action.payload,  amount:action.payload/state.price}
        default: return state;
    }
    
}