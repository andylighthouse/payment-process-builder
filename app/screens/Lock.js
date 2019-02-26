import React, { Component } from "react"
import { FlatList, View, Modal } from "react-native"
import { Card } from "react-native-elements"

import AddSource from "./AddSource"
import FundingSource from "./FundingSource"
import { BodyText } from "../components/Text"
import { ListItem } from "../components/ListItem"
import { Separator } from "../components/ListItem"
import { AddFundButton } from "../components/Buttons"

// export default ({ id, authWith, onChange }) => {
//   const handleIdChanged = id => {
//     onChange({
//       _type: "Lock",
//       id: id,
//       authWith: authWith,
//     })
//   }
//   const handleFundingSourceChanged = data => {
//     onChange({
//       _type: "Lock",
//       id: id,
//       authWith: data,
//     })
//   }
//   return (
//     <Card containerStyle={{ borderRadius: 15 }}>
//       <BodyText text={"Lock"} />
//       <BodyText text="Enter lock id:" />
//       <TextInput
//         style={{ backgroundColor: "#F0F0F0" }}
//         keyboardType="numeric"
//         onChangeText={handleIdChanged}
//       />
//       {id && (
//         <View>
//           {authWith ? (
//             <FundingSource {...authWith} onChange={handleFundingSourceChanged} />
//           ) : (
//             <AddSource text="Add Funding Source" onAdd={handleFundingSourceChanged} />
//           )}
//         </View>
//       )}
//     </Card>
//   )
// }

// const TEMP_LOCK = ["Card Lock (unlocked)", "Food Lock (unlocked", "General Lock (unlocked)"]

// export default ({ id, authWith, onChange }) => {
//   return (
//     <Card containerStyle={{ borderRadius: 15 }}>
//       <BodyText text={"Lock"} />
//       <BodyText text="Enter lock id:" />

//       <Modal>
//         <View>
//           <FlatList
//             data={TEMP_LOCK}
//             renderItem={({ item }) => (
//               <ListItem text={item} onPress={() => handleLockChange(item)} />
//             )}
//             keyExtractor={item => item}
//             ItemSeparatorComponent={Separator}
//           />
//         </View>
//       </Modal>

//       {id && (
//         <View>
//           {authWith ? (
//             <FundingSource {...authWith} onChange={handleFundingSourceChanged} />
//           ) : (
//             <AddSource text="Add Funding Source" onAdd={handleFundingSourceChanged} />
//           )}
//         </View>
//       )}
//     </Card>
//   )
// }

class Lock extends Component {
  state = {
    modalVisible: false,
    currentLock: "",
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
    const TEMP_LOCK = ["Card Lock (unlocked)", "Food Lock (unlocked)", "General Lock (unlocked)"]
    const { id, authWith } = this.props
    return (
      <Card containerStyle={{ borderRadius: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BodyText text={"Lock:"} />
          <BodyText text={this.state.currentLock} />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View>
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
        <AddFundButton
          onPress={() => {
            this.setModalVisible(true)
          }}
          text="Choose Lock"
        />

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
