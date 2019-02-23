import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import styles from "./styles"

const AddFundButton = ({ onPress, text }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <MaterialIcons name={"add"} color={"$primaryOrange"} size={25} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default AddFundButton
