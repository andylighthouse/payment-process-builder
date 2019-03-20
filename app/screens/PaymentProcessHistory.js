import React from "react"
import { StatusBar, View, Text } from "react-native"
import { connect } from "react-redux"
import JSONTree from "react-native-json-tree"
import { Card } from "react-native-elements"

import { Container } from "../components/Container"
import { Header, Options } from "../components/Header"

const PaymentProcessHistory = ({ favorites, transactions }) => {
  return (
    <Container>
      <Header />
      <Options text={"History"} />
      {favorites.map((favorite, index) => (
        <Card key={index}>
          <JSONTree data={favorite} />
        </Card>
      ))}

      <Text>Transactions</Text>
      {transactions.map((transaction, index) => (
        <Card key={index}>
          <JSONTree data={transaction} />
        </Card>
      ))}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.favorite.favorites,
    transactions: state.transaction.transactions,
  }
}

export default connect(mapStateToProps)(PaymentProcessHistory)
