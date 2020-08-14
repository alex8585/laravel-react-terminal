import * as types from '../types';


export function fetchBook(currentSymbol) {
    return {
        type: types.REQUEST_BOOK,
        payload:currentSymbol
    }

}

export function showBookLoader() {
    return {
        type:types.SHOW_BOOK_LOADER
    }
}

export function hideBookLoader() {
    return {
        type:types.HIDE_BOOK_LOADER
    }
}


