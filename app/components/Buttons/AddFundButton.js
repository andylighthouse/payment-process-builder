import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

import styles from "./styles"

const colors = EStyleSheet.create({
  $orange: "$primaryOrange",
})

const AddFundButton = ({ onPress, text }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <MaterialIcons name={"add"} size={20} color={colors.$orange} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default AddFundButton
