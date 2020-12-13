import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import AsiaImageComp from '../components/AsiaImageComp.js';
import TextFieldComp from '../components/TextFieldComp.js';


export default function signup2({navigation}) {
  return (
    <SafeAreaView  style={styles.container}>
        <HeaderComp bodyText="Asia Assest Finance - Redemption" arrowBackExist={true}/>
        <AsiaImageComp style={styles.inputView} TextHeading='Verify your email' TextSubtitle="We've sent you a verification code by email. Please check your email to continue."/>
        <View style={styles.textInputView}>
            <TextInput 
                style={styles.textinput}
                autoCorrect = {true}
                secureTextEntry = {true}
                keyboardType = "number-pad"
                autoCapitalize = ' '
                />
        </View>
        <View style={styles.textView}>
          <TouchableOpacity style={styles.verificationCodeTxtTouch}>
              <Text style={styles.verificationCodeTxt}>Didn't get the verification code?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText} onPress={() => navigation.navigate("signup3")}>Verify  &gt;</Text>
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
    paddingVertical: 80,
    width: '100%',
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,    
  },
  textInputView: {
    flex: 2,
    alignContent: 'flex-end',
    justifyContent:'center',
    width: '100%',
    paddingLeft: 140,
    paddingRight: 140,    
  },
  textView: {
    flex: 1,
    paddingVertical: 80,
    width: '100%',
    paddingTop: 20,   
    alignItems: 'center', 
  },
  textinput: {
    width:'100%',
    fontSize:40,
    height: 65,
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    marginTop: 6,
    paddingHorizontal: 10,
    textAlign:"center",
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
  verificationCodeTxt: {
    color: '#9DA8BD',
    fontWeight: 'bold',
    fontSize: 20
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

