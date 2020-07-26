// import { HIDE_BOOK_LOADER } from "../types"

// import * as types from '../types';
// import {createPost} from '../actions/bookActions.js';
// import { showAlert } from '../actions/terminalActions';
// const forbidden = ['fuck', 'spam', 'php']

// export function forbiddenWordsMiddleware({dispatch}) {
//     return function(next) {
//         return function (action) {
//             if(action.type == types.HIDE_BOOK_LOADER) {
//                 const found = forbidden.filter(w => action.payload.title.includes(w));
//                 if(found.length) {
//                     return dispatch(showAlert('spam'))
//                 }
//             }
//             return next(action)
//         }
//     } 
// }