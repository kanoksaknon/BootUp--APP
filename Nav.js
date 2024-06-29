import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Home
import Home from './NextH/Home';
import Cal from './NextH/Cal';
import Product from './NextH/Product';
import Trends from './NextH/Trends';
import Setting from './NextH/Setting';

//Cal
import Tfood from './calA/Tfood';
import Drink from './calA/Drink';
import Dessert from './calA/Dessert';


//Trends
import FoodPage from './TrendS/FoodPage';
import FitnessPage from './TrendS/FitnessPage';
import OutdoorActivitiesPage from './TrendS/OutdoorActivitiesPage';
import IndoorActivitiesPage from './TrendS/IndoorActivitiesPage';

//Product
import Med from './Store/Med';
import Whey from './Store/Whey';
import Vit from './Store/Vit';
import Cart from './Store/Cart';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Nav  ()  {
    return (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#11B3CF',
                borderRadius: 15,
                height: 60,
                ...styles.shadows
              }
            }}
          >
            <Tab.Screen
              name="Home"
              component={Snav}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ justifyContent: 'center', alignItems: 'center', top: 2 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711973164/Home-icons_evecos.png' }} resizeMode='contain' style={{ width: 24, height: 24, tintColor: focused ? '#0B8AA0' : '#FFFFFF' }} />
                    <Text style={{ color: focused ? '#FFFFFF' : '#FFFFFF', fontSize: 12, fontFamily: 'Mitr', fontWeight: '300' }}>Home</Text>
                  </View>
                )
              }} />
    
            <Tab.Screen
              name="Trends"
              component={STrend}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ justifyContent: 'center', alignItems: 'center', top: 2 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711974307/Trends_quawqu.png' }} resizeMode='contain' style={{ width: 24, height: 24, tintColor: focused ? '#0B8AA0' : '#FFFFFF' }} />
                    <Text style={{ color: focused ? '#FFFFFF' : '#FFFFFF', fontSize: 12, fontFamily: 'Mitr', fontWeight: '300' }}>Trends</Text>
                  </View>
                )
              }} />
    
            <Tab.Screen
              name="Product"
              component={SProduct}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ justifyContent: 'center', alignItems: 'center', top: 2 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711974390/product_iyvmxw.png' }} resizeMode='contain' style={{ width: 26, height: 26, tintColor: focused ? '#0B8AA0' : '#FFFFFF' }} />
                    <Text style={{ color: focused ? '#FFFFFF' : '#FFFFFF', fontSize: 12, fontFamily: 'Mitr', fontWeight: '300' }}>Product</Text>
                  </View>
                )
              }} />
    
            <Tab.Screen
              name="Cal"
              component={Scal}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ justifyContent: 'center', alignItems: 'center', top: 2 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711974893/food_gn3l1o.png' }} resizeMode='contain' style={{ width: 24, height: 24, tintColor: focused ? '#0B8AA0' : '#777777' }} />
                    <Text style={{ color: focused ? '#FFFFFF' : '#FFFFFF', fontSize: 12, fontFamily: 'Mitr', fontWeight: '300' }}>CalFood</Text>
                  </View>
                )
              }} />
          </Tab.Navigator>
      )
    }

// Home
function Snav () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="TrendsScreen" component={Trends} />
          <Stack.Screen name="foodScreen" component={Cal} />
          <Stack.Screen name="ProductScreen" component={Product} />      
        </Stack.Navigator>
    )
}

// Cal
function Scal () {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="foodScreen" component={Cal} /> 
        <Stack.Screen name="Tfood" component={Tfood} />
        <Stack.Screen name="Drink" component={Drink} /> 
        <Stack.Screen name="Dessert" component={Dessert} />  
      </Stack.Navigator>
  )
}

// Trends
function STrend () {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="TrendScreens" component={Trends} /> 
        <Stack.Screen name="FoodPage" component={FoodPage} />
        <Stack.Screen name="FitnessPage" component={FitnessPage} />
        <Stack.Screen name="OutdoorActivitiesPage" component={OutdoorActivitiesPage} />
        <Stack.Screen name="IndoorActivitiesPage" component={IndoorActivitiesPage} />
      </Stack.Navigator>
  )
}

//Product
function SProduct () {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ProductScreen" component={Product} />
        <Stack.Screen name="MedicalScreen" component={Med} />
        <Stack.Screen name="WheyScreen" component={Whey} />
        <Stack.Screen name="VitScreen" component={Vit} />
        <Stack.Screen name="CartScreen" component={Cart} />
      </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    shadows: {
      shadowColor: '#FFFFFF',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    }
  })
  