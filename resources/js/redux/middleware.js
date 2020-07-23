import { CREATE_POST } from "./types"

import * as types from './types';
import {createPost, showAlert} from './actions';
const forbidden = ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleware({dispatch}) {
    return function(next) {
        return function (action) {
            if(action.type == types.CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w));
                if(found.length) {
                    return dispatch(showAlert('spam'))
                }
            }
            return next(action)
        }
    } 
}