import React, { Component } from "react"
import { Text, StatusBar, View } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"

class Home extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource", { title: "Choose a funding source" })
  }

  render() {
    const { jsonBuild, isBuilding } = this.props

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        {/* <Text>{JSON.stringify(jsonBuild)}</Text> */}
        <Button onPress={this.handleOnPress} text={"Build"} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const jsonBuild = state.build.build
  const isBuilding = state.build.isBuilding
  return {
    jsonBuild,
    isBuilding,
  }
}

export default connect(mapStateToProps)(Home)
