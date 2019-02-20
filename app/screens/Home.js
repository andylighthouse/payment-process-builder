import React, { Component } from "react"
import { StatusBar, ScrollView, Button, View, Text } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
import JSONTree from "react-native-json-tree"

import { Container } from "../components/Container"
import { PaymentProcess } from "../components/PaymentProcess"
import { PaymentProcessBuilder } from "../components/Text"
import { Header } from "../components/Header"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      data: {},
      showJSON: false,
    }
  }

  handleChange = data => {
    this.setState({ data: data })
  }

  handleOnPress = () => {
    this.setState({ showJSON: !this.state.showJSON })
  }

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <ScrollView>
          <Header />
          <PaymentProcessBuilder />
          <PaymentProcess {...this.state.data} onChange={this.handleChange} />
          <Button
            onPress={this.handleOnPress}
            title={this.state.showJSON ? "Hide JSON" : "Show JSON"}
          />
          {this.state.showJSON && <Card>{<JSONTree data={this.state.data} />}</Card>}
        </ScrollView>
      </Container>
    )
  }
}

export default connect()(Home)
