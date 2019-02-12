import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"
import { saveCreditCardId } from "../actions/build"

class CreditCard extends Component {
  handleOnPress = () => {
    this.props.navigation.popToTop()
  }

  handleTextChange = id => {
    this.props.dispatch(saveCreditCardId(id))
  }
  render() {
    return (
      <View>
        <Text>Enter credit card id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
        <Button text="Done" onPress={this.handleOnPress} />
      </View>
    )
  }
}

export default connect()(CreditCard)
