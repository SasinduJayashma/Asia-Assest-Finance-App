import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import AsiaImageComp from '../components/AsiaImageComp.js';
import TextFieldComp from '../components/TextFieldComp.js';


export default function signup1({navigation}) {
  return (
    <SafeAreaView  style={styles.container}>
        <HeaderComp bodyText="Asia Assest Finance - Redemption" arrowBackExist={true}/>
        <AsiaImageComp style={styles.inputView} TextHeading='Signup' TextSubtitle="Let's create a new user account."/>
        <View style={styles.inputView}>
          <TextFieldComp InputHeaderText='Your Full Name'></TextFieldComp>
          <TextFieldComp InputHeaderText='Email' keyboardType='email-address'></TextFieldComp>
          <TextFieldComp InputHeaderText='Mobile Number' keyboardType='phone-pad' ></TextFieldComp>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("signup2")}>
            <Text style={styles.loginButtonText}>Next  &gt;</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView >
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputView: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 80,
  },
  forgetPasswordView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  textSub: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 30,
    fontWeight: "700",
  },
  buttonView:{
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  loginButton:{
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
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  button:{
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 14,
    backgroundColor: '#2E3092',
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
});

