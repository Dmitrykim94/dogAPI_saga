import {watchFetchData} from '../sagas/saga'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { connect } from 'react-redux';
import reducer from '../reducer/reducer';
import App from '../App'
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchData);

export const ConnectedApp = connect((state) => {
    // console.log(state);
    return state;
})(App);