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
import { icons } from "../../../assets/icons";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { images } from "../../../assets/images";

const VerificationScreen = ({ navigation, route }: any) => {
    const [value, setValue] = useState("");
    const [isWrongOtp, setIsWrongOtp] = useState(false);
    const isForgot = route?.params?.isForgot

    const ref = useBlurOnFulfill({ value, cellCount: 4 });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

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
                        <Image style={styles.back_icon}
                            source={icons.back_arrow}
                            resizeMode="contain" />


                    </TouchableOpacity>
                    <View style={{ gap: sizeHelper.calHp(10) }}>

                        <CustomText
                            text={`Verify yourself`}
                            size={47}
                            fontFam={fonts.InterTight_Bold}
                            color={theme.colors.secondry}

                            fontWeight={"700"}
                        />
                        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>

                            <CustomText
                                text={`Enter the code sent to`}
                                size={23}
                                fontFam={fonts.InterTight_Regular}
                                color={theme.colors.secondry}

                                fontWeight={"400"}
                            />

                            <CustomText
                                text={`example@mail.com`}
                                size={23}
                                fontFam={fonts.InterTight_SemiBold}
                                color={theme.colors.secondry}

                                fontWeight={"600"}
                            />

                        </View>







                    </View>


                    <View style={{ paddingTop: sizeHelper.calHp(40) }} >
                        <CodeField
                            ref={ref}
                            {...props}
                            caretHidden={true}
                            value={value}
                            onChangeText={(value) => {
                                setValue(value);

                            }}
                            cellCount={4}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <View
                                    onLayout={getCellOnLayoutHandler(index)}
                                    key={index}
                                    style={{
                                        ...styles.codeFieldCell,

                                        backgroundColor: isWrongOtp
                                            ? theme.colors.red + "20"


                                            : theme.colors.white,
                                    }}
                                >
                                    <CustomText
                                        size={30}
                                        color={
                                            isWrongOtp ? theme.colors.red : theme.colors.secondry
                                        }
                                        text={symbol || (isFocused ? <Cursor /> : "0")}
                                    />
                                </View>
                            )}
                        />












                    </View>
                    <View

                        style={{
                            gap: sizeHelper.calHp(32),
                        }}
                    >

                        <CustomButtom
                            textColor={theme.colors.white}
                            text="Confirm"
                            borderRadius={999}
                            onPress={() => {

                                if (isForgot) {
                                    navigation.navigate("SetNewPasswordScreen")

                                    return

                                }

                                navigation.navigate("CongratulationsScreen",{screenDetail:{

                                    title:"Congratulations!",
                                    des:"You are registered successfully.",
                                    btn_txt:"Get Started",
                                    navigate:"LoginScreen",
                                    img:images.celebration

                                }})

                            }
                            }
                            width={"100%"}
                        />

                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                gap: sizeHelper.calWp(5),
                                alignSelf: "center",
                                flexDirection: "row"
                            }}
                        >
                            <CustomText

                                text={"Didn’t receive code?"}
                                color={theme.colors.secondry}
                                fontWeight="400"
                                size={23}
                                fontFam={fonts.InterTight_Regular}
                            />

                            <CustomText

                                text={"Resend"}
                                color={theme.colors.primary}
                                fontWeight="600"
                                size={25}
                                fontFam={fonts.InterTight_SemiBold}
                            />
                        </TouchableOpacity>

                    </View>











                </Pressable>



            </ScreenLayout>
        </>
    );
};

export default VerificationScreen;

const styles = StyleSheet.create({


    back_container: {
        height: sizeHelper.calWp(40), width: sizeHelper.calWp(40)
    },
    back_icon: {
        height: sizeHelper.calWp(25), width: sizeHelper.calWp(25)
    },

    codeFieldRoot: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: sizeHelper.calHp(60),
        gap: sizeHelper.calWp(40),
    },
    codeFieldCell: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: sizeHelper.calHp(90),
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: theme.colors.white
    },
});
