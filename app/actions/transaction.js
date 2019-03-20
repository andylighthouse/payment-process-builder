import { call, put } from "redux-saga/effects"
import { SecureStore } from "expo"

export const TRANSACTION_RESULT = "TRANSACTION_RESULT"
export const TRANSACTION_ERROR = "TRANSACTION_ERROR"
export const LOADFROMAPI = "LOADFROMAPI"

export const loadFromApi = () => ({
  type: LOADFROMAPI,
})

export function* fetchData() {
  const token = yield SecureStore.getItemAsync("idToken")

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
      yield put({ type: TRANSACTION_RESULT, result: response })
    } else {
      yield put({ type: TRANSACTION_ERROR, error: "Error" })
    }
  } catch (e) {
    yield put({ type: TRANSACTION_ERROR, error: e.message })
  }
}
