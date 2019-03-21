import React from "react"
import { Alert, Text, Button } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Header, Options } from "../components/Header"

import { logoutUser } from "../actions/user"

const handleLogout = (logoutUser, navigation) => {
  Alert.alert("Logout", "Do you want to logout?", [
    { text: "cancel" },
    {
      text: "OK",
      onPress: () => {
        logoutUser()
        navigation.navigate("Auth")
      },
    },
  ])
}

const Option = ({ email, logoutUser, navigation }) => {
  return (
    <Container>
      <Header />
      <Options text={"Options"} />
      <Text>logged in as: {email}</Text>
      <Button title="Logout" onPress={() => handleLogout(logoutUser, navigation)} />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    email: state.user.user.email,
  }
}

const bindActionsToDispatch = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(
  mapStateToProps,
  bindActionsToDispatch,
)(Option)
