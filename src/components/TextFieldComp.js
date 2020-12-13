import React from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput } from 'react-native';
import { } from "native-base";

export default function TextFieldComp( {InputHeaderText , keyboardType} ) {
  return (
    <View style={styles.view}>
        <Text style={styles.textSub}>{InputHeaderText}</Text>
        <TextInput 
            style={styles.textinput}
            autoCorrect = {true}
            secureTextEntry = {true}
            keyboardType = {keyboardType}
            autoCapitalize = 'none'
            />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textSub: {
      color: "#000",
      fontSize: 18,
      fontWeight: "400"
    },
    textinput: {
        width:'100%',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        marginTop: 6,
        paddingHorizontal: 10,
    }
  });
