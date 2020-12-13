import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages Imports
import login from "./src/screens/login";
import signup1 from "./src/screens/signup1";
import signup2 from "./src/screens/signup2";
import signup3 from "./src/screens/signup3";
import signup4 from "./src/screens/signup4";
import postloans from "./src/screens/postloans";
import loans from "./src/screens/loans";
import taskcration from "./src/screens/taskcration";

const {Navigator, Screen} = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Navigator>
          <Screen name='login'  component={login} options={{headerShown: false}}></Screen>
          <Screen name='signup1'  component={signup1} options={{headerShown: false}}></Screen>
          <Screen name='signup2'  component={signup2} options={{headerShown: false}}></Screen>
          <Screen name='signup3'  component={signup3} options={{headerShown: false}}></Screen>
          <Screen name='signup4'  component={signup4} options={{headerShown: false}}></Screen>
          <Screen name='postloans'  component={postloans} options={{headerShown: false}}></Screen>
          <Screen name='loans'  component={loans} options={{headerShown: false}}></Screen>
          <Screen name='taskcration'  component={taskcration} options={{headerShown: false}}></Screen>
        </Navigator>
    </NavigationContainer>
  )
}