import React from 'react';
import { StyleSheet, Dimensions,View,Text } from 'react-native';
import {Thumbnail} from "native-base";

const logo = require("../../assets/asiaAssestFianaceLogo.jpg");

export default function AsiaImageComp({TextHeading, TextSubtitle}) {
  return (
    <View style={{alignItems: "center", marginTop: 50,}}>
        <Thumbnail source={logo} style={styles.image} />
        <Text style={styles.textHead}>{TextHeading}</Text>
        <Text style={styles.textSub}>{TextSubtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      resizeMode: 'center',
      height: 150,
      width: 150,
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
});

