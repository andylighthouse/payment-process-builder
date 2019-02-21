import React from "react"
import { Text, TextInput, View } from "react-native"
import { Card } from "react-native-elements"

export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "Account", id: id })
  }

  return (
    <Card>
      <Text>Enter account id</Text>
      <TextInput
        style={{ backgroundColor: "grey" }}
        keyboardType="numeric"
        onChangeText={this.handleTextChange}
      />
    </Card>
  )
}
