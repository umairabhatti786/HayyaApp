import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/Login";
import RegisterScreen from "../../screens/Auth/Register";
import VerificationScreen from "../../screens/Auth/Verification";
import ForgotPasswordScreen from "../../screens/Auth/ForgotPassword";
import SetNewPasswordScreen from "../../screens/Auth/SetNewPassword";
import CongratulationsScreen from "../../screens/Main/Congratulations";
import OnbordingScreen from "../../screens/Auth/Onbording"
import SplashScreen from "../../screens/Auth/Splash";
import { CommonActions } from "@react-navigation/native";
import BottomTab from "../BottomTab";
import CreateRoomCreditScreen from "../../screens/Main/CreateRoom/CreateRoomCredit";
import CreateRoomCreditPlanningScreen from "../../screens/Main/CreateRoom/CreateRoomCreditPlanning";
import CreateRoomLaunchScreen from "../../screens/Main/CreateRoom/CreateRoomLaunch";
import CreditsScreen from "../../screens/Main/Credits"
import CreditsScreen2 from "../../screens/Main/Credits2/CreditsScreen2"
import MatchSwipesSceen from "../../screens/Main/MatchSwipes";
import MatchSwipesDetail from "../../screens/Main/MatchSwipesDetail";
import HistoryDetailScreen from "../../screens/Main/HistoryDetail";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
                 <StatusBar translucent backgroundColor="#F1F0F2" barStyle="dark-content" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* <Stack.Screen name="CreditsScreen" component={CreditsScreen} />
      <Stack.Screen name="CreditsScreen2" component={CreditsScreen2} /> */}

      <Stack.Screen name="SplashScreen" component={SplashScreen} />




      <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
      <Stack.Screen name="MatchSwipesSceen" component={MatchSwipesSceen} />
      <Stack.Screen name="MatchSwipesDetail" component={MatchSwipesDetail} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="BottomTab" component={BottomTab} />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />

        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
        <Stack.Screen name="CongratulationsScreen" component={CongratulationsScreen} />
        <Stack.Screen name="CreateRoomCreditScreen" component={CreateRoomCreditScreen} />
                <Stack.Screen name="CreateRoomCreditPlanningScreen" component={CreateRoomCreditPlanningScreen} />
                                <Stack.Screen name="CreateRoomLaunchScreen" component={CreateRoomLaunchScreen} />



        
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
