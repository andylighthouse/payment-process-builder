import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"

import { Button } from "../components/Buttons"

class Lock extends Component {
  handleTextChange = id => {
    let onChange = this.props.navigation.getParam("onChange")
    let data = this.props.navigation.getParam("data")
    onChange({ ...data, id: id })
    this.props.navigation.navigate("FundingSource", {
      authWith: { ...data, id: id },
      onChange: onChange,
    })
  }
  render() {
    console.log("LOCK" + JSON.stringify(this.props.navigation.getParam("data")))
    // console.log("onChange" + this.props.navigation.getParam("onChange"))
    return (
      <View>
        <Text>Enter Lock id</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
      </View>
    )
  }
}

export default connect()(Lock)
