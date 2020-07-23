import * as types from './types';


export function fetchBook() {
    return {
        type: types.REQUEST_BOOK
    }

}


export function showLoader() {
    return {
        type:types.SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type:types.HIDE_LOADER
    }
}



export function showAlert(text) {
    return dispatch => {
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