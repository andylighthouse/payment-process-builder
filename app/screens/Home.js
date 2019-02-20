import React, { Component } from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import { StatusBar, ScrollView, Text, View, Button, ListItem } from "react-native"
import { connect } from "react-redux"
import { Card, Icon } from "react-native-elements"

import { Container } from "../components/Container"
import { PaymentProcess } from "../components/PaymentProcess"
import { PaymentProcessBuilder } from "../components/Text"
import { Header } from "../components/Header"

const styles = EStyleSheet.create({
  $orange: "$primaryOrange",
})

class Home extends Component {
  constructor() {
    super()

    this.state = {
      data: {},
    }
  }

  handleChange = data => {
    this.setState({ data: data })
  }

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <PaymentProcessBuilder />
        <PaymentProcess {...this.state.data} onChange={this.handleChange} />
      </Container>
    )
  }
}

export default connect()(Home)
