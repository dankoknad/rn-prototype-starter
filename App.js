import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import AboutScreen from './src/screens/AboutScreen'
import ContactScreen from './src/screens/ContactScreen'

import {
  DrawerNavigator,
} from 'react-navigation'


const App = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Contact: {
    screen: ContactScreen,
  },
})

export default App
