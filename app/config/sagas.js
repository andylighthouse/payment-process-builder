import { takeLatest } from "redux-saga/effects"

import { LOGOUT_USER, logoutUserRequest } from "../actions/user"
import { LOADFROMAPI, fetchData } from "../actions/transaction"

export default function* rootSaga() {
  yield takeLatest(LOADFROMAPI, fetchData)
  yield takeLatest(LOGOUT_USER, logoutUserRequest)
}
