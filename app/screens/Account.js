import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"

class Account extends Component {
  handleTextChange = id => {
    onChange({ ...data, id: id })
  }
  render() {
    return (
      <View>
        <Text>Enter account id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
      </View>
    )
  }
}

export default connect()(Account)
