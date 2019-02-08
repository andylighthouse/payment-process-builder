import React, { Component } from "react"
import { Text, StatusBar } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"

import { getData } from "../actions/button"

class Home extends Component {
  handleOnPress = () => {
    console.log("button pressed")
    this.props.dispatch(getData())
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text>Under Construction: Rain City Rewards</Text>
        <Button onPress={this.handleOnPress} />
      </Container>
    )
  }
}

export default connect()(Home)
