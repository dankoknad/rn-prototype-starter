import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomePage from './src/pages/HomePage'
import AboutPage from './src/pages/AboutPage'
import ContactPage from './src/pages/ContactPage'

import {
  DrawerNavigator,
} from 'react-navigation'


const App = DrawerNavigator({
  Home: {
    screen: HomePage,
  },
  About: {
    screen: AboutPage,
  },
  Contact: {
    screen: ContactPage,
  },
})

export default App
