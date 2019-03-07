import React from "react"
import { Platform } from "react-native"
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"
import { TabBarIcon } from "../components/TabBarIcon"

import HomeScreen from "../screens/Home"
import HistoryScreen from "../screens/PaymentProcessHistory"
import SignInScreen from "../screens/SignIn"
import OptionScreen from "../screens/Option"

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

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
  tabBarIcon: () => <TabBarIcon name={"home"} />,
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
  tabBarIcon: () => <TabBarIcon name={"history"} />,
  header: null,
}

const OptionStack = createStackNavigator(
  {
    Option: OptionScreen,
  },
  {
    headerMode: "none",
  },
)

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  OptionStack,
})

const AppStack = createSwitchNavigator(
  {
    App: TabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: "Auth",
  },
)

export default createAppContainer(AppStack)
