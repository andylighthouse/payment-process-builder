import { createStackNavigator, createAppContainer } from "react-navigation"

import FundingSource from "../screens/FundingSource"
import Home from "../screens/Home"

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: () => null },
    },
    FundingSource: {
      screen: FundingSource,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  },
)

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeStack },
  },
  {
    headerMode: "none",
    mode: "modal",
  },
)

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
