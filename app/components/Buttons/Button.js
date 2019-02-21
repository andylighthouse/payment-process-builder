import React from "react"
import { TouchableOpacity, Text } from "react-native"

import styles from "./styles"

const Button = ({ onPress, text }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default Button
