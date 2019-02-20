import React, { Component } from "react"
import { StatusBar } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { PaymentProcess } from "../components/PaymentProcess"
import { PaymentProcessBuilder } from "../components/Text"
import { Header } from "../components/Header"

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
