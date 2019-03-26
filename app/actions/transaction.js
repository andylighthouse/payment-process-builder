import { call, put } from "redux-saga/effects"
import { SecureStore } from "expo"

export const TRANSACTION_RESULT = "TRANSACTION_RESULT"
export const TRANSACTION_ERROR = "TRANSACTION_ERROR"
export const LOADTRANSACTIONS = "LOADTRANSACTIONS"

export const loadTransactions = () => ({
  type: LOADTRANSACTIONS,
})

export function* fetchData() {
  const token = yield SecureStore.getItemAsync("idToken")

  const callApi = url =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json())

  const response = yield call(callApi, "https://lftp.staging.paywith.ca/api/transactions")
  console.log("RESPONSE")
  console.log(response)
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
