import React, { Component } from "react"
import { FlatList, View, Modal, Platform, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"
import { Feather } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

import AddSource from "./AddSource"
import FundingSource from "./FundingSource"
import { BodyText } from "../components/Text"
import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { AddFundButton } from "../components/Buttons"
import { Header } from "../components/Header"

const TEMP_LOCK = ["Card Lock (unlocked)", "Food Lock (unlocked)", "General Lock (unlocked)"]

const colors = EStyleSheet.create({
  $orange: "$primaryOrange",
})

class Lock extends Component {
  state = {
    modalVisible: false,
    currentLock: null,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  handleLockChange = id => {
    const { onChange, authWith } = this.props
    onChange({
      _type: "Lock",
      id: id,
      authWith: authWith,
    })
    this.setState({ currentLock: id })
    this.setModalVisible(false)
  }

  handleFundingSourceChanged = data => {
    const { id, authWith, onChange } = this.props
    onChange({
      _type: "Lock",
      id: id,
      authWith: data,
    })
    this.setModalVisible(false)
  }

  render() {
    const { id, authWith } = this.props
    return (
      <Card containerStyle={{ borderRadius: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BodyText text={"Lock:"} />
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => this.setModalVisible(true)}>
            <BodyText text={this.state.currentLock} />
            {this.state.currentLock && <Feather name={"edit"} color={colors.$orange} />}
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
              data={TEMP_LOCK}
              renderItem={({ item }) => (
                <ListItem text={item} onPress={() => this.handleLockChange(item)} />
              )}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </Modal>

        {!this.state.currentLock && (
          <AddFundButton
            onPress={() => {
              this.setModalVisible(true)
            }}
            text="Choose Lock"
          />
        )}

        {id && (
          <View>
            {authWith ? (
              <FundingSource {...authWith} onChange={this.handleFundingSourceChanged} />
            ) : (
              <AddSource text="Add Funding Source" onAdd={this.handleFundingSourceChanged} />
            )}
          </View>
        )}
      </Card>
    )
  }
}

export default Lock
