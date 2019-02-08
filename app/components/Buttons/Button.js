import React from "react"
import { TouchableOpacity, Text } from "react-native"

import styles from "./styles"

const Button = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text>Get Data</Text>
  </TouchableOpacity>
)

export default Button
