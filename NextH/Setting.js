import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Setting = () => {

  const navigation = useNavigation();

  return (
    <View style={{gap: 25, margin: 20}}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50, height: 45,top: 0, borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 30, height: 60}} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712768684/cpe451/goback2_thcvlx.png' }} resizeMode='contain' />
    </TouchableOpacity>

    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{width: 205, height: 201}} source = {{uri : 'https://res.cloudinary.com/doukdigoy/image/upload/v1712487403/cpe451/AvatarsSet_lrrjcp.png'}} />
    </View>

    <View style={{width: 375, height: 205, rowGap: 20 ,backgroundColor: '#FFFFFF' ,borderRadius: 15,shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
        <View style={{ flexDirection: 'row', columnGap: 20, left: 50, top: 25 }}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712932160/setting-personal_j5nkq7.png' }} />
          <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#9D9D9D' }} >Kanoksak Non</Text>
        </View>
        <View style={{ width: 272, height: 1, backgroundColor: '#9D9D9D', left: 50, top: 5 }} />

        <View style={{ flexDirection: 'row', columnGap: 20, left: 50, top: 25 }}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712932159/setting-target_dmzcdk.png' }} />
          <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#9D9D9D' }} >Noun</Text>
        </View>
        <View style={{ width: 272, height: 1, backgroundColor: '#9D9D9D', left: 50, top: 5 }} />

        <Text  style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#11B3CF', left: 170, top: 5 }}>Edit</Text>
        
    </View>

      <View style={{ width: 375, height: 205, rowGap: 20, backgroundColor: '#FFFFFF', borderRadius: 15, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5 }}>
        <View style={{ flexDirection: 'row', columnGap: 20, left: 50, top: 25 }}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712932160/setting-personal_j5nkq7.png' }} />
          <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#9D9D9D' }} >Statistics</Text>
        </View>
        <View style={{ width: 272, height: 1, backgroundColor: '#9D9D9D', left: 50, top: 5 }} />

        <View style={{ flexDirection: 'row', columnGap: 20, left: 50, top: 10 }}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712040139/cpe451/setting-icon_oxcoje.png' }} />
          <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#9D9D9D' }} >Settings</Text>
        </View>
        <View style={{ width: 272, height: 1, backgroundColor: '#9D9D9D', left: 50, top: -5 }} />

        <View style={{ flexDirection: 'row', columnGap: 20, left: 50, top: -5 }}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712932159/setting-target_dmzcdk.png' }} />
          <Text style={{ fontSize: 20, fontFamily: 'Mitr', fontWeight: '200', color: '#9D9D9D' }} >Log out</Text>
        </View>
        <View style={{ width: 272, height: 1, backgroundColor: '#9D9D9D', left: 50, top: -15 }} />

      </View>

    </View>

  )
}

export default Setting

const styles = StyleSheet.create({})