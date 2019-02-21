import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, View, Modal, TouchableHighlight, FlatList } from "react-native"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { Button } from "../components/Buttons"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class AddSource extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  handleOnPress = item => {
    const { onAdd } = this.props
    onAdd({ _type: item })
  }
  render() {
    return (
      <View style={{ marginTop: 10, alignItems: "flex-start" }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.")
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <FlatList
                data={fundingSourceOptions}
                renderItem={({ item }) => (
                  <ListItem text={item} onPress={() => this.handleOnPress(item)} />
                )}
                keyExtractor={item => item}
                ItemSeparatorComponent={Separator}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true)
          }}
          text="Add Funding Source"
        />
      </View>
    )
  }
}

export default connect()(AddSource)
