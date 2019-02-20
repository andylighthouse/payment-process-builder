import React from "react"
import { Text, TextInput, View } from "react-native"
import { Card } from "react-native-elements"

export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "CreditCard", id: id })
  }

  return (
    <Card>
      <Text>Enter CreditCard Id</Text>
      <TextInput style={{ backgroundColor: "grey" }} onChangeText={this.handleTextChange} />
    </Card>
  )
}
