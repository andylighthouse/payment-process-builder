import React, { Component } from "react"
import { ScrollView, Text, StatusBar, FlatList, View } from "react-native"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = () => {
    console.log("funding source pressed")
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={fundingSourceOptions}
          renderItem={({ item }) => (
            <ListItem text={item} onPress={() => this.handleOnPress(item)} />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </ScrollView>
    )
  }
}

export default FundingSource
