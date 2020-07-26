import * as types from "../types";

const initialState = {
    statisticArr: [],
    loading: true,
}

export const statisticsReduser = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_STATS_LOADER:
            return {...state, loading:true}
        case types.HIDE_STATS_LOADER: 
            return {...state, loading:false}
        case types.FETCH_STATISTIC:
            return {...state, statisticArr: action.payload }
        default: return state;
    }
    
}