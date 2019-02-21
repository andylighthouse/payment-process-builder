import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

import styles from "./styles"

const ICON_COLOR = "white"
const ICON_SIZE = 30

const Footer = ({ onPress, name, close }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      {close ? (
        <MaterialCommunityIcons
          name={"close"}
          color={ICON_COLOR}
          size={ICON_SIZE}
          onPress={onPress}
        />
      ) : (
        <MaterialCommunityIcons name={name} color={ICON_COLOR} size={ICON_SIZE} onPress={onPress} />
      )}
    </TouchableOpacity>
  </View>
)
export default Footer
