import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedApp, store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'

// Container component
ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);

