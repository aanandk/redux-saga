import { all, fork } from 'redux-saga/effects';
import watchUsers from "./userSaga";

export default function* rootSaga() {
    yield all([
        fork(watchUsers),
    ])
    // yield all([
    //     watchUsers()
    // ])
}