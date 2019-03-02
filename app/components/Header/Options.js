import React from "react"
import { View } from "react-native"

import styles from "./styles"
import { HeadingText } from "../Text"

const Options = ({ children, text }) => (
  <View style={styles.optionsContainer}>
    <HeadingText text={text} />
    {children}
  </View>
)
export default Options
