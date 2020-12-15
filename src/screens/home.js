import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';

import HeaderComp from '../components/HeaderComp';
import TextFieldComp from '../components/TextFieldComp.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import Loans from '../screens/loans.js';
import Pastloans from '../screens/pastloans.js';

function Home() {
    return (<Loans></Loans>);
}

function History() {
    return (<Pastloans></Pastloans>);
}

const Tab = createBottomTabNavigator();

export default function home({navigation}) {
    return (
        <Tab.Navigator style={styles.tabNavisgator}
          tabBarOptions={
            {
              // Default Color is blue you can change it by following props
              activeTintColor: '#2E3092',
              inactiveTintColor: '#8F9BB3',
              // Default Background Color is white you can change it by following props
              activeBackgroundColor: '#ffffff',
              inactiveBackgroundColor: '#ffffff',
              labelStyle: {
                fontSize: 16,
              },

              style: {
                elevation: 0,
                height:50,
                shadowColor: "#ffffff",
              },
            }
          }
          tabNavigator
        >
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='home' color={color} size={size} />
              ),
              
            }}
          />
          <Tab.Screen
            name='History'
            component={History}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='history' color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
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

