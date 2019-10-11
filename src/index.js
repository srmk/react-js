import React from 'react';
import ReactDOM from 'react-dom';
import App from './app-container/app_container';
import * as serviceWorker from './serviceWorker';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import { store, history } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
