import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Get = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711973367/Get-otp_scrk5h.png'}} 
      />
      <Text style={styles.signUpText}>Sign Up</Text>
      <Text style={styles.infoText}>
        Please enter your Email Username {"\n"}and Password
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </View>
      <Image
        style={styles.bootLogo}
        source={{uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1711973396/Boot-icon3_on0hxb.png'}}
      />
      <View style={[styles.searchBar, { top: 402 }]}>
        <Text style={styles.searchBarText}>Enter username</Text>
      </View>
      <View style={[styles.searchBar, { top: 467 }]}>
        <Text style={styles.searchBarText}>Enter email</Text>
      </View>
      <View style={[styles.searchBar, { top: 532 }]}>
        <Text style={styles.searchBarText}>Enter password</Text>
      </View>
    </View>
  );
};

export default Get;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 365,
    height: 274,
    alignSelf: 'center',
    marginTop: 36,
  },
  signUpText: {
    alignSelf: 'center',
    color: '#11B3CF',
    fontSize: 20,
    fontFamily: 'Mitr',
    fontWeight: '400',
    marginTop: 16,
  },
  infoText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    fontFamily: 'Mitr',
    fontWeight: '300',
    marginTop: 16,
  },
  buttonContainer: {
    width: 150,
    height: 48,
    backgroundColor: '#11B3CF',
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Mitr',
    fontWeight: '300',
  },
  bootLogo: {
    width: 80,
    height: 36,
    alignSelf: 'center',
    marginTop: 14,
  },
  searchBar: {
    height: 56,
    width: '80%',
    padding: 16,
    alignSelf: 'center',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#777777',
    marginTop: 16,
  },
  searchBarText: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 12,
    fontFamily: 'Mitr',
    fontWeight: '300',
  },
});

/*
เรียงจามช่องว่างเลยย มีปัญหาอัพลง cloudinary
source={require('./logoBoot/Start/Get-otp.png')}
source={require('./logoBoot/Start/Boot-icon3.png')}

*/