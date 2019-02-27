import React from "react"
import { MaterialIcons } from "@expo/vector-icons"

const ICON_SIZE = 25
export default ({ name, size, color }) => (
  <MaterialIcons name={name} size={ICON_SIZE} color={color} />
)
