import * as types from '../types';

export function showAlert(text) {
    return dispatch => {
        console.log(types.SHOW_ALERT);
        dispatch({
            type:types.SHOW_ALERT,
            payload:text
        })

        setTimeout(()=>{
            dispatch(hideAlert())
        },2000)

    }
}

export function hideAlert() {
    return {
        type:types.HIDE_ALERT
    }
}

export function setCurrentSymbol(symbol) {
    return {
        type: types.SET_SYMBOL,
        payload:symbol
    }
}