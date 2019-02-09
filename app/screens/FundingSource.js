import React, { Component } from "react"
import { Text, StatusBar, FlatList, View } from "react-native"

import { ListItem } from "../components/ListItem"
import { Container } from "../components/Container"

const fuck = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = () => {
    console.log("funding source pressed")
  }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={fuck}
          renderItem={({ item }) => (
            <ListItem text={item} onPress={() => this.handleOnPress(item)} />
          )}
        />
      </View>
    )
  }
}

export default FundingSource
