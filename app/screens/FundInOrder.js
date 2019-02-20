import React from "react"
import { View, Text } from "react-native"
import { Card } from "react-native-elements"

import FundingSource from "./FundingSource"
import AddSource from "./AddSource"

export default (FundInOrder = ({ authWith, onChange }) => {
  const handleChange = changedIndex => data => {
    onChange({
      _type: "FundInOrder",
      authWith: authWith.map((aw, index) => (index === changedIndex ? data : aw)).filter(a => a),
    })
  }
  const handleAdd = data => {
    onChange({
      _type: "FundInOrder",
      authWith: (authWith || []).concat(data),
    })
  }

  return (
    <Card containerStyle={{ width: "90%" }}>
      <Text>FundInOrder</Text>

      {authWith &&
        authWith.map((aw, index) => (
          <FundingSource key={index} {...aw} onChange={handleChange(index)} />
        ))}

      <AddSource text="Add a Funding Source" onAdd={handleAdd} />
    </Card>
  )
})
