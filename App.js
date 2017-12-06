import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/HomePage';
import InfoPage from './src/pages/InfoPage';
import ContactPage from './src/pages/ContactPage';

import {
 DrawerNavigator,
} from 'react-navigation';


const App = DrawerNavigator({
 Home: {
   screen: HomePage,
 },
 Info: {
   screen: InfoPage,
 },
 Contact: {
   screen: ContactPage,
 },
});

export default App;
