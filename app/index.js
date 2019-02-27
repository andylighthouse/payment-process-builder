import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import { Provider } from "react-redux"

import store from "./config/store"
import Home from "./screens/Home"
import Navigation from "./config/routes"

EStyleSheet.build({
  $primaryOrange: "#D57A66",
  $lightGrey: "#F0F0F0",
  $separator: "#E2E2E2",
  $white: "#FFFFFF",

  $outline: 1,
})

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)
