import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default class ContactScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Contact',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: 'orange'}]}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Contact screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="Go to about"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to home"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
})
