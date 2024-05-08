import { all, call, put, takeLatest } from "redux-saga/effects";
import { delete_party, get_party, post_party } from "../use/api";
import { DELETE_Party_ERROR, DELETE_Party_PENDING, DELETE_Party_SUCCESS, GET_Party_ERROR, GET_Party_PENDING, GET_Party_SUCCESS, POST_Party_ERROR, POST_Party_PENDING, POST_Party_SUCCESS } from "../use/action";


function* handle_post_party(action) {
    // console.log(action, "action from handle post party");
    try {
        let { data, status } = yield call(post_party, action);
        // console.log(data, status, "data and status from handle post party");
        if (status == 201 || status == 200) {
            yield put({ type: POST_Party_SUCCESS, data })
        } else {
            yield put({ type: POST_Party_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: POST_Party_ERROR, data: error })
    }
}

function* handle_get_party(action) {
    // console.log(action, "action from handle get party");
    try {
        let { data, status } = yield call(get_party, action);
        // console.log(data, status, "data and status from handle get party");
        if (status == 200) {
            yield put({ type: GET_Party_SUCCESS, data })
        } else {
            yield put({ type: GET_Party_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: GET_Party_ERROR, data: error })
    }
}

function* handle_delete_party(action) {
    console.log(action, "action from handle delete party");
    try {
        let { data, status } = yield call(delete_party, action);
        console.log(data, status, "data and status from handle delete party");
        if (status == 200) {
            yield put({ type: DELETE_Party_SUCCESS, data })
        } else {
            yield put({ type: DELETE_Party_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_Party_ERROR, data: error })
    }
}

function* handle_post_party_saga() {
    yield takeLatest(POST_Party_PENDING, handle_post_party);
}

function* handle_get_party_saga() {
    yield takeLatest(GET_Party_PENDING, handle_get_party)
}

function* handle_delete_party_saga() {
    yield takeLatest(DELETE_Party_PENDING, handle_delete_party)
}

function* rootSaga() {
    yield all([handle_post_party_saga(), handle_get_party_saga(), handle_delete_party_saga()])
}

export default (rootSaga)