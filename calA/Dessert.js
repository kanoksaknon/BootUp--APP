import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput, FlatList, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { BarChart,PieChart } from "react-native-gifted-charts";

import Mdess from './Mdess.js';

const Dessert = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [totalCalories, setTotalCalories] = useState(0);
  const [barstatus, setBarStatus] = useState({});

  //ค้นหา เมนู
  const [searchQuery, setSearchQuery] = useState('');
  const [foodData, setFoodData] = useState(Mdess);
  const searchFilter = (text) => {
    setSearchQuery(text);
    const filteredData = Mdess.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFoodData(filteredData);
};

  //radio button and choose food
  const [foodStatus, setFoodStatus] = useState({});
  const onPressRadioButton = (food) => {
    const isSelected = foodStatus[food.name];
    // กำหนดสถานะของอาหารที่ถูกเลือก
    setFoodStatus({
      ...foodStatus,
      [food.name]: !isSelected  // เปลี่ยนสถานะเป็นของอาหารนี้
    });
  };

  //calculate food
  const calculateTotalCaloriesDe = () => {
    let caloriesSum = 0;

    Object.keys(foodStatus).forEach((foodName) => {
      if (foodStatus[foodName]) {
        const food = foodData.find((item) => item.name === foodName);
        if (food) {
          caloriesSum += food.calories;
        }
      }
    });

    setTotalCalories(caloriesSum); // อัปเดตสถานะ totalCalories

    // เปิด modal
    setModalVisible(true);

    //onResult(caloriesSum);

    const updatebarData = [
      { value: 0, label: 'Food', frontColor: 'red' },
      { value: 0, label: 'Drink', frontColor: '#177AD5' },
      { value: caloriesSum, label: 'Dessert', frontColor: 'pink' },
    ]
    setBarStatus(updatebarData); //นำไปใช้ต่อ ใน modal usestate (no.1)
  };

  return (
    <View style={{gap: 15, margin: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50, height: 45,top: 0, borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 30, height: 60}} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712768684/cpe451/goback2_thcvlx.png' }} resizeMode='contain' />
        </TouchableOpacity>
        <View style={{width: 300,  height: 45, left: 10 ,backgroundColor: '#dedede', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', columnGap: 0}}>
          <Image style={{ width: 20, height: 20,top: 13 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712047194/cpe451/serach-icon_jrehqo.png' }} resizeMode='contain' />
          <TextInput style={{ width: 250, fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', left: 6 }} placeholder='Search' placeholderTextColor={'#777d7e'} onChangeText={searchFilter} value={searchQuery} />
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold',fontFamily: 'Mitr'}}>Calories in Dessert</Text>
        <TouchableOpacity onPress={calculateTotalCaloriesDe} style={{width: 100, height: 35, backgroundColor: '#11B3CF', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5, left: -5}}>
          <Text style={{fontSize: 15, fontWeight: 'normal',fontFamily: 'Mitr', textAlign: 'center', top: 5, color : '#FFFFFF'}}>OK</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
          <View style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', borderRadius: 10, width: 365, height: 650 }}>
            <ScrollView>
              <View style={{ rowGap: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 25, color: '#3E423A', top: 10, left: 5 }}> </Text>
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

                <Text style={{ fontSize: 15, fontFamily: 'Mitr', fontWeight: '100', color: '#3E423A', left: 10 }}>Total Daily Calrories</Text>

                <View style={{ width: 330, height: 200, left: 10, backgroundColor: '#dedede', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
                  <View style={{ top: -35 }}>
                    <BarChart
                      horizontal
                      barWidth={22}
                      barBorderRadius={4}
                      frontColor="lightgray"
                      data={barstatus}
                      yAxisThickness={0}
                      xAxisThickness={0}
                      maxValue={1300}
                    />
                  </View>
                </View>
                <View>
                  <View style={{ left: 10 }}>
                    <View style={{ width: 330, height: 390, backgroundColor: '#dedede', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
                      <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', top: 10, left: 25 }}>Total</Text>
                      <View style={{ width: 285, height: 249, backgroundColor: '#FFFFFF', borderRadius: 10, left: 22, top: 20 }} />
                      <Text style={{ fontSize: 15, fontFamily: 'Mitr', fontWeight: '200', top: -195, left: 70, color: '#3E423A' }}>For all of this meal eaten</Text>
                      <View style={{left: 90, top: -170}}>
                        <PieChart
                          donut
                          radius={70}
                          showTextBackground
                          data={barstatus}
                          maxValue={1300}
                        />
                      </View>

                      <Text style={{fontSize: 12, fontFamily: 'Mitr', fontWeight: '200', color: '#3E423A', top: -120, left: 30}}> food is blue color</Text>
                      <Text style={{fontSize: 12, fontFamily: 'Mitr', fontWeight: '200', color: '#3E423A', top: -120, left: 30}}> Drink is green color</Text>
                      <Text style={{fontSize: 12, fontFamily: 'Mitr', fontWeight: '200', color: '#3E423A', top: -120, left: 30}}> Dessert is yellow color</Text>

                    </View>
                  </View>
                </View>

                <View style={{ left: 10 }}>
                  <View style={{ width: 330, height: 70, backgroundColor: '#dedede', borderRadius: 10, alignContent: 'center', alignItems: 'center', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', top: 20, left: 5 }}>{totalCalories} kcal</Text>
                  </View>
                </View>

              </View>

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <View style={{ width: 330, height: 45, left: 10, backgroundColor: '#dedede', borderRadius: 10, top: 20, alignContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 15, fontFamily: 'Mitr', fontWeight: '100', color: '#3E423A', top: 12 }}>OK</Text>
                </View>
              </Pressable>

              <View style={{ width: 330, height: 60 }} />

            </ScrollView>

          </View>
        </View>
      </Modal>

      <FlatList
        data={foodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <View style={{ width: 360, height: 75, backgroundColor: '#dedede', borderRadius: 10, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10 }}>
                <Image source={{ uri: item.foodimages || 'https://res.cloudinary.com/doukdigoy/image/upload/v1712833091/cpe451/Drink_food_flrcen.png' }} style={{ width: 60, height: 60, borderRadius: 30, top: 8 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'normal', fontFamily: 'Mitr' }}>{item.name}</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.calories} Calories</Text>
                </View>
                <View>

                  <RadioButton
                    value={item.name}
                    status={foodStatus[item.name] ? 'checked' : 'unchecked'}
                    onPress={() => onPressRadioButton(item)}
                    color={'#75C44C'}
                  />

                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
    
  )
}

export default Dessert

const styles = StyleSheet.create({})