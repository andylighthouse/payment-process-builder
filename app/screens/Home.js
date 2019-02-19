import React, { Component } from "react"
import { StatusBar } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      authWith: {},
    }
  }

  handleChange = authWith => {
    this.setState({ authWith: authWith })
  }

  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource", {
      data: { ...this.state.authWith },
      onChange: this.handleChange,
    })
  }

  render() {
    console.log("DATA" + JSON.stringify(this.state))
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Button onPress={this.handleOnPress} text={"Build"} />
      </Container>
    )
  }
}

export default connect()(Home)
