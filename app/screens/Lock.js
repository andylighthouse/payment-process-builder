import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"

class Lock extends Component {
  handleOnPress = id => {
    let tree = this.props.navigation.getParam("tree")
    let currentNode = this.props.navigation.getParam("currentNode")

    currentNode = { _type: "Lock", id: id }
    tree = { auth_with: { _type: "Lock", id: id } }

    this.props.navigation.navigate("FundingSource", { currentNode, tree })
  }

  handleTextChange = id => {
    this.handleOnPress(id)
  }
  render() {
    return (
      <View>
        <Text>Enter Lock id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
        <Button onPress={this.handleOnPress} text={"Choose Funding Source"} />
      </View>
    )
  }
}

export default connect()(Lock)
