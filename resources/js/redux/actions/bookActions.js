import * as types from '../types';


export function fetchBook() {
    return {
        type: types.REQUEST_BOOK
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


