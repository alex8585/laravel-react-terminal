import ReactDOM from 'react-dom';
import React from 'react';
import Terminal from './components/Terminal/index.js';
import {compose, createStore, applyMiddleware} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {forbiddenWordsMiddleware} from './redux/middleware';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './redux/sagas';


const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher);



require('./bootstrap');


const app = (
    <Provider store={store}>
        <Terminal />
    </Provider>
)

if (document.querySelector('#terminal')) {
    ReactDOM.render(
        app,
        document.querySelector('#terminal')
    );
}
