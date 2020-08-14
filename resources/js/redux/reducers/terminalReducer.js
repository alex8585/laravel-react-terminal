import * as types from "../types";
const initialState = {
    alert:null,
    currentSymbol: 'BTCUSDT'
}

export const terminalReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_ALERT:
            return {...state, alert:action.payload}
        case types.HIDE_ALERT: 
            return {...state, alert:null} 
        case types.SET_SYMBOL:
            return {...state, currentSymbol: action.payload }
        default: return state
    }
}