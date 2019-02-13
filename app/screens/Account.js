import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"
import { saveAccountId } from "../actions/build"

class Account extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate("Home")
  }

  handleTextChange = id => {
    this.props.dispatch(saveAccountId(id))
  }
  render() {
    return (
      <View>
        <Text>Enter account id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
        <Button text="Done" onPress={this.handleOnPress} />
      </View>
    )
  }
}

export default connect()(Account)
