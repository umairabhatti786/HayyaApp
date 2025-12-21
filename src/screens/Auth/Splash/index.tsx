import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { images } from "../../../assets/images";
import { CommonActions } from "@react-navigation/native";
import SplashLogo from "../../../assets/svgs/splashLogo.svg";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "OnbordingScreen" }],
        })
      );
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <Image style={styles.splash_background} source={images.splash} />
        <View style={styles.inner_logo}>
          <SplashLogo height={sizeHelper.calWp(170)} width={"100%"} />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash_background: {
    width: "100%",
    height: "100%",
  },
  inner_logo: {
    width: "100%",
    height: sizeHelper.calHp(150),
    position: "absolute",
    alignSelf: "center",
    top: "45%",
  },
});
