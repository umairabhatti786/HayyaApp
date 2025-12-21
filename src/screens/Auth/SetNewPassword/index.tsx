import React, { useEffect, useRef, useState } from "react";
import {
  View,
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
import BackArrow from "../../../assets/svgs/backArrow.svg";
import PassowordCelebration from "../../../assets/svgs/passowordCelebration.svg";
import { appStyles } from "../../../utils/GlobalStyles";

const SetNewPasswordScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  return (
    <>
      <ScreenLayout>
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={appStyles.inner_container}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={appStyles.back_container}
          >
            <BackArrow
              height={sizeHelper.calWp(25)}
              width={sizeHelper.calWp(25)}
            />
          </TouchableOpacity>
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={`Set New Password`}
              size={47}
              fontFam={fonts.InterTight_Bold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />

            <CustomText
              text={`Set new password for your account.`}
              size={28}
              fontFam={fonts.InterTight_Regular}
              color={theme.colors.secondry}
              fontWeight={"400"}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(15) }}>
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
        </Pressable>
      </ScreenLayout>
    </>
  );
};

export default SetNewPasswordScreen;
