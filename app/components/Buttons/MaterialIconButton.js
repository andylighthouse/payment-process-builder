import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

const ICON_COLOR = "white"
const ICON_SIZE = 30

const MaterialIconButton = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialIcons name={name} color={ICON_COLOR} size={ICON_SIZE} />
  </TouchableOpacity>
)
export default MaterialIconButton
