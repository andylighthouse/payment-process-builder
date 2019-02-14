import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"
import { saveLockId } from "../actions/build"

class MccFilter extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource")
  }

  handleTextChange = id => {
    this.props.dispatch(saveLockId(id))
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

export default connect()(MccFilter)
