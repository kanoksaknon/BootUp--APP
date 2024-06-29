import { StyleSheet, TextInput, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Vit = () => {
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
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739270/cpe451/423542028_399357682718776_3028973948197658177_n_khsjzp.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>A plus lutein</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>460 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739276/cpe451/423619267_2651498195006280_4635329255431002532_n_jgedto.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Zinc plus</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>490 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739285/cpe451/16493922116014_600x600-removebg-preview_hqhobc.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>B-complex</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>460 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739294/cpe451/6449103218894-removebg-preview_luved2.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Gluta-one</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>360 บาท</Text>
                    </View>
                </View> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712739296/cpe451/596402-00-detox-dary-vit-removebg-preview_a5pl1c.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>Kaminchun</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>260 บาท</Text>
                    </View>
                </View> 

                <View style={styles.box}>
                    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 96, height: 96, top: 5}} source = {{uri : 'https://res.cloudinary.com/deusfwrwc/image/upload/v1712763926/cpe451/423599975_932848251464552_8551363972381336272_n_gqwkqd.png'}} />
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 7, left: 10}}>Dary Vit</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '50', top: 3, left: 10}}>D-nite</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <TouchableOpacity style={{width: 76, height: 20, backgroundColor: '#11B3CF', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', left: 10, top: 10}}>
                            <Text style={{fontSize: 7, fontFamily: 'Mitr', fontWeight: '200', color: '#FFF'}}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'Mitr', fontWeight: '200', left: -12}}>1,070 บาท</Text>
                    </View>
                </View> 
            </View>

            
            </ScrollView>
        </View>
    )
}

export default Vit

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