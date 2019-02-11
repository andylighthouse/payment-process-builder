import React, { Component } from "react"
import { Text, StatusBar } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"
import { Header } from "../components/Header"

class Home extends Component {
  handleOnPress = () => {
    console.log("button pressed")
    this.props.navigation.navigate("FundingSource", { title: "Choose a funding source" })
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Button onPress={this.handleOnPress} text={"Build"} />
      </Container>
    )
  }
}

export default connect()(Home)
