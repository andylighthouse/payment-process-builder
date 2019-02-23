import EStyleSheet from "react-native-extended-stylesheet"
import { StyleSheet } from "react-native"

export default EStyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  separator: {
    marginLeft: 20,
    backgroundColor: "$separator",
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  text: {
    color: "$primaryOrange",
    fontWeight: "800",
  },
})
