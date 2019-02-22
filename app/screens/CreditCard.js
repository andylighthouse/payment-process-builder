import React from "react"
import { TextInput, View } from "react-native"
import { Card } from "react-native-elements"

import { BodyText } from "../components/Text"

export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "CreditCard", id: id })
  }

  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <BodyText text={"Enter CreditCard Id"} />
      <TextInput
        style={{ backgroundColor: "#F0F0F0" }}
        keyboardType="numeric"
        onChangeText={this.handleTextChange}
      />
    </Card>
  )
}
