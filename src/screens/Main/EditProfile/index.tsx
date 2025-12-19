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
import { images } from "../../../assets/images";
import PlusIcon from "../../../assets/svgs/plus.svg";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";

import BackArrow from "../../../assets/svgs/backArrow.svg";
import PassowordCelebration from "../../../assets/svgs/passowordCelebration.svg";
import { appStyles } from "../../../utils/GlobalStyles";

const EditProfile = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  return (
    <>
      <ScreenLayout>
          <View style={appStyles.rowjustify}>
                <View style={styles.arrowview}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back_arrow} style={styles.backarrow} />
                    </TouchableOpacity>
                    <CustomText
                        text={"Edit Profile"}
                        size={32}
                        fontWeight="700"
                        fontFam={fonts.InterTight_SemiBold}
                    />
                </View>
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <View
                        style={{
                            ...appStyles.row,
                            paddingRight: sizeHelper.calWp(5),
                            backgroundColor: "#755FE21F",
                            paddingLeft: sizeHelper.calWp(15),
                            borderRadius: 999,
                        }}
                    >
                        <LogoPartIcon
                            width={sizeHelper.calWp(50)}
                            height={sizeHelper.calWp(50)}
                        />
                        <CustomText
                            text={`15`}
                            size={27}
                            fontFam={fonts.InterTight_Medium}
                            color={theme.colors.secondry}
                            fontWeight={"600"}
                        />
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                padding: sizeHelper.calWp(25),
                                borderRadius: 999,
                                backgroundColor: theme.colors.secondry,
                                marginLeft: sizeHelper.calWp(20),
                            }}
                        >
                            <PlusIcon
                                width={sizeHelper.calWp(25)}
                                height={sizeHelper.calWp(25)}
                                color={theme.colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: sizeHelper.calWp(80),
                            height: sizeHelper.calWp(80),
                            borderRadius: sizeHelper.calWp(80),
                        }}
                    >
                        <Image
                            style={{ width: "100%", height: "100%" }}
                            source={images.user}
                        />
                    </View>
                </View>
            </View>
          <View style={{ 
            marginTop: sizeHelper.calHp(30),
            gap: sizeHelper.calHp(50),
           }}>
            
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
          <View
          style={{
        flex:1,
        justifyContent:'flex-end',
        marginBottom: sizeHelper.calHp(190),
          }}
          >
            
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
          </View>
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
