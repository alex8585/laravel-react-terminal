import * as types from "./types";
const initialState = {
    loading: true,
    alert:null
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_LOADER:
            return {...state, loading:true}
        case types.HIDE_LOADER: 
            return {...state, loading:false}
        case types.SHOW_ALERT:
                return {...state, alert:action.payload}
        case types.HIDE_ALERT: 
                return {...state, alert:null} 
        default: return state
    }
}