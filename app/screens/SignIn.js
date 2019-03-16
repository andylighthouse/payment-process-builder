import React from "react"
import { AuthSession } from "expo"
import { Button, StyleSheet, Text, View } from "react-native"
import jwtDecoder from "jwt-decode"
import { connect } from "react-redux"
import { SecureStore } from "expo"

import { saveUser } from "../actions/user"
import { loadFromApi } from "../actions/user"
const auth0ClientId = "fZgAuHmbNZ0A3PCPwf_V_g8jLeZd1zmG"
const auth0Domain = "https://dev-nsg9g39g.auth0.com"

function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&")
  )
}

class Auth0Provider extends React.Component {
  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl()
    let authUrl =
      `${auth0Domain}/authorize` +
      toQueryString({
        client_id: auth0ClientId,
        response_type: "token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
        audience: "https://dev-nsg9g39g.auth0.com/api/v2/",
      })
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`)
    console.log(`AuthURL is:  ${authUrl}`)

    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    })

    if (result.type === "success") {
      SecureStore.setItemAsync("accessToken", result.params.access_token)
      // const email = jwtDecoder(result.params.id_token).email
      // this.props.dispatch(saveUser(email))
      this.props.dispatch(loadFromApi())
      this.props.navigation.navigate("App")
    }
  }

  render() {
    return (
      <View>
        <Button title="Login with Auth0" onPress={this._loginWithAuth0} />
      </View>
    )
  }
}

export default connect()(Auth0Provider)
