import { StyleSheet, TextInput, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    return (
        <View style={{margin: 20, gap: 10}}>
            <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 80, height: 36,}} source={{uri : 'https://res.cloudinary.com/doukdigoy/image/upload/v1712037787/cpe451/B1_ekmzlk.png' }} />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 90, height: 30, backgroundColor: '#add2d9', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'Mitr', fontWeight: '200'}}>back</Text>
            </TouchableOpacity>

            <View style={{width: 375, height: 645, backgroundColor: '#FFFFFF', borderRadius: 15, marginBottom: 5}}>
                <ScrollView>
                     

                </ScrollView>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})