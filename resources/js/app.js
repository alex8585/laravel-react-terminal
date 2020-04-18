import ReactDOM from 'react-dom';
import React from 'react';
import Terminal from './Terminal/index.js';
import { Provider } from 'mobx-react';
import stores from './store';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


require('./bootstrap');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./Terminal/index.js');





if (document.querySelector('#terminal')) {

    ReactDOM.render(
        <Provider stores={stores}>
            <Terminal />
        </Provider>,
        document.querySelector('#terminal')
    );


}
