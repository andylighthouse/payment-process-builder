import React, { Component } from "react"
import { FlatList, Modal, View, Platform } from "react-native"
import { Card } from "react-native-elements"

import { BodyText } from "../components/Text"
import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { AddFundButton } from "../components/Buttons"
import { Header } from "../components/Header"

const TEMP_ACCOUNT = ["Food ($87.50)", "General Funds ($100.30)"]
class Account extends Component {
  state = {
    modalVisible: false,
    currentAccount: "",
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  handleOnPress = item => {
    this.setModalVisible(false)
    this.setState({ currentAccount: item })
    const { onChange } = this.props
    onChange({ _type: "Account", id: item })
  }

  render() {
    return (
      <Card containerStyle={{ borderRadius: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BodyText text={"Account:"} />
          <BodyText text={this.state.currentAccount} />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View>
            {Platform.OS === "ios" ? <Header /> : null}
            <FlatList
              data={TEMP_ACCOUNT}
              renderItem={({ item }) => (
                <ListItem text={item} onPress={() => this.handleOnPress(item)} />
              )}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </Modal>

        <AddFundButton
          onPress={() => {
            this.setModalVisible(true)
          }}
          text="Choose Account"
        />
      </Card>
    )
  }
}

export default Account
