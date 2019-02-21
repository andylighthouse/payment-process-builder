import React from "react"
import { ScrollView, View } from "react-native"

import styles from "./styles"

const Container = ({ children }) => (
  <ScrollView style={styles.contentContainerStyle}>{children}</ScrollView>
)

export default Container
