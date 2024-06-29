import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Nav from './Nav'

const App = () => {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1
  }

})

