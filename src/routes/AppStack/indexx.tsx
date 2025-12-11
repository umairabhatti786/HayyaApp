import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      


        
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
