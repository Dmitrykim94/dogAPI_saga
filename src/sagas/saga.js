import { put, takeEvery, call } from 'redux-saga/effects'
import { requestData, requestDataSuccess, requestDataError } from '../actions/actions'
export function* watchFetchData() {
    yield takeEvery('FETCHED_DATA', fetchDataAsync);
}

function* fetchDataAsync() {
    try {
        yield put(requestData());
        const data = yield call(() => {
            
            return fetch("https://dog.ceo/api/breeds/image/random")
                    .then(res => res.json())
        }
        );
        yield put(requestDataSuccess(data));
    } catch (error) {
        yield put(requestDataError());
    }
}
