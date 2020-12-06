import { all, fork } from 'redux-saga/effects';
import countrySaga from './country';

export default function* rootSaga() {
    yield all([
        fork(countrySaga),
    ])
}