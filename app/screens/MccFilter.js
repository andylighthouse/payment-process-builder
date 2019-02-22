import React from "react"
import { TextInput, View } from "react-native"
import { Card } from "react-native-elements"

import AddSource from "./AddSource"
import FundingSource from "./FundingSource"
import { BodyText } from "../components/Text"

export default ({ id, authWith, onChange }) => {
  const handleIdChanged = id => {
    onChange({
      _type: "MccFilter",
      id: id,
      authWith: authWith,
    })
  }

  const handleFundingSourceChanged = data =>
    onChange({
      _type: "MccFilter",
      id: id,
      authWith: data,
    })

  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <BodyText text={"MccFilter"} />
      <BodyText text={"Enter MccFilter id:"} />
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
