import React from "react"
import { Platform } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"

import { TabBarIcon } from "../components/TabBarIcon"
import HomeScreen from "../screens/Home"
import HistoryScreen from "../screens/History"

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
// import FundingSource from "../screens/FundingSource"
// import Home from "../screens/Home"
// import Account from "../screens/Account"
// import CreditCard from "../screens/CreditCard"
// import MccFilter from "../screens/MccFilter"
// import Lock from "../screens/Lock"

// const HomeStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: { header: () => null },
//     },
//     FundingSource: {
//       screen: FundingSource,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//     Account: {
//       screen: Account,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//     CreditCard: {
//       screen: CreditCard,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//     MccFilter: {
//       screen: MccFilter,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//     Lock: {
//       screen: Lock,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//   },
//   {
//     headerLayoutPreset: "center",
//   },
// )

// const AppNavigator = createStackNavigator(
//   {
//     Home: { screen: HomeStack },
//   },
//   {
//     headerMode: "none",
//     mode: "modal",
//   },
// )

// const AppContainer = createAppContainer(AppNavigator)
// export default AppContainer
