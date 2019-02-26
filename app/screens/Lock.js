import React from "react"
import { TextInput, View } from "react-native"
import { Card } from "react-native-elements"

import AddSource from "./AddSource"
import FundingSource from "./FundingSource"
import { BodyText } from "../components/Text"

export default ({ id, authWith, onChange }) => {
  const handleIdChanged = id => {
    onChange({
      _type: "Lock",
      id: id,
      authWith: authWith,
    })
  }
  const handleFundingSourceChanged = data => {
    onChange({
      _type: "Lock",
      id: id,
      authWith: data,
    })
  }
  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <BodyText text={"Lock"} />
      <BodyText text="Enter lock id:" />
      <TextInput
        style={{ backgroundColor: "#F0F0F0" }}
        keyboardType="numeric"
        onChangeText={handleIdChanged}
      />
      {id && (
        <View>
          {authWith ? (
            <FundingSource {...authWith} onChange={handleFundingSourceChanged} />
          ) : (
            <AddSource text="Add Funding Source" onAdd={handleFundingSourceChanged} />
          )}
        </View>
      )}
    </Card>
  )
}

// import React from "react"
// import { FlatList, View, Modal } from "react-native"
// import { Card } from "react-native-elements"

// import AddSource from "./AddSource"
// import FundingSource from "./FundingSource"
// import { BodyText } from "../components/Text"
// import { ListItem } from "../components/ListItem"
// import { Separator } from "../components/ListItem"

// const TEMP_LOCK = ["Card Lock (unlocked)", "Food Lock (unlocked", "General Lock (unlocked)"]

// export default ({ id, authWith, onChange }) => {
//   const handleLockChange = lock => {
//     onChange({
//       _type: "Lock",
//       id: lock,
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

// // class AddSource extends Component {
// //   state = {
// //     modalVisible: false,
// //   }

// //   setModalVisible(visible) {
// //     this.setState({ modalVisible: visible })
// //   }
// // }
