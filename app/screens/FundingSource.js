import React from "react"
import Lock from "../screens/Lock"
import FundInOrder from "../screens/FundInOrder"
import MccFilter from "../screens/MccFilter"
import Account from "../screens/Account"
import CreditCard from "../screens/CreditCard"
import Split from "../screens/Split"
import { StatusBar, ScrollView, Text, View, Button, ListItem } from "react-native"
// import { ListItem } from "../components/ListItem"

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

  console.log("PASS TO COMPONENET STUFF INSIDE OBJECT: " + JSON.stringify({ ...props }))
  return <View>{Component && <Component {...props} onChange={onChange} />}</View>
}

// /* <ListItem>{Component && <Component {...props} onChange={onChange} />}</ListItem> */
