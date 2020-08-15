import * as types from '../types';
export function fetchChart(currentSymbol) {
    return {
        type: types.REQUEST_CHART,
        payload:currentSymbol,
    }

}


export function chartShowLoader() {
    return {
        type:types.SHOW_CHART_LOADER
    }
}

export function chartHideLoader() {
    return {
        type:types.HIDE_CHART_LOADER
    }
}