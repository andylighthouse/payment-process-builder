import React, { Component } from "react"
import { StatusBar, View, Alert } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
import JSONTree from "react-native-json-tree"

import { Container } from "../components/Container"
import { PaymentProcess } from "../components/PaymentProcess"
import { Header, Options } from "../components/Header"
import { MaterialIconButton } from "../components/Buttons"
import { MaterialCommunityIconsButton } from "../components/Buttons"

//actions
import { addFavorite } from "../actions/favorite"

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

  toggleDisplayJSON = () => {
    this.setState({ showJSON: !this.state.showJSON })
  }

  handleOnReset = () => {
    Alert.alert("Reset", "Do you want to restart?", [
      { text: "cancel" },
      { text: "OK", onPress: () => this.setState({ data: {} }) },
    ])
  }

  handleAddFavorite = () => {
    Alert.alert("Favorite", "Do you want to add this process to your favorites?", [
      { text: "cancel" },
      { text: "OK", onPress: () => this.props.dispatch(addFavorite(this.state.data)) },
    ])
  }

  handleDone = () => {
    Alert.alert("Build", "Do you want to build this payment process?", [
      { text: "cancel" },
      { text: "OK", onPress: () => null },
    ])
  }

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header />

          <Options text={"Payment Process Builder"}>
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
