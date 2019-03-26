import { Permissions, Notifications, SecureStore } from "expo"
import { call } from "redux-saga/effects"
import createIconSetFromFontello from "@expo/vector-icons/createIconSetFromFontello"

export const SEND_PUSH_TOKEN = "SEND_PUSH_TOKEN"

export const sendPushToken = () => ({
  type: SEND_PUSH_TOKEN,
})

export function* getToken() {
  const { status: existingStatus } = yield Permissions.getAsync(Permissions.NOTIFICATIONS)
  let finalStatus = existingStatus

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = yield Permissions.askAsync(Permissions.NOTIFICATIONS)
    finalStatus = status
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return
  }

  // Get the token that uniquely identifies this device
  let pushToken = yield Notifications.getExpoPushTokenAsync()

  const token = yield SecureStore.getItemAsync("idToken")

  const callApi = url =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        push_token: { token: pushToken },
      }),
    }).then(response => response)

  const response = yield call(callApi, "https://lftp.staging.paywith.ca/api/push_tokens")

  if (response.status === 201) {
    console.log(response.status)
  }
}
