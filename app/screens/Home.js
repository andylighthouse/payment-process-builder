import React, { Component } from "react"
import { StatusBar, View, Text } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
import JSONTree from "react-native-json-tree"

import { Container } from "../components/Container"
import { PaymentProcess } from "../components/PaymentProcess"
import { Header, Options } from "../components/Header"
import { MaterialIconButton } from "../components/Buttons"
import { MaterialCommunityIconsButton } from "../components/Buttons"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      data: {},
      showJSON: false,
      favorite: [],
    }
  }

  handleChange = data => {
    this.setState({ data: data })
  }

  toggleDisplayJSON = () => {
    this.setState({ showJSON: !this.state.showJSON })
  }

  handleOnReset = () => {
    this.setState({ data: {} })
  }

  handleAddFavorite = () => {}

  handleDone = () => {}

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header />

          <Options>
            <MaterialIconButton onPress={this.handleDone} name={"build"} />
            <MaterialIconButton onPress={this.handleAddFavorite} name={"favorite"} />
            <MaterialCommunityIconsButton
              onPress={this.toggleDisplayJSON}
              name={"json"}
              close={this.state.showJSON}
            />
            <MaterialCommunityIconsButton onPress={this.handleOnReset} name={"restart"} />
          </Options>

          <PaymentProcess {...this.state.data} onChange={this.handleChange} />

          {this.state.showJSON && <Card>{<JSONTree data={this.state.data} />}</Card>}
        </Container>
      </View>
    )
  }
}

export default connect()(Home)
