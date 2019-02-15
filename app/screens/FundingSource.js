import React, { Component } from "react"
import { ScrollView, StatusBar, FlatList } from "react-native"
import { connect } from "react-redux"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = item => {
    let tree = this.props.navigation.getParam("tree")
    let currentNode = this.props.navigation.getParam("currentNode")

    // if (currentNode) {
    //   currentNode.auth_with = { _type: item }
    // }

    this.props.navigation.navigate(item, { title: item, currentNode, tree })
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

export default connect()(FundingSource)
