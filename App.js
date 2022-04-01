/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import Home from './SRC/Navigation/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainstore from './SRC/Redux/Mainstore'
import { Provider } from 'react-redux';
import Profile from './SRC/Navigation/Profile'
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={Mainstore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerStyle:'red',headerTintColor:'green',headerTitleAlign:'center'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;
