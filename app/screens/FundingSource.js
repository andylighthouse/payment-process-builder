import React from "react"
import { View } from "react-native"

import Lock from "../screens/Lock"
import FundInOrder from "../screens/FundInOrder"
import MccFilter from "../screens/MccFilter"
import Account from "../screens/Account"
import CreditCard from "../screens/CreditCard"
import Split from "../screens/Split"

export default ({ _type, onChange, ...props }) => {
  const fundingSources = {
    Lock: Lock,
    FundInOrder: FundInOrder,
    MccFilter: MccFilter,
    Account: Account,
    CreditCard: CreditCard,
    Split: Split,
  }

  const Component = fundingSources[_type]

  return <View>{Component && <Component {...props} onChange={onChange} />}</View>
}
