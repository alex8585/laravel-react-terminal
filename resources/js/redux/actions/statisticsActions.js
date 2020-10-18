import * as types from '../types';


export function fetchStatistics(symbol) {
    return {
        type: types.REQUEST_STATISTIC,
        payload:symbol
    }

}

export function statShowLoader() {
    return {
        type:types.SHOW_STATS_LOADER
    }
}

export function statsHideLoader() {
    return {
        type:types.HIDE_STATS_LOADER
    }
}



