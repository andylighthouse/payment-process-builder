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
  },
})
