import { takeLatest, call, put } from "redux-saga/effects"
import { LOADFROMAPI, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/user"

const getDataUrl = url => fetch(url).then(response => response.json())

function* fetchData() {
  const response = yield call(getDataUrl, "http://localhost:8000/api/transactions")

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
