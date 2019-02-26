import React, { Component } from "react"
import { FlatList, Modal, View, Platform, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"
import { Feather } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

import { BodyText } from "../components/Text"
import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { AddFundButton } from "../components/Buttons"
import { Header } from "../components/Header"

const TEMP_CREDIT_CARD = ["7891 (Visa)", "8789 (MasterCard)"]

const colors = EStyleSheet.create({
  $orange: "$primaryOrange",
})

class CreditCard extends Component {
  state = {
    modalVisible: false,
    currentCreditCard: null,
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
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => this.setModalVisible(true)}>
            <BodyText text={this.state.currentCreditCard} />
            {this.state.currentCreditCard && <Feather name={"edit"} color={colors.$orange} />}
          </TouchableOpacity>
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

        {!this.state.currentCreditCard && (
          <AddFundButton
            onPress={() => {
              this.setModalVisible(true)
            }}
            text="Choose Credit Card"
          />
        )}
      </Card>
    )
  }
}

export default CreditCard
