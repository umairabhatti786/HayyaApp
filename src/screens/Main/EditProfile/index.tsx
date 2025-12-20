import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
import { icons } from "../../../assets/icons";

import PassowordCelebration from "../../../assets/svgs/passowordCelebration.svg";
import AppHeader from "../../../components/AppHeader";

const EditProfile = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  return (
    <>
      <ScreenLayout
       style={{
        paddingBottom: sizeHelper.calHp(160),
        flex: 1,
      }}
      paddingTop={10}
      >
         <AppHeader
  
       title={"Edit Profile"} />
          <View style={{ 
            marginTop: sizeHelper.calHp(30),
            gap: sizeHelper.calHp(20),
            flex:1
           }}>
            
            <CustomInput
              label="Full Name"
              borderRadius={999}
              placeholder="Jhon Doe"
            />

            <CustomInput
              label="Email"
              borderRadius={999}
                            backgroundColor={theme.colors.secondry+"20"}

              placeholder="example@mail.com"
            />

            <CustomInput
              label="Create Password"
              borderRadius={999}
              secureTextEntry={showPassowrd}
              onRightSource={() => setShowPassowrd(!showPassowrd)}
              rightSource={!showPassowrd ? icons.eye : icons.eye_off}
              placeholder="Password"
            />

            <CustomInput
              label="Confirm New Password"
              borderRadius={999}
              secureTextEntry={isConfirmPassword}
              onRightSource={() => setIsConfirmPassword(!isConfirmPassword)}
              rightSource={!isConfirmPassword ? icons.eye : icons.eye_off}
              placeholder="Password"
            />
          </View>
        
            
         
         <CustomButtom
            textColor={theme.colors.white}
            text="Save"
            
            borderRadius={999}
            onPress={() => {
              navigation.navigate("CongratulationsScreen", {
                screenDetail: {
                  title: "Congratulations!",
                  des: "Your Password is updated successfully.",
                  btn_txt: "Login",
                  navigate: "LoginScreen",
                  img: <PassowordCelebration />,
                },
              });
            }}
            width={"100%"}
          />
      </ScreenLayout>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
    arrowview: {
        flexDirection: "row",
        alignItems: "center",
        gap: sizeHelper.calWp(25),
    },
    backarrow: {
        height: sizeHelper.calWp(30),
        width: sizeHelper.calWp(30),
        resizeMode: "contain",
    },
});
