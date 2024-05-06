import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { all } from  'redux-saga/effects';
import { get_party, post_party } from '../use/api';
import { GET_Party_ERROR, GET_Party_SUCCESS, POST_Party_ERROR, POST_Party_PENDING, POST_Party_SUCCESS } from '../use/action';

function* handle_post_party(action) {
    console.log(action, "action from handle post user");
    try {
        let { data, status } = yield call(post_party, action);
        console.log(data, status, "data and status from handle post user");
        if (status == 201 || status == 200) {
            yield put({ type: POST_Party_SUCCESS, data });
        } else {
            yield put({ type: POST_Party_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: POST_Party_ERROR, error })
    }
}

function* handle_get_party(action) {
    console.log(action, "action from handle get user");
    try {
        let { data, status } = yield call(get_party, action);
        console.log(data, status, "data and status from handle get user");
        if (status == 200) {
            yield put({ type: GET_Party_SUCCESS, data });
        }
        else {
            yield put({ type: GET_Party_ERROR, data });
        }
    }
    catch (error) {
        yield put({ type: GET_Party_ERROR, data:error });
    }
}

function* handle_post_party_saga() {
    yield takeLatest(POST_Party_PENDING, handle_post_party)
}

function* handle_get_party_saga() {
    yield takeLatest(POST_Party_PENDING, handle_get_party)
}

function* rootSaga() {
    yield all([handle_post_party_saga() ,handle_get_party_saga()])
}

export default rootSaga

