import{takeEvery, put, call} from 'redux-saga/effects'
import  * as types  from './types';
import { showLoader,hideLoader,showAlert } from './actions';

export function* sagaWatcher() {
    yield takeEvery(types.REQUEST_BOOK, sagaGetbook);
}

function* sagaGetbook () {
    try {
        yield put(showLoader());
        const response = yield axios.get('/getbook');
        //console.log(response.data);
        yield put({
            type: types.FETCH_BOOK,
            payload:response.data
        })
        yield put(hideLoader());
    } catch(e) {
        console.log(e);
        yield put(showAlert(e.toString()));
        yield put(hideLoader());
    }
    
}





/*
async function fetchPosts() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
    return  await responce.json()
}*/