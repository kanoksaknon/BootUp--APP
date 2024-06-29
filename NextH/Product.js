import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Product = () => {
  const navigation = useNavigation();

  return (
    <View style={{margin: 20, gap: 10}}>
      
      <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{width: 80, height: 36,}} source={{uri : 'https://res.cloudinary.com/doukdigoy/image/upload/v1712037787/cpe451/B1_ekmzlk.png' }} />
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 45, top: 0, borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 30, height: 60 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712768684/cpe451/goback2_thcvlx.png' }} resizeMode='contain' />
        </TouchableOpacity>

    
      <View style={{ width: 365, height: 54, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#777d7e', borderRadius: 20,top: 10 }}>
          <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 20 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712047194/cpe451/serach-icon_jrehqo.png' }} />
            <TextInput style={{ width: 350, fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', left: 50 }} placeholder='Search for product' placeholderTextColor={'#777d7e'} />
          </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MedicalScreen')}>
      <View style={{width: 365, height: 72, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#777d7e', borderRadius: 20,top: 15, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5}}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image style={{ width: 50, height: 50, position: 'absolute', top: 10, left: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739208/cpe451/Specialty_Icon_rqljp9.png' }} />
          <Text style={{ fontSize: 24, fontFamily: 'Mitr', fontWeight: '300', top: 12, }}>Medical</Text>
          <Image style={{ width: 25, height: 25, position: 'absolute', top: 20, right: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712740026/cpe451/chevron-down_1_aqhzwn.png' }} />
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('WheyScreen')}>
      <View style={{width: 365, height: 72, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#777d7e', borderRadius: 20,top: 15, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5}}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image style={{ width: 50, height: 50, position: 'absolute', top: 10, left: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739292/cpe451/6d2f3f21364bda97c3a3897ebe11c71c5a485214_mkp0835710dummy-removebg-preview_bzhuqh.png' }} />
          <Text style={{ fontSize: 24, fontFamily: 'Mitr', fontWeight: '300', top: 12, }}>Whey Protein</Text>
          <Image style={{ width: 25, height: 25, position: 'absolute', top: 20, right: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712740026/cpe451/chevron-down_1_aqhzwn.png' }} />
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('VitScreen')}>
      <View style={{width: 365, height: 72, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#777d7e', borderRadius: 20,top: 15,shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5}}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image style={{ width: 50, height: 50, position: 'absolute', top: 10, left: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739285/cpe451/16493922116014_600x600-removebg-preview_hqhobc.png' }} />
          <Text style={{ fontSize: 24, fontFamily: 'Mitr', fontWeight: '300', top: 12, }}>Vitamin</Text>
          <Image style={{ width: 25, height: 25, position: 'absolute', top: 20, right: 15 }} source={{ uri: 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712740026/cpe451/chevron-down_1_aqhzwn.png' }} />
        </View>
      </View>
      </TouchableOpacity>
    
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})