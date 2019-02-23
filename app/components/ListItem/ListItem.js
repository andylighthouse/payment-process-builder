import React from "react"
import { View, Text, TouchableHighlight } from "react-native"

import styles from "./styles"

const ListItem = ({ onPress, text }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
)

export default ListItem
