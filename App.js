import App from "./app/index"
import { AuthSession } from "expo"
import React from "react"
import { Alert, Button, StyleSheet, Text, View } from "react-native"

/*
  You need to swap out the Auth0 client id and domain with
  the one from your Auth0 client.

  In your Auth0 clent, you need to also add a url to your authorized redirect urls.
  For this application, I added https://auth.expo.io/@community/auth0-example because
  I am signed in as the "community" account on Expo and the slug for this app is "auth0-example".
  You can open this app in the Expo client and check your logs for "Redirect URL (add this to Auth0)"
  to see what URL to add if the above is confusing.

  If you use Facebook through Auth0, be sure to follow this guide: https://auth0.com/docs/connections/social/facebook
*/
const auth0ClientId = "fZgAuHmbNZ0A3PCPwf_V_g8jLeZd1zmG"
const auth0Domain = "dev-nsg9g39g.auth0.com"

function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&")
  )
}

class Auth0LoginContainer extends React.Component {
  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl()
    let authUrl =
      `${auth0Domain}/authorize` +
      toQueryString({
        client_id: auth0ClientId,
        response_type: "token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
      })
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`)
    console.log(`AuthURL is:  ${authUrl}`)

    const result = await AuthSession.startAsync({
      authUrl: `https://${authUrl}`,
    })
    console.log(result.type)
    if (result.type === "success") {
      console.log(result)
      let token = result.params.access_token
      this.props.setToken(token)
      this.props.navigation.navigate("Next Screen")
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Example: Auth0 login</Text>
        <Button title="Login with Auth0" onPress={this._loginWithAuth0} />
        <Text style={styles.title}>Example: Auth0 force Twitter</Text>
        <Button title="Login with Auth0-Twitter" onPress={this._loginWithAuth0Twitter} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
})

export default () => (
  <Auth0LoginContainer>
    <App />
  </Auth0LoginContainer>
)
