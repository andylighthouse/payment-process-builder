import { SecureStore } from "expo"
import { call, put } from "redux-saga/effects"

export const SAVE_USER = "SAVE_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const saveUser = user => ({
  type: SAVE_USER,
  user,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

export function* logoutUserRequest(action) {
  const token = yield SecureStore.getItemAsync("accessToken")

  const logoutUrl = url => fetch(url).then(response => response.json())

  const response = yield call(
    logoutUrl,
    `https://accounts.google.com/o/oauth2/revoke?token=${token}`,
  )

  try {
    if (response) {
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }
}
