import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Image
        source={require('../img/home.png')}
        style={styles.icon}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Home screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Contact')}
          title="Go to contact"
        />
        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="Go to about"
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
