import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

const colors = EStyleSheet.create({
  $orange: "$primaryOrange",
})

const ICON_SIZE = 25

export default ({ name }) => <MaterialIcons name={name} size={ICON_SIZE} color={colors.$orange} />
