import * as types from '../types';




export function fetchSymbols(oldSymbolsArr) {
    return {
        type: types.REQUEST_SYMBOLS,
        oldSymbolsArr:oldSymbolsArr
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


