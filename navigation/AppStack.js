import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen';
import ChatBot from '../screens/ChatBot';

const Stack= createStackNavigator();

function AppStack() {


 
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='bot' component={ChatBot}/> 
    </Stack.Navigator>
  )
}

export default AppStack