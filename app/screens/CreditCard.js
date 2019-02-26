import React, { Component } from "react"
import { FlatList, Modal, View, Platform } from "react-native"
import { Card } from "react-native-elements"

import { BodyText } from "../components/Text"
import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { AddFundButton } from "../components/Buttons"
import { Header } from "../components/Header"

const TEMP_CREDIT_CARD = ["7891 (Visa)", "8789 (MasterCard)"]
class CreditCard extends Component {
  state = {
    modalVisible: false,
    currentCreditCard: "",
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  handleOnPress = item => {
    this.setModalVisible(false)
    this.setState({ currentCreditCard: item })
    const { onChange } = this.props
    onChange({ _type: "CreditCard", id: item })
  }

  render() {
    return (
      <Card containerStyle={{ borderRadius: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BodyText text={"Credit Card:"} />
          <BodyText text={this.state.currentCreditCard} />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View>
            {Platform.OS === "ios" ? <Header /> : null}
            <FlatList
              data={TEMP_CREDIT_CARD}
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
          text="Choose Credit Card"
        />
      </Card>
    )
  }
}

export default CreditCard
