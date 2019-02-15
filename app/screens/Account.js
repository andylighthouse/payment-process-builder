import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"

class Account extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate("Home")
  }

  handleTextChange = id => {
    this.handleOnPress(id)
  }
  render() {
    let tree = this.props.navigation.getParam("tree")
    let currentNode = this.props.navigation.getParam("currentNode")
    console.log("Account   " + JSON.stringify(currentNode))
    console.log("Account   " + JSON.stringify(tree))
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
