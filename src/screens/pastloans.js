
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput,FlatList } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import TextFieldComp from '../components/TextFieldComp.js';
import LoansList from '../components/LoansList';


import { Icon } from 'react-native-elements';

const logo = require("../../assets/asiaAssestFianaceLogo.jpg");

const DATA = [
  {
    loanId: 'ABC123456',
    loanPrice: '250,000',
    loanDetails: '123',
    loanStatus: 'GRANTED'
  },
  {
    loanId: 'ABC123457',
    loanPrice: '23,000',
    loanDetails: '123',
    loanStatus: 'REJECTED'
  },
  {
    loanId: 'ABC123458',
    loanPrice: '250,000',
    loanDetails: '123',
    loanStatus: 'GRANTED'
  },
  {
      loanId: 'ABC1212123458',
      loanPrice: '250,000',
      loanDetails: '123',
      loanStatus: 'GRANTED'
    },
];

const renderItem = ({ item }) => (
  <LoansList key={item.loanId} details={item.loanDetails} price={item.loanPrice} status={item.loanStatus} loanId={item.loanId} />
);


export default function pastloans({TextHeading, TextSubtitle}) {
  return (
    <SafeAreaView  style={styles.container}>
    <HeaderComp bodyText="Asia Assest Finance - Redemption" arrowBackExist={true}/>

    <View style={styles.canvas}>

        <View style={{flex :1, justifyContent: 'center', borderStyle: 'solid',borderBottomWidth: 1, borderBottomColor: "#EDF1F7"}}>
                <Text style={styles.textHead}>Past Loans</Text>
                <Text style={styles.textSub}>Below are the loans you've recieved in the past.</Text>
        </View>

        <View style={{flex :7,}}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />         
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
      paddingLeft: 30,
      paddingRight: 30,
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
  

function History() {
    
}



