import { takeLatest, call, put } from "redux-saga/effects"
import { SecureStore } from "expo"

import { LOADFROMAPI, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/user"

function* fetchData() {
  const token = yield SecureStore.getItemAsync("accessToken")

  const callApi = ({ url, token }) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json())

  const response = yield call(callApi, {
    url: "http://localhost:8000/api/transactions",
    token: token,
  })

  try {
    if (response) {
      yield put({ type: CONVERSION_RESULT, result: response })
    } else {
      yield put({ type: CONVERSION_ERROR, error: "Error" })
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }
}

export default function* rootSaga() {
  yield takeLatest(LOADFROMAPI, fetchData)
}
