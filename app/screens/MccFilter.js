import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"
import { saveMccFilterId } from "../actions/build"

class MccFilter extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource")
  }

  handleTextChange = id => {
    this.props.dispatch(saveMccFilterId(id))
  }
  render() {
    return (
      <View>
        <Text>Enter mcc_group id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
        <Button onPress={this.handleOnPress} text={"Choose Funding Source"} />
      </View>
    )
  }
}

export default connect()(MccFilter)
