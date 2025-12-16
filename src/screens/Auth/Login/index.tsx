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
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/images";
import { icons } from "../../../assets/icons";
import GoogleIcon from "../../../assets/svgs/google.svg";
import AppleIcon from "../../../assets/svgs/apple.svg";
import BackArrow from "../../../assets/svgs/backArrow.svg";

const LoginScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);

  return (
    <>
      <ScreenLayout>
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={{
            flex: 1,
            gap: sizeHelper.calHp(50),
            backgroundColor: theme.colors.background,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back_container}
          >
                <BackArrow
                    height={sizeHelper.calWp(25)}
                    width={sizeHelper.calWp(25)}
                  />
           
          </TouchableOpacity>
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={`Welcome Back!`}
              size={47}
              fontFam={fonts.InterTight_Bold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />

            <CustomText
              text={`Login to your Account.`}
              size={28}
              fontFam={fonts.InterTight_Regular}
              color={theme.colors.secondry}
              fontWeight={"400"}
            />
          </View>
          <View
            style={{
              gap: sizeHelper.calHp(32),
            }}
          >
            <CustomInput
              label="Email"
              borderRadius={999}
              placeholder="example@mail.com"
            />

            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomInput
                label="Password"
                borderRadius={999}
                secureTextEntry={showPassowrd}
                onRightSource={() => setShowPassowrd(!showPassowrd)}
                rightSource={!showPassowrd ? icons.eye : icons.eye_off}
                placeholder="Password"
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
                // style={{ alignSelf: "center", padding: sizeHelper.calWp(10) }}
              >
                <CustomText
                  text={"Forgot Password?"}
                  fontWeight="600"
                  color={theme.colors.primary}
                  size={20}
                  fontFam={fonts.InterTight_Medium}
                />
              </TouchableOpacity>
            </View>

            <CustomButtom
              textColor={theme.colors.white}
              text="Login"
              borderRadius={999}
              onPress={() => navigation.navigate("BottomTab")}
              width={"100%"}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
              style={{
                alignItems: "center",
                gap: sizeHelper.calWp(5),
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <CustomText
                text={"Don’t have an account?"}
                color={theme.colors.secondry}
                fontWeight="400"
                size={23}
                fontFam={fonts.InterTight_Regular}
              />

              <CustomText
                text={"Signup"}
                color={theme.colors.primary}
                fontWeight="600"
                size={25}
                fontFam={fonts.InterTight_SemiBold}
              />
            </TouchableOpacity>
            <View style={{ gap: sizeHelper.calHp(35) }}>
              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(15),
                  marginTop: sizeHelper.calHp(50),
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: sizeHelper.calHp(2),
                    backgroundColor: "#01010110",
                  }}
                />
                <CustomText
                  text={"or"}
                  fontWeight="400"
                  color={theme.colors.secondry}
                  size={27}
                  fontFam={fonts.InterTight_Regular}
                />
                <View
                  style={{
                    flex: 1,
                    height: sizeHelper.calHp(2),
                    backgroundColor: "#01010110",
                  }}
                />
              </View>

              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <TouchableOpacity style={styles.authButton}>
                  <GoogleIcon
                    height={sizeHelper.calWp(55)}
                    width={sizeHelper.calWp(55)}
                  />

                  <CustomText
                    text={"Login with Google"}
                    fontWeight="500"
                    color={theme.colors.secondry}
                    size={20}
                    fontFam={fonts.InterTight_Regular}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.authButton}>

                       <AppleIcon
                    height={sizeHelper.calWp(55)}
                    width={sizeHelper.calWp(55)}
                  />
                 

                  <CustomText
                    text={"Login with Apple"}
                    fontWeight="500"
                    color={theme.colors.secondry}
                    size={20}
                    fontFam={fonts.InterTight_Regular}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      </ScreenLayout>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  authButton: {
    flex: 1,
    height: sizeHelper.calHp(73),
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(20),
    paddingHorizontal: sizeHelper.calWp(30),
    borderRadius: 999,
    backgroundColor: theme.colors.white,
  },
  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
});
