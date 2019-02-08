import { takeEvery, call, put } from "redux-saga/effects"

import { GET_DATA, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/button"

const getDataUrl = () => fetch(`http://localhost:3000/users/6/accounts.json`)

function* fetchData() {
  const response = yield call(getDataUrl)
  const result = yield response.json()

  try {
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error })
    } else {
      yield put({ type: CONVERSION_RESULT, result: result })
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_DATA, fetchData)
}
