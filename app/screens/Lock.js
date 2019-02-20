import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"
import { connect } from "react-redux"
import { Card, Icon } from "react-native-elements"

import { Button } from "../components/Buttons"
import AddSource from "./AddSource"
import FundingSource from "./FundingSource"

export default ({ id, authWith, onChange }) => {
  const handleSelectChanged = id => {
    onChange({
      _type: "Lock",
      id: id,
      authWith: authWith,
    })
  }
  const handleFundingSourceChanged = data => {
    console.log("SANITYCHECK2: " + JSON.stringify({ id: id }))
    onChange({
      _type: "Lock",
      id: id,
      authWith: data,
    })
  }
  return (
    <View>
      <Card containerStyle={{ width: "90%" }}>
        <Text>LOCK</Text>
        <Text>Enter Lock id:</Text>
        <TextInput style={{ backgroundColor: "grey" }} onChangeText={handleSelectChanged} />
      </Card>

      {id && (
        <View>
          {authWith ? (
            <FundingSource {...authWith} onChange={handleFundingSourceChanged} />
          ) : (
            <AddSource text="Add Funding Source" onAdd={handleFundingSourceChanged} />
          )}
        </View>
      )}
    </View>
  )
}
