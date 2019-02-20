import React from "react"

import FundingSource from "../../screens/FundingSource"
import AddSource from "../../screens/AddSource"

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
