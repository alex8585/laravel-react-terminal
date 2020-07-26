import * as types from "../types";

const initialState = {
    symbolsArr: [],
    loading: true
}

export const symbolseReduser = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_SYMBOLS_LOADER:
            return {...state, loading:true}
        case types.HIDE_SYMBOLS_LOADER: 
            return {...state, loading:false}
        case types.FETCH_SYMBOLS:
            return {...state, symbolsArr: action.payload }
        default: return state;
    }
    
}