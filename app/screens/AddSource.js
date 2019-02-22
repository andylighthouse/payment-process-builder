import React, { Component } from "react"
import { View, Modal, TouchableHighlight, FlatList } from "react-native"

import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { Button } from "../components/Buttons"
import { BodyText } from "../components/Text"

const fundingSourceOptions = ["Account", "CreditCard", "MccFilter", "Lock", "FundInOrder", "Split"]

class AddSource extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  handleOnPress = item => {
    this.setState({ modalVisible: false })
    const { onAdd } = this.props
    onAdd({ _type: item })
  }
  render() {
    console.log(JSON.stringify("MODAL:   " + this.state.modalVisible))
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
          <View>
            <View>
              <BodyText text={"Pick a Funding Source"} />

              <FlatList
                data={fundingSourceOptions}
                renderItem={({ item }) => (
                  <ListItem text={item} onPress={() => this.handleOnPress(item)} />
                )}
                keyExtractor={item => item}
                ItemSeparatorComponent={Separator}
              />
            </View>
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
