import React from "react"
import { Text, TextInput, View } from "react-native"
import { Card } from "react-native-elements"

import AddSource from "./AddSource"
import FundingSource from "./FundingSource"

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
    <Card containerStyle={{ width: "90%" }}>
      <Text>LOCK</Text>
      <Text>Enter Lock id:</Text>
      <TextInput style={{ backgroundColor: "grey" }} onChangeText={handleIdChanged} />
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
