import{takeEvery, put, call} from 'redux-saga/effects'
import  * as types  from './types';

import { showAlert } from './actions/terminalActions';
import { showBookLoader,hideBookLoader } from './actions/bookActions';
import { statShowLoader,statsHideLoader } from './actions/statisticsActions';
import { showSymbolsLoader,hideSymbolsLoader } from './actions/symbolsActions';

export function* sagaWatcher() {
    yield takeEvery(types.REQUEST_BOOK, sagaGetbook);
    yield takeEvery(types.REQUEST_STATISTIC, sagaGetStatistics);
    yield takeEvery(types.REQUEST_SYMBOLS, sagaGetSymbols);
}

function*  sagaGetSymbols(params) {
    try {
        yield put(showSymbolsLoader());
        const response = yield axios.get('/getsymbols');
        yield put({
            type: types.FETCH_SYMBOLS,
            payload:response.data
        })
        yield put(hideSymbolsLoader());
    } catch(e) {
        console.log(e);
        yield put(showAlert(e.toString() + ' "getsymbols"'));
        yield put(hideSymbolsLoader());
    }
}

function* sagaGetStatistics(params) {
    let sumbol = params.payload;
    try {
        yield put(statShowLoader());
        const response = yield axios.get('/getstatistics',{
            params: {sumbol} 
        });
        yield put({
            type: types.FETCH_STATISTIC,
            payload:response.data
        })
        yield put(statsHideLoader());
    } catch(e) {
        console.log(e);
        yield put(showAlert(e.toString() + ' "getstatistics"'));
        yield put(statsHideLoader());
    }
}


function* sagaGetbook () {
    try {
        yield put(showBookLoader());
        const response = yield axios.get('/getbook');
        yield put({
            type: types.FETCH_BOOK,
            payload:response.data
        })
        yield put(hideBookLoader());
    } catch(e) {
        console.log(e);
        yield put(showAlert(e.toString() + ' "getbook"'));
        yield put(hideBookLoader());
    }
    
}


