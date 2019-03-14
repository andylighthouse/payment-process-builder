import React from "react"
import { StatusBar, View, Text } from "react-native"
import { connect } from "react-redux"
import JSONTree from "react-native-json-tree"
import { Card } from "react-native-elements"
import { SecureStore } from "expo"

import { Container } from "../components/Container"
import { Header, Options } from "../components/Header"

const Option = ({ email }) => {
  SecureStore.getItemAsync("accessToken").then(token => console.log(token))
  return (
    <Container>
      <Header />
      <Options text={"Option"} />
      <Text>logged in as: {email}</Text>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
  }
}

export default connect(mapStateToProps)(Option)
