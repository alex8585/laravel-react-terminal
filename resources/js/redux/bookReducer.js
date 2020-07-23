import * as types from "./types";

const initialState = {
    bookArr: []
}

export const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_BOOK:
            return {...state, bookArr: action.payload }
        default: return state;
    }
    
}