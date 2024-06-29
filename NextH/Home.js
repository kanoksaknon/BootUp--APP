import {
  StyleSheet, Text, View, Image, ScrollView,
  TouchableOpacity, TextInput, FlatList, Modal, Pressable,
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import slide from './slide.js';
import dataT from './dataT.js';

const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const dataChoose = dataT.filter(item => item.id === '4');
  const navigation = useNavigation();

  return (
    <View style={{ margin: 20 }}>
      <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 80, height: 36, }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712037787/cpe451/B1_ekmzlk.png' }} />
      </View>

      <ScrollView>
        <View style={{ gap: 25 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#CDCDCD', borderRadius: 50 }}>
            <Image style={{ width: 28, height: 28, }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712040139/cpe451/setting-icon_oxcoje.png' }} />
            <Text style={{ fontSize: 8, fontFamily: 'Mitr', fontWeight: '300', }}>Setting</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', columnGap: 110 }}>
            <View style={{ width: 200, height: 65, alignItems: 'flex-start', flexDirection: 'row', backgroundColor: '#a8dce6', borderRadius: 18, padding: 10, gap: 10 }} >
              <Image style={{ width: 54, height: 54, top: -5 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712041128/cpe451/profile-home_a17cpb.png' }} />
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '200', }}>Kanoksak Non</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '100', color: '#777777' }}>Age 20</Text>
              </View>
            </View>

            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                  <View style={{ backgroundColor: 'white', padding: 20, justifyContent: 'center', borderRadius: 10, width: 365, height: 250 }}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <View style={{ rowGap: 20 }}>
                        <View style={{ width: 180, height: 39, backgroundColor: '#f2c7d4', borderRadius: 50, left: 65, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '200', color: '#F21F61' }}>X  แจ้งปัญหาการใช้งาน</Text>
                        </View>
                        <Text style={{ fontSize: 14, left: 35, color: 'black', fontFamily: 'Mitr', fontWeight: '100', }}>โปรดติดต่อพนักงานหากพบปัญหาการใช้งาน!!</Text>
                        <View style={{ width: 200, height: 40, left: 60, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#F21F61', borderRadius: 50 }}>
                          <Image style={{ width: 20, height: 20, top: 10 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712075000/cpe451/Tel_hs2jzk.png' }} />
                          <Text style={{ fontSize: 18, color: 'black', fontFamily: 'Mitr', fontWeight: '200', top: 5 }}>095-746-4460</Text>
                        </View>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2c7d4', borderRadius: 50, padding: 10 }}>
                <Text style={{ fontSize: 25, fontFamily: 'Mitr', fontWeight: '300', color: '#F21F61' }}>?</Text>
                <Text style={{ fontSize: 8, fontFamily: 'Mitr', fontWeight: '300', color: '#F21F61' }}>Help</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ width: 365, height: 54, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#777d7e', borderRadius: 20 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Image style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 20 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712047194/cpe451/serach-icon_jrehqo.png' }} />
              <TextInput style={{ width: 350, fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', left: 50 }} placeholder='Search' placeholderTextColor={'#777d7e'} />
            </View>
          </View>


          <View style={{ gap: 5 }}>
            <View style={{ width: 365, height: 140, backgroundColor: '#E7F7FA', borderRadius: 20 }}>
              <FlatList
                data={slide}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                    <Image style={{ width: 105, height: 105 }} source={{ uri: item.images }} />
                    <Text style={{ fontSize: 24, fontFamily: 'Mitr', fontWeight: '300' }}>{item.title}</Text>
                  </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
              />

            </View>

          </View>

          <View style={{ gap: 25 }}>

            <View style={{ left: 60, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Cal')}>
                <View style={{ width: 180, height: 50, backgroundColor: '#11B3CF', borderRadius: 15 }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', left: 65, top: 8, color: '#FFFFFF' }}>Food</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', columnGap: 30 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Trends')}>
            <View style={{ width: 170, height: 115, borderColor: '#F21F61', backgroundColor: '#FFFFFF', borderWidth: 2, borderRadius: 20, }}>
                <Text style={{ fontSize: 15, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 7, color: 'black' }}>สำรวจ Trends</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 7, color: 'black' }}>สุขภาพใหม่ๆ</Text>
                <Image style={{ width: 45, height: 60, left: 105, top: -40 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712121824/cpe451/expand-trends_syau5w.png' }} />
                <View style={{ width: 100, height: 25, top: -33, left: 30, borderRadius: 12, backgroundColor: '#E7F7FA', flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', color: 'black', left: 12 }}>Expore</Text>
                  <Image style={{ width: 18, height: 18, left: 15, top: 5 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712123018/cpe451/expore-next_wrq3wp.png' }} />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ width: 170, height: 115, borderColor: '#11B3CF', backgroundColor: '#FFFFFF', borderWidth: 2, borderRadius: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <Text style={{ fontSize: 18, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: 'black' }}>Product</Text>
              <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: 'black' }}>สั่งซื้อผลิตภัณฑ์ </Text>
              <Text style={{ fontSize: 12, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: 'black' }}>อาหารเสริม </Text>
              <Image style={{ width: 38, height: 36.72, left: 105, top: -40 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712122269/cpe451/drug_trlgb6.png' }} />
              <View style={{ width: 80, height: 25, top: -24.5, left: 43, borderRadius: 12, backgroundColor: '#E7F7FA', flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', color: 'black', left: 12 }}>Buy</Text>
                <Image style={{ width: 18, height: 18, left: 15, top: 5 }} source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712123445/cpe451/Buy-next_abz8l1.png' }} />
              </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', columnGap: 100 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#0B8AA0' }}>Trends แนะนำประจำวัน</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Trends')}>
            <Text style={{ fontSize: 18, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#59D4E9' }}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 365, height: 115, backgroundColor: '#E7F7FA', borderRadius: 20 }}>
            <FlatList
              data={dataT}
              renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                    <Image style={{ width: 105, height: 105, borderRadius: 20,borderColor: '#0B8AA0', borderWidth: 2 }} source={{ uri: item.image }} />
                    <View style={{ flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', left: 10 }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Mitr', fontWeight: '300', left: 10 }}>{item.description}</Text>
                  </View>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={true}
              pagingEnabled
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#0B8AA0' }}>Trends แนะนำสำหรับคุณ</Text>
          </View>

          <View style={{ width: 365, height: 115, backgroundColor: '#E7F7FA', borderRadius: 20 }}>
          <FlatList
              data={dataChoose}
              renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                    <Image style={{ width: 105, height: 105, borderRadius: 20,borderColor: '#0B8AA0', borderWidth: 2 }} source={{ uri: item.image }} />
                    <View style={{ flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', left: 10 }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Mitr', fontWeight: '300', left: 10 }}>{item.description}</Text>
                  </View>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#0B8AA0' }}>FAQs</Text>
          </View>

          <View>
            <View style={{ width: 365, height: 380, backgroundColor: '#FFFFFF', borderRadius: 20, borderColor: '#0B8AA0', borderWidth: 1.5 }}>
              <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#0B8AA0' }}>1)แอปพลิเคชันนี้คืออะไร?</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 16, left: 12, color: '#0B8AA0' }}>แอปนี้เป็นแอปพลิเคชันที่จะเข้ามาช่วยให้คุณสามารถดูแล</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 10, left: 12, color: '#0B8AA0' }}>สุขภาพรวมไปถึงช่วยในเรื่องดูแลสุขภาพการกินของคุณ</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 8, left: 12, color: '#0B8AA0' }}>ให้คุณสามารถรู้ข้อมูลของสารอาหารเพื่อวางแผน</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 6, left: 12, color: '#0B8AA0' }}>การดูแลสุขภาพของตัวคุณเองนอกจากนี้ยังมีผลิตภัณฑ์</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 4, left: 12, color: '#0B8AA0' }}>เกี่ยวกับสุขภาพให้คุณได้ซื้อเพื่อให้คุณเข้าถึงสิ่งที่ดูแลเพื่อให้</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: -2, left: 12, color: '#0B8AA0' }}>คุณเข้าถึงสิ่งที่ดูแลสุขภาพของคุณได้ง่ายขึ้น!!</Text>

              <View style={{ width: 350, height: 4, backgroundColor: '#EEEEEE', borderRadius: 20, left: 8, top: 15 }} />

              <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 25, left: 12, color: '#0B8AA0' }}>2)การแนะนำแอพนี้มีความน่าเชื่อมากแค่ไหน</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 30, left: 12, color: '#0B8AA0' }}>ขึ้นอยู่กับการนำไปใช้กับผู้ใช้ซึ่งแอพสามารถแนะนำเป็นแนว</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 30, left: 12, color: '#0B8AA0' }}>ทางแค่นั้นและสามารถบอกเพื่อให้ผู้ใช้เตรียมตัวในสิ่งต่างๆ</Text>

              <View style={{ width: 350, height: 4.5, backgroundColor: '#EEEEEE', borderRadius: 20, left: 8, top: 50 }} />

              <Text style={{ fontSize: 16, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 55, left: 12, color: '#0B8AA0' }}>3)แอปนี้มีการเรียกเก็บเงินหรือไม่?</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 55, left: 12, color: '#0B8AA0' }}>แอพนี้ให้บริการฟรีไม่มีการเก็บเงินแน่นอนเว้นแต่ว่าผู้ใช้</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Mitr', fontWeight: '300', alignItems: 'center', top: 50, left: 12, color: '#0B8AA0' }}>ทำการสั่งของผ่านทางฟีเจอร์ PRODUCT ของทางเรา</Text>
            </View>


          </View>




          <View style={{ width: 365, height: 115 }} />
        </View>


      </ScrollView>
    </View>

  )
}


export default Home

const styles = StyleSheet.create({})

/* #11B3CF */
/* #f2c7d4 */
/* #add2d9 */



