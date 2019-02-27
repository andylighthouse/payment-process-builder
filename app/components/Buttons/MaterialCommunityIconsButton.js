import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

const ICON_COLOR = "white"
const ICON_SIZE = 25

const MaterialCommunityIconsButton = ({ onPress, name, close }) => (
  <TouchableOpacity onPress={onPress}>
    {close ? (
      <MaterialCommunityIcons name={"close"} color={ICON_COLOR} size={ICON_SIZE} />
    ) : (
      <MaterialCommunityIcons name={name} color={ICON_COLOR} size={ICON_SIZE} />
    )}
  </TouchableOpacity>
)
export default MaterialCommunityIconsButton
