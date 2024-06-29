import { StyleSheet, TextInput, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Whey = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 20, gap: 10}}>
        <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 80, height: 36,}} source={{uri : 'https://res.cloudinary.com/doukdigoy/image/upload/v1712037787/cpe451/B1_ekmzlk.png' }} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 90, height: 30, backgroundColor: '#add2d9', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'Mitr', fontWeight: '200'}}>back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={{width: 50, height: 50, backgroundColor: '#add2d9', borderRadius: 20, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 30, height: 30, top: 3}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712827171/cpe451/1413908_resize_1_c7z3ob.png'}} />
            </TouchableOpacity>
        </View>

        <ScrollView >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739292/cpe451/6d2f3f21364bda97c3a3897ebe11c71c5a485214_mkp0835710dummy-removebg-preview_bzhuqh.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>gold standard</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,700 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739287/cpe451/o_1hh4hum8h11631in932j1g26kn115-removebg-preview_exueum.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>surge</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,500 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739280/cpe451/1579057101_8470_ld6td3.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>low carb</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,200 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739268/cpe451/423686704_955946309434538_454825641308181672_n_vmvwo1.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>strawbery yogurt</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,500 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739266/cpe451/423541897_1095261821754188_5004290453032166997_n_eihmfw.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>chocolate</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,500 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739261/cpe451/428195488_706267145052567_5537862285800835543_n_jfk8pi.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Whey protein</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>thai tea</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>2,212 บาท</Text>
                    </View>
                </View> 
            </View>

            </ScrollView>
    </View>
  )
}

export default Whey

const styles = StyleSheet.create({
  box:{
    width: 175, 
    height: 175, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5
}
})