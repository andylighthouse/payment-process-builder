import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

import styles from "./styles"

const ICON_COLOR = "white"
const ICON_SIZE = 30

const Footer = ({ onPress, name, close }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {close ? (
      <MaterialCommunityIcons name={"close"} color={"black"} size={ICON_SIZE} />
    ) : (
      <MaterialCommunityIcons name={name} color={ICON_COLOR} size={ICON_SIZE} />
    )}
  </TouchableOpacity>
)
export default Footer
