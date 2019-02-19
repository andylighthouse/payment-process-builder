import React, { Component } from "react"
import { ScrollView, StatusBar, FlatList, Button } from "react-native"
import { connect } from "react-redux"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = item => {
    let authWith = this.props.navigation.getParam("authWith")
    if (authWith) {
      console.log("second")
      console.log("TINA" + JSON.stringify(authWith))
      let onChange = this.props.navigation.getParam("onChange")
      onChange({ ...authWith, authWith: {} })
      this.props.navigation.navigate(item, {
        data: { ...authWith },
        onChange: onChange,
      })
    } else {
      console.log("first")
      let onChange = this.props.navigation.getParam("onChange")
      let authWith = { _type: item }
      onChange(authWith)
      this.props.navigation.navigate(item, {
        data: { ...authWith },
        onChange: onChange,
      })
      console.log("TINA" + JSON.stringify(authWith))
    }
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
