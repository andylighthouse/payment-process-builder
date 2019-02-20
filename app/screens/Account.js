import React from "react"
import { Text, TextInput, View } from "react-native"

export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "Account", id: id })
  }

  return (
    <View>
      <Text>Enter account id</Text>
      <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
    </View>
  )
}
