import React from "react"
import { Picker } from "react-native"

import styles from "./styles"

const Dropdown = () => (
  <Picker selectedValue={"java"} style={{ height: 50, width: 100 }}>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>
)

export default Dropdown
