import React from "react"
import { View } from "react-native"

import styles from "./styles"
import { HeadingText } from "../Text"

const Options = ({ children }) => (
  <View style={styles.optionsContainer}>
    <HeadingText text={"Payment Process Builder"} />
    {children}
  </View>
)
export default Options
