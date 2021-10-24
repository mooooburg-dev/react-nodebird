import { all, delay, fork, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

// const l = logIn({
//   type: "LOG_IN_REQUEST",
//   data: { id: "drawyourmind@naver.com" },
// });
// l.next();
// l.next();

function* logIn(action) {
  try {
    console.log("saga logIn");
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({ type: "LOG_IN_SUCCESS", data: action.data });
  } catch (err) {
    yield put({ type: "LOG_IN_FAILURE", data: err.response.data });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({ type: "LOG_OUT_SUCCESS" });
  } catch (err) {
    yield put({ type: "LOG_OUT_FAILURE", data: err.response.data });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
