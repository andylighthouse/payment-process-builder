import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"

class Account extends Component {
  handleTextChange = id => {
    let onChange = this.props.navigation.getParam("onChange")
    let data = this.props.navigation.getParam("data")
    onChange({ ...data, id: id })
    this.props.navigation.navigate("Home")
  }
  render() {
    console.log(JSON.stringify(this.props.navigation.getParam("data")))
    return (
      <View>
        <Text>Enter account id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
      </View>
    )
  }
}

export default connect()(Account)
