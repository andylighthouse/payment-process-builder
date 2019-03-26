import React, { Component } from "react"
import { AuthSession } from "expo"
import { Button, View } from "react-native"
import jwtDecoder from "jwt-decode"
import { connect } from "react-redux"
import { SecureStore } from "expo"

import { saveUser } from "../actions/user"
import { loadTransactions } from "../actions/transaction"
import { sendPushToken } from "../actions/pushNotification"
import store from "../config/store"

function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&")
  )
}

class Signin extends Component {
  loginWithGoogle = async () => {
    const redirectUrl = AuthSession.getRedirectUrl()
    let authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth` +
      toQueryString({
        client_id: GOOGLE_CLIENT_ID,
        response_type: "token id_token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
        nonce: "nonce",
      })

    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    })

    if (result.type === "success") {
      //need to make and check nonce
      SecureStore.setItemAsync("idToken", result.params.id_token)
      SecureStore.setItemAsync("accessToken", result.params.access_token)
      const user = jwtDecoder(result.params.id_token)

      this.props.dispatch(sendPushToken())
      this.props.dispatch(saveUser(user))
      this.props.dispatch(loadTransactions())
      this.props.navigation.navigate("App")
    }
  }

  render() {
    return (
      <View>
        <Button title="Login with Google" onPress={this.loginWithGoogle} />
      </View>
    )
  }
}

export default connect()(Signin)
