import React from "react"
import { View, Text, TouchableHighlight } from "react-native"

const ListItem = ({ onPress, text }) => (
  <TouchableHighlight onPress={onPress}>
    <View>
      <Text>{text}</Text>
    </View>
  </TouchableHighlight>
)

export default ListItem
