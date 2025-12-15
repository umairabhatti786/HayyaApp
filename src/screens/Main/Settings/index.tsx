import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";

const SettingsScreen = ({ navigation, route }: any) => {
  return (
    <>
      <ScreenLayout
        style={{
          gap: sizeHelper.calHp(70),
        }}
      ></ScreenLayout>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  
});
