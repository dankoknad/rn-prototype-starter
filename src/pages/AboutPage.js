import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class AboutPage extends Component {
 static navigationOptions = {
   drawerLabel: 'About',
   drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../img/home.png')}
       style={[styles.icon, {tintColor: 'green'}]}
     />
   ),
 };

 render() {
  return (
   <View style={styles.container}>
     <Text>You are on the About page</Text>
     <Button
       onPress={() => this.props.navigation.navigate('Contact')}
       title="Go to contact"
     />
     <Button
       onPress={() => this.props.navigation.navigate('Home')}
       title="Go to home"
     />
   </View>
  );
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
});
