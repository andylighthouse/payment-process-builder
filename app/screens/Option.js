import React from "react"
import { StatusBar, View, Text } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Header, Options } from "../components/Header"

const Option = ({ email }) => {
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
