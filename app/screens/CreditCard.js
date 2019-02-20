import React from "react"
import { Text, TextInput, View } from "react-native"

export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "CreditCard", id: id })
  }

  return (
    <View>
      <Text>Enter CreditCard Id</Text>
      <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
    </View>
  )
}
