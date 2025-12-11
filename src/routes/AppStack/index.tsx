import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
import RegisterScreen from "../../screens/Auth/Register";
import VerificationScreen from "../../screens/Auth/Verification";
import ForgotPasswordScreen from "../../screens/Auth/ForgotPassword";
import SetNewPasswordScreen from "../../screens/Auth/SetNewPassword";
import CongratulationsScreen from "../../screens/Main/Congratulations";
const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
                 <StatusBar translucent backgroundColor="#F1F0F2" barStyle="dark-content" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />

        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
        <Stack.Screen name="CongratulationsScreen" component={CongratulationsScreen} />

        
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
