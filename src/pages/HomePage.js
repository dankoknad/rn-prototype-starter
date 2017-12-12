import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Constants, Svg } from 'expo'

export default class HomePage extends Component {
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
        <Text>You are on the Home page</Text>
        <Svg height={50} width={120}>
          <Svg.Circle
            cx={25}
            cy={25}
            r={25}
            strokeWidth={2.5}
            fill="#1487ce"
          />
          <Svg.Text
            fill="orange"
            stroke="purple"
            fontSize="30" 
            fontWeight="bold"
            x="90"
            y="7"
            textAnchor="middle"
        >SVG</Svg.Text>
        </Svg>
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
