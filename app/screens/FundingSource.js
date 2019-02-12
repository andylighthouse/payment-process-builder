import React, { Component } from "react"
import { ScrollView, StatusBar, FlatList } from "react-native"
import { connect } from "react-redux"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"

import { pickFundingSource } from "../actions/build"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class FundingSource extends Component {
  handleOnPress = (item, currentState) => {
    this.props.dispatch(pickFundingSource(item, currentState))
    this.props.navigation.navigate(item, { title: item })
  }

  render() {
    const { currentState } = this.props
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={fundingSourceOptions}
          renderItem={({ item }) => (
            <ListItem text={item} onPress={() => this.handleOnPress(item, currentState)} />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentState: state.build.build,
  }
}

export default connect(mapStateToProps)(FundingSource)
