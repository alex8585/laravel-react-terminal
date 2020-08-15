import * as types from "../types";

const initialState = {
    data: [],
    loading: true,
}

export const сandlestickChartReduser = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_CHART:
            return {...state, data: action.payload }
        case types.SHOW_CHART_LOADER:
            return {...state, loading:true}
        case types.HIDE_CHART_LOADER: 
            return {...state, loading:false}
        default: return state;
    }
    
}