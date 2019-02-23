import React, { Component } from "react"
import { View, Modal, TouchableOpacity, FlatList } from "react-native"

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
    this.setModalVisible(false)
    const { onAdd } = this.props
    onAdd({ _type: item })
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View>
            <FlatList
              data={fundingSourceOptions}
              renderItem={({ item }) => (
                <ListItem text={item} onPress={() => this.handleOnPress(item)} />
              )}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
            />
            <Separator />
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

export default AddSource
