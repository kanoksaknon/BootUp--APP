import { StyleSheet, TextInput, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Med = () => {
    const navigation = useNavigation();
    return (
        <View style={{margin: 20, gap: 20}}>
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
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739258/cpe451/gvc-dual-action-liquid-01_gb4rxz.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Gaviscon</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Dual Action</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>360 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739282/cpe451/423541918_933468148043161_3013785178585197730_n_p5zvzv.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>ยาธาตุน้ำแดง</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>ยาธาตุ ๔</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>60 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739274/cpe451/423735725_1600123517422488_4582670793435787640_n_p4wuut.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>ยาธาตุน้ำขาว</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>กระต่ายบิน</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>60 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739298/cpe451/63abfd23c6387d6eb1503a6a7a3fac22-removebg-preview_vc7tjc.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>ANTACIL</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Gel HH</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>60 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739289/cpe451/0007076-removebg-preview_kyetrj.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>ยาธาตุน้ำแดง</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>ตราเสือดาว</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>60 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712763637/cpe451/ca7ea3ec7a3c81f6ddc49a22ffab6336-removebg-preview_p49ojl.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Gaviscon (แบบซอง)</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Dual Action</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>360 บาท</Text>
                    </View>
                </View> 
            </View>

            
            </ScrollView>

        </View>
       
    )
}

export default Med

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