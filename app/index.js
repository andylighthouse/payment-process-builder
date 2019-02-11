import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import { Provider } from "react-redux"

import Home from "./screens/Home"
import FundingSource from "./screens/FundingSource"
import store from "./config/store"
import Navigator from "./config/routes"

EStyleSheet.build({
  $primaryOrange: "#D57A66",
  $lightGrey: "#F0F0F0",
  $separator: "#E2E2E2",

  // $outline: 1,
})

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
