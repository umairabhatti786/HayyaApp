import 'react-native-reanimated';

import React, { useEffect } from "react";
import RootNavigator from "./src/routes/RootNavigator";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";

const App = ({ children, edges }: any) => {
  // useEffect(() => {
  //   (async () => {
  //     await initTensorFlow();
  //   })();
  // }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
            <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
