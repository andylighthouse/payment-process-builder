import React, { Component } from "react"
import { StatusBar, ScrollView } from "react-native"
import { connect } from "react-redux"
import { Card, ListItem, Icon } from "react-native-elements"

import { Container } from "../components/Container"
import { Button } from "../components/Buttons"
import { PaymentProcessBuilder } from "../components/Text"
import { Header } from "../components/Header"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      data: {},
    }
  }

  handleChange = authWith => {
    this.setState({ data: authWith })
  }

  handleOnPress = () => {
    this.props.navigation.navigate("FundingSource", {
      data: { ...this.state.authWith },
      onChange: this.handleChange,
    })
  }

  // display: "flex",
  //   flexDirection: "column",

  render() {
    console.log("DATA" + JSON.stringify(this.state))
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <PaymentProcessBuilder />
        <ScrollView>
          <ListItem title={"hello"} />
          <ListItem title={"hello"} />
          <ListItem title={"hello"} />
          <ListItem title={"hello"} />
          <ListItem title={"hello"} />
        </ScrollView>
      </Container>
    )
  }
}

export default connect()(Home)
