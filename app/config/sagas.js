import { takeLatest } from "redux-saga/effects"

import { LOGOUT_USER, logoutUserRequest } from "../actions/user"
import { LOADTRANSACTIONS, fetchData } from "../actions/transaction"
import { SEND_PUSH_TOKEN, getToken } from "../actions/pushNotification"

export default function* rootSaga() {
  yield takeLatest(LOADTRANSACTIONS, fetchData)
  yield takeLatest(LOGOUT_USER, logoutUserRequest)
  yield takeLatest(SEND_PUSH_TOKEN, getToken)
}
