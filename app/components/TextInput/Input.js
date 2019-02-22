import React from "react"
import { TextInput } from "react-native"

import styles from "./styles"
const Input = ({ keyboardType, onChangeText }) => (
  <TextInput style={styles.input} keyboardType={keyboardType} onChangeText={onChangeText} />
)

export default Input
