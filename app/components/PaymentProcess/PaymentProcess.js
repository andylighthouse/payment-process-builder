import React, { Component } from "react"
import FundingSource from "../../screens/FundingSource"
import AddSource from "../../screens/AddSource"
import EStyleSheet from "react-native-extended-stylesheet"

const styles = EStyleSheet.create({
  $orange: "$primaryOrange",
})

export default ({ authWith, onChange }) => {
  const handleFundingSourceChanged = data => {
    onChange({ authWith: data })
  }

  return authWith ? (
    <FundingSource {...authWith} onChange={handleFundingSourceChanged} />
  ) : (
    <AddSource text="Add Funding Source" onAdd={handleFundingSourceChanged} />
  )
}
