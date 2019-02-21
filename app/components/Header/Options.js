import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

import styles from "./styles"
import { PaymentProcessBuilder } from "../Text"

const ICON_COLOR = "white"
const ICON_SIZE = 30

const Options = ({ name, onPress }) => (
  <View style={styles.optionsContainer}>
    <PaymentProcessBuilder />
    <TouchableOpacity>
      <MaterialCommunityIcons name={name} color={ICON_COLOR} size={ICON_SIZE} onPress={onPress} />
    </TouchableOpacity>
  </View>
)
export default Options
