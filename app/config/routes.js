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
