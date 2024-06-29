//Cal.js
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from "react-native-gifted-charts";

import Tfood from '../calA/Tfood';
import Drink from '../calA/Drink';
import Dessert from '../calA/Dessert';

const Stack = createStackNavigator();

const Cal = ({ route }) => {
  const navigation = useNavigation();

  const { totalCalories } = route.params || {};

  const [barData, setBarData] = useState([
    { value: 0, label: 'Food', frontColor: 'red' },
    { value: 400, label: 'Drink', frontColor: '#177AD5' },
    { value: 600, label: 'Dessert', frontColor: 'pink' },
  ]);

  useEffect(() => {
    setBarData([
      { value: totalCalories || 1300, label: 'Food', frontColor: 'red' },
      { value: 400, label: 'Drink', frontColor: '#177AD5' },
      { value: 600, label: 'Dessert', frontColor: 'pink' },
    ]);
  }, [totalCalories]);

  return (
    <View style={{ margin: 20 }}>
      <View style={{ gap: 35 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 25, color: '#3E423A', top: 10, left: 5 }}>Food</Text>
          <View style={{ width: 175, height: 65, backgroundColor: '#add2d9', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Image style={{ width: 54, height: 54, top: 5, left: 10 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712041128/cpe451/profile-home_a17cpb.png' }} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '200', left: -10 }}>Kanoksak Non</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '100', color: '#777777', left: 10 }}>Age 20</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ width: 365, height: 160, backgroundColor: '#dedede', borderRadius: 10 }}>
          <View style={{ top: -35 }}>
          <BarChart
            horizontal
            barWidth={22}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            maxValue={1300}
          />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Tfood')} style={{ width: 175, height: 192, backgroundColor: '#FFFFFF', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Image style={{ width: 143, height: 114, left: 14, top: 10 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712165676/cpe451/Thai-food_cy1abb.png' }} />
              <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '100', top: 20, left: 50 }}>Thai Food</Text>
              <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '100', color: '#777777', top: 20, left: 32 }}>All Thai food style</Text>
            </View>
          </TouchableOpacity>
     
            <TouchableOpacity onPress={() => navigation.navigate('Drink')} style={{ width: 175, height: 192, backgroundColor: '#FFFFFF', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Image style={{ width: 157, height: 124.6, left: 14, top: 10 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712166650/cpe451/Drink_qnwntv.png' }} />
                <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '100', top: 10, left: 65 }}>Drink</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '100', color: '#777777', top: 12, left: 60 }}>All Drink</Text>
              </View>
            </TouchableOpacity>
            
          </View> 

          <TouchableOpacity onPress={() => navigation.navigate('Dessert')} style={{width: 175, height: 192, backgroundColor: '#FFFFFF', borderRadius: 10,shadowOffset: {width: 0,height: 10}, shadowOpacity: 0.25,shadowRadius: 3.5,elevation: 5}}>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Image style={{ width: 151.98, height: 102, left: 9, top: 20 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712167009/cpe451/Dessert_zvobcm.png' }} />
                <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '100', top: 30, left: 55 }}>Dessert</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '100', color: '#777777', top: 32, left: 55 }}>All Dessert </Text>
              </View>
          </TouchableOpacity>

          <View style={{ width: 365, height: 20 }} />
        </View>
    </View>
  )
}

export default Cal


/*

  const [barData, setBarData] = useState([
    { value: 0, label: 'Food', frontColor: 'red' },
    { value: 400, label: 'Drink', frontColor: '#177AD5' },
    { value: 600, label: 'Dessert', frontColor: 'pink' },
  ]);

  useEffect((props) => {
    setBarData([
      { value: props.totalCaloriesT, label: 'Food', frontColor: 'red' },
      { value: 400, label: 'Drink', frontColor: '#177AD5' },
      { value: 600, label: 'Dessert', frontColor: 'pink' },
    ]);
  }, [props.totalCalories]);
*/