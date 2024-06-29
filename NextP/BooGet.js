 //Boot + Get_start
import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BooGet = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Boot" component={Boot} />

      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  </NavigationContainer>
);

function Boot({ navigation }) {
  //ทำหน้าbootสมจริง
  const [booted, setBooted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBooted(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    !booted ? (
      <React.Fragment>
        <View style={styles.container}>
          <View style={{ width: 132, height: 149, left: 18, top: 331, position: 'absolute' }}>
            <Image style={[{ width: 121, height: 141, left: 11, top: 0, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1 }, styles.BoI]} source={require('./logoBoot/blur-logo.png')} />
            <Image style={[{ width: 121, height: 141, left: 0, top: 8, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25 }, styles.BoI]} source={require('./logoBoot/Bootlogo.png')} />
          </View>
          <Image style={{ width: 180, height: 11, left: 173, top: 448, position: 'absolute' }} source={require('./logoBoot/Health.png')} />
          <Text style={[{ left: 164, top: 391 }, styles.fontsL]}>B</Text>
          <Text style={[{ left: 196, top: 391 }, styles.fontsL]}>o</Text>
          <Text style={[{ left: 226, top: 391 }, styles.fontsL]}>o</Text>
          <Text style={[{ left: 256, top: 391 }, styles.fontsL]}>t</Text>
          <Text style={[{ left: 278, top: 394 }, styles.fontsL]}>U</Text>
          <Text style={[{ left: 312, top: 391 }, styles.fontsL]}>p</Text>
          <Text style={[{ left: 338, top: 394 }, styles.fontsL]}>!</Text>
        </View>
      </React.Fragment>
    ) : (
      <View style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'white' }}>
        <View style={{ width: 1440, height: 844, left: 0, top: 0, position: 'absolute', backgroundColor: 'rgba(17, 179, 207, 0.30)' }}></View>
        <View style={{ width: 342, height: 300, left: 35, top: 514, position: 'absolute', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.2, shadowRadius: 10, borderRadius: 18 }} />
        <Text style={[{ width: 277, left: 70, top: 588, fontSize: 14 }, styles.Text1]}>มุ่งมั่นที่จะทำให้คุณหันมาดูแลใส่ใจสุขภาพ และการกิน เพื่อสุขภาพที่ดีต่อตัวคุณเอง</Text>
        <Text style={[{ width: 277, left: 70, top: 400, fontSize: 20 }, styles.Text1]}>ติดตามสุขภาพและตรวจสอบคุณ ภาพการกินได้ด้วยตัวของคุณเอง</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ width: 150, height: 48, padding: 10, left: 127, top: 742, position: 'absolute', backgroundColor: '#11B3CF', borderRadius: 47, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Mitr', fontWeight: '300' }} >Get Started</Text>
        </TouchableOpacity>
        <Image style={{ width: 342, height: 342, left: 35, top: 43, position: 'absolute', borderRadius: 50 }} source={require('./logoBoot/Start/get-start.png')} />
        <Image style={{ width: 80, height: 36, left: 165, top: 520, position: 'absolute' }} source={require('./logoBoot/Start/Boot-icon.png')} />
        <View style={{ left: 79, top: 670, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ width: 79, height: 33, position: 'relative', flexDirection: 'row' }}>
            <Image style={[{ width: 33, height: 33, left: 46 }, styles.icons]} source={require('./logoBoot/Start/mon.png')} />
            <Image style={[{ width: 33, height: 33, left: 32 }, styles.icons]} source={require('./logoBoot/Start/malee.png')} />
            <Image style={[{ width: 33, height: 33, left: 10 }, styles.icons]} source={require('./logoBoot/Start/DJ.png')} />
          </View>
          <Text style={styles.Text2}>2000+ Users like our BootUp!</Text>
        </View>
      </View>
    )
  );
}
const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default BooGet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden'
  },

  BoI: {
    position: 'absolute',
    shadowColor: 'black',
    shadowRadius: 4,
    borderRadius: 20
  },

  fontsL: {
    position: 'absolute',
    textAlign: 'center',
    color: '#106293',
    fontSize: 40,
    fontFamily: 'Inter',
    fontWeight: '900',
    lineHeight: 50,
    overflow: 'hidden'
  },

  Text1: {
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Mitr',
    fontWeight: '300',
  },

  Text2: {
    textAlign: 'center',
    left: 5,
    color: '#11B3CF',
    fontSize: 10,
    fontFamily: 'Mitr',
    fontWeight: '300',
  },

  icons: {
    top: 0,
    position: 'absolute',
    borderRadius: 9999
  },

  use: {
    position: 'absolute',
    backgroundColor: 'white'
  },

  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white'
  },

  container2: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },

  Signin: {
    left: 164,
    top: 332,
    position: 'absolute',
    textAlign: 'center',
    color: '#11B3CF',
    fontSize: 20,
    fontFamily: 'Mitr',
    fontWeight: '400'
  },

  Username: {
    width: 277,
    left: 58,
    top: 369,
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    fontFamily: 'Mitr',
    fontWeight: '300'
  },

  colorcon: {
    width: 150,
    height: 48,
    padding: 10,
    left: 126,
    top: 742,
    position: 'absolute',
    backgroundColor: '#11B3CF',
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  frame: {
    position: 'absolute',
    borderRadius: 18,
    overflow: 'hidden',
    borderColor: '#777777',
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 56,
    padding: 16,
  },

  frame1: {
    width: 99,
    height: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },

  here: {
    fontSize: 10,
    fontFamily: 'Mitr',
    fontWeight: '300'
  },

  Enter: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 12,
    fontFamily: 'Mitr',
    fontWeight: '300'
  },
})