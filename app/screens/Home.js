import React, { Component } from "react"
import { StatusBar } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"

class Home extends Component {
  constructor() {
    super()

    this.state = {}
  }

  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource", {
      title: "Choose a funding source",
      tree: this.state,
    })
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
