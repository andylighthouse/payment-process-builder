import React from "react"
import { Card } from "react-native-elements"

import FundingSource from "./FundingSource"
import AddSource from "./AddSource"
import { BodyText } from "../components/Text"

export default (Split = ({ authWith, onChange }) => {
  const handleChange = changedIndex => data => {
    onChange({
      _type: "Split",
      authWith: authWith.map((aw, index) => (index === changedIndex ? data : aw)).filter(a => a),
    })
  }
  const handleAdd = data => {
    onChange({
      _type: "Split",
      authWith: (authWith || []).concat(data),
    })
  }

  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <BodyText text={"Split"} />

      {authWith &&
        authWith.map((aw, index) => (
          <FundingSource key={index} {...aw} onChange={handleChange(index)} />
        ))}

      <AddSource text="Add a Funding Source" onAdd={handleAdd} />
    </Card>
  )
})
