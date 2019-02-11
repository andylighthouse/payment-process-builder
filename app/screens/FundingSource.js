import React, { Component } from "react"
import { Text, StatusBar, FlatList, View } from "react-native"

import { ListItem } from "../components/ListItem"
import { Header } from "../components/Header"
import { Separator } from "../components/ListItem"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = () => {
    console.log("funding source pressed")
  }

  render() {
    return (
      <View>
        {/* <StatusBar translucent={false} barStyle="default" /> */}
        <Header />
        <FlatList
          data={fundingSourceOptions}
          renderItem={({ item }) => (
            <ListItem text={item} onPress={() => this.handleOnPress(item)} />
          )}
        />
        <Separator />
      </View>
    )
  }
}

export default FundingSource
