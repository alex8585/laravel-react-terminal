import * as types from '../types';


export function fetchSymbols() {
    return {
        type: types.REQUEST_SYMBOLS
    }

}

export function showSymbolsLoader() {
    return {
        type:types.SHOW_SYMBOLS_LOADER
    }
}

export function hideSymbolsLoader() {
    return {
        type:types.HIDE_SYMBOLS_LOADER
    }
}


