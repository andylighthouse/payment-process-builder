import React from "react"
import { StatusBar, View, Text } from "react-native"
import { connect } from "react-redux"
import JSONTree from "react-native-json-tree"
import { Card } from "react-native-elements"

import { Container } from "../components/Container"
import { Header } from "../components/Header"

const PaymentProcessHistory = ({ favorites }) => {
  return (
    <Container>
      <Header />
      {favorites.map((favorite, index) => (
        <Card key={index}>
          <JSONTree data={favorite} />
        </Card>
      ))}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.favorite.favorites,
  }
}

export default connect(mapStateToProps)(PaymentProcessHistory)
