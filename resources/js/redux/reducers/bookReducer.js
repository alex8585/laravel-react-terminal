import * as types from "../types";

const initialState = {
    bookArr: [],
    loading: true
}

export const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_BOOK_LOADER:
            return {...state, loading:true}
        case types.HIDE_BOOK_LOADER: 
            return {...state, loading:false}
        case types.FETCH_BOOK:
            return {...state, bookArr: action.payload }
        default: return state;
    }
    
}