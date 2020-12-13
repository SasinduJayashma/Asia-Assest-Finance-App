import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import TextFieldComp from '../components/TextFieldComp.js';


export default function taskcreation({navigation}) {
  return (
    <SafeAreaView  style={styles.container}>
        <HeaderComp bodyText="Asia Assest Finance - Redemption" arrowBackExist={true}/>

        <View style={styles.canvas}>

            <View style={{flex :1, backgroundColor: '#FF5722'}} />
    
            <View style={{flex :2, backgroundColor: '#673AB7'}} />

            <View style={{flex :3, backgroundColor: '#FFEB3B'}} />
            
        </View>
        
    </SafeAreaView >
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  canvas: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textHead: {
    marginTop: 10,
    color: "#2E3092",
    textAlign: 'center',
    fontSize: 55,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingRight: 30,
  },
  textSub: {
    color: "#000",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonUpperText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "400"
  },
  buttonView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  bottomButton:{
    backgroundColor: '#2E3092',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width:2,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  }, 
  loginButton:{
    backgroundColor: '#8F9BB3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width:2,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  bottomButtonView:{
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  textinput: {
    height: 44,
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    marginTop: 10,
    marginBottom:30
}

});

