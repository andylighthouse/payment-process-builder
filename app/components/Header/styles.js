import EStyleSheet from "react-native-extended-stylesheet"
import { StatusBar } from "react-native"

export default EStyleSheet.create({
  container: {
    "@media ios": {
      paddingTop: 35,
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight,
    },
    width: "100%",
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
})
