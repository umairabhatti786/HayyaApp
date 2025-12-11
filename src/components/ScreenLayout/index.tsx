import React from "react";
import {
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
  StatusBar,
  StatusBarStyle,
  Platform,
} from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: StatusBarStyle; // "light-content" | "dark-content" | "default"
  translucent?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  style,
  backgroundColor = theme.colors.white,
}) => {

  const insets = useSafeAreaInsets();

  return (
    <>
     
      <SafeAreaView style={[styles.background, { backgroundColor,
          paddingTop: sizeHelper.calHp(15),


       }]}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
background: {
    flex: 1,
    width: "100%",
    height: "100%",
    // backgroundColor:'#F1F0F2'
    
  },
  container: {
    flex: 1,
    backgroundColor:"#F1F0F2",
    gap: sizeHelper.calHp(30),
    paddingHorizontal: sizeHelper.calWp(30),

  },
});

export default ScreenLayout;
