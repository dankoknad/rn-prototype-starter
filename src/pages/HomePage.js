import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class HomePage extends Component {
 static navigationOptions = {
   drawerLabel: 'Home',
   drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../img/home.png')}
       style={[styles.icon, {tintColor: 'red'}]}
     />
   ),
 };

 render() {
   return (
    <View style={styles.container}>
      <Text>You are on the Home page</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Contact')}
        title="Go to contact"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Info')}
        title="Go to info"
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
