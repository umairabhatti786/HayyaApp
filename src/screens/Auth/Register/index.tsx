import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
import { icons } from "../../../assets/icons";
import {
  hasLowercaseRegex,
  hasNumberRegex,
  hasUppercaseRegex,
  minLengthRegex,
} from "../../../utils/Regex";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrow from "../../../assets/svgs/backArrow.svg";
import CloseIcon from "../../../assets/svgs/close.svg";
import EnableIcon from "../../../assets/svgs/enable.svg";
const RegisterScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [values, setValues] = useState({
    create_password: "",
  });
  const [strongPasswords, setStrongPasswords] = useState([
    {
      title: "Minimum 8 characters",
      isValidate: false,
      id: 1,
    },
    {
      title: "At least one number (0-9)",
      isValidate: false,
      id: 2,
    },
    {
      title: "At least one UPPERCASE letter",
      isValidate: false,
      id: 3,
    },
    {
      title: "At least one lowercase letter",
      isValidate: false,
      id: 4,
    },
  ]);

  return (
    <>
      <ScreenLayout>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}
          contentContainerStyle={{
            gap: sizeHelper.calHp(50),
          }}
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
              text={`Register yourself`}
              size={47}
              fontFam={fonts.InterTight_Bold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />
            <CustomText
              text={`Create your Account.`}
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
              label="Full Name"
              borderRadius={999}
              placeholder="Jhon Doe"
            />

            <CustomInput
              label="Email"
              borderRadius={999}
              placeholder="example@mail.com"
            />

            <View style={{ gap: sizeHelper.calHp(15) }}>
              <CustomInput
                label="Create Password"
                borderRadius={999}
                value={values.create_password}
                secureTextEntry={showPassowrd}
                onChangeText={(txt: string) => {
                  setValues({ ...values, create_password: txt });
                  setStrongPasswords((prev) =>
                    prev.map((item) => {
                      if (item.id === 1)
                        return {
                          ...item,
                          isValidate: minLengthRegex.test(txt),
                        };
                      if (item.id === 2)
                        return {
                          ...item,
                          isValidate: hasNumberRegex.test(txt),
                        };
                      if (item.id === 3)
                        return {
                          ...item,
                          isValidate: hasUppercaseRegex.test(txt),
                        };
                      if (item.id === 4)
                        return {
                          ...item,
                          isValidate: hasLowercaseRegex.test(txt),
                        };
                      return item;
                    })
                  );
                }}
                onRightSource={() => setShowPassowrd(!showPassowrd)}
                rightSource={!showPassowrd ? icons.eye : icons.eye_off}
                placeholder="Password"
              />

              <View style={{ gap: sizeHelper.calHp(10) }}>
                {strongPasswords.map((item, index) => {
                  return (
                    <View
                      key={index.toString()}
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}
                    >
                      {item?.isValidate ? <EnableIcon /> : <CloseIcon />}

                      <CustomText
                        text={item?.title}
                        fontFam={fonts.InterTight_Regular}
                        color={theme.colors.secondry}
                        fontWeight={"400"}
                      />
                    </View>
                  );
                })}
              </View>

              <CustomInput
                label="Confirm Password"
                borderRadius={999}
                secureTextEntry={isConfirmPassword}
                onRightSource={() => setIsConfirmPassword(!isConfirmPassword)}
                rightSource={!isConfirmPassword ? icons.eye : icons.eye_off}
                placeholder="Password"
              />
            </View>

            <CustomButtom
              textColor={theme.colors.white}
              text="Register"
              borderRadius={999}
              onPress={() => navigation.navigate("VerificationScreen")}
              width={"100%"}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(5),
                alignSelf: "center",
              }}
            >
              <CustomText
                text={"Already have an account?"}
                color={theme.colors.secondry}
                fontWeight="400"
                size={23}
                fontFam={fonts.InterTight_Regular}
              />

              <CustomText
                text={"Login"}
                color={theme.colors.primary}
                fontWeight="600"
                size={25}
                fontFam={fonts.InterTight_SemiBold}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>
    </>
  );
};

export default RegisterScreen;
