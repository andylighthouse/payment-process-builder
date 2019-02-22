import React from "react"
import { TextInput } from "react-native"
import { Card } from "react-native-elements"

import { BodyText } from "../components/Text"
export default ({ id, onChange }) => {
  handleTextChange = id => {
    onChange({ _type: "Account", id: id })
  }

  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <BodyText text={"Enter account id:"} />
      <TextInput
        style={{ backgroundColor: "grey" }}
        keyboardType="numeric"
        onChangeText={this.handleTextChange}
      />
    </Card>
  )
}
