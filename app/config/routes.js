import React from "react"
import { Platform } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"

import { TabBarIcon } from "../components/TabBarIcon"
import HomeScreen from "../screens/Home"
import HistoryScreen from "../screens/PaymentProcessHistory"

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: "none",
  },
)

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"home"} />,
  header: null,
}

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  {
    headerMode: "none",
  },
)

HistoryStack.navigationOptions = {
  tabBarLabel: "History",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"history"} />,
  header: null,
}

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  HistoryStack,
})

export default createAppContainer(TabNavigator)
