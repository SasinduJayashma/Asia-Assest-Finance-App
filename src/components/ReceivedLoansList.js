import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
 } from "native-base";

export default function HeaderComp( {bodyText , arrowBackExist} ) {
  return (
        <Header noShadow style={styles.header}>
          <Left>
            <Button transparent style={styles.button}>
             <Icon name={arrowBackExist ? 'arrow-back' : ''} style={styles.icon} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{bodyText}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
  );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      color: 'black'
    },
    header: {
      backgroundColor: "white"
    },
    icon: {
      color: 'black'
    }
    
  });
