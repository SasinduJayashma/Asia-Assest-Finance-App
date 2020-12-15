
import React from 'react';
import { StyleSheet, Text, TouchableOpacity,FlatList, View, SafeAreaView, TextInput } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import LoansList from '../components/LoansList';
import TextFieldComp from '../components/TextFieldComp.js';

import { Icon } from 'react-native-elements';

const logo = require("../../assets/asiaAssestFianaceLogo.jpg");

const DATA = [
    {
      loanId: 'ABC123456',
      loanPrice: '250,000',
      loanDetails: '123',
      loanStatus: 'PENDING'
    },
    {
      loanId: 'ABC123457',
      loanPrice: '300,000',
      loanDetails: '123',
      loanStatus: 'PENDING'
    },
    {
      loanId: 'ABC123458',
      loanPrice: '150,000',
      loanDetails: '123',
      loanStatus: 'PENDING'
    },
    {
        loanId: 'ABC1212123458',
        loanPrice: '150,000',
        loanDetails: '123',
        loanStatus: 'PENDING'
      },
  ];

  const renderItem = ({ item }) => (
    <LoansList key={item.loanId} details={item.loanDetails} price={item.loanPrice} status={item.loanStatus} loanId={item.loanId}/>
  );


export default function loans({TextHeading, TextSubtitle}) {
    return (
        <SafeAreaView  style={styles.container}>
        <HeaderComp bodyText="Asia Assest Finance - Redemption" arrowBackExist={true}/>

        <View style={styles.canvas}>

            <View style={{flex :1, justifyContent: 'center', marginLeft: 30,marginRight: 30,}}>
                    <Text style={styles.textHead}>Your Gold Loans</Text>
                    <Text style={styles.textSub}>Generate quick cash with a Gold Loan</Text>
            </View>
    
            <View style={{flex :2, backgroundColor: '#EDF1F7',}} />

            <View style={{flex :5, marginLeft: 30,marginRight: 30,}}>
                <View style={{flex :1,}}>
                    <Text style={styles.buttonUpperText}>YOUR PENDING LOANS</Text>
                </View>
                <View style={{flex :11,}}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            
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
    },
    tabNavigator: {
      height: 30
    },
    textHead: {
      color: "#2E3092",
      fontSize: 55,
      fontWeight: 'bold',
    },
    textSub: {
      color: "#000",
      fontSize: 24,
      fontWeight: "700",
    },
    buttonUpperText: {
      color: "#2E3092",
      fontSize: 18,
      marginTop:25,
      fontWeight: 'bold',
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
  



