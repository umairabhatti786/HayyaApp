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
import BackArrow from "../../../assets/svgs/backArrow.svg";

   

const ForgotPasswordScreen = ({ navigation }: any) => {

    return (
        <>
            <ScreenLayout
            >
                <Pressable
                    onPress={() => Keyboard.dismiss()}
                    style={{
                        flex: 1,
                        gap: sizeHelper.calHp(50),
                        backgroundColor: theme.colors.background
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
                            text={`Forgot Password?`}
                            size={47}
                            fontFam={fonts.InterTight_Bold}
                            color={theme.colors.secondry}

                            fontWeight={"700"}
                        />


                        <CustomText
                            text={`Please enter your email to get code.`}
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






                        <CustomButtom
                            textColor={theme.colors.white}

                            text="Get code"
                            borderRadius={999}
                            onPress={() => navigation.navigate("VerificationScreen", { isForgot: true })}
                            width={"100%"}
                        />





                    </View>









                </Pressable>



            </ScreenLayout>
        </>
    );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({

    back_container: {
        height: sizeHelper.calWp(40), width: sizeHelper.calWp(40)
    },
    back_icon: {
        height: sizeHelper.calWp(25), width: sizeHelper.calWp(25)
    }
});
