import React, { useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { theme } from "../../../utils/Themes";
import LogoIcon from "../../../assets/svgs/logo.svg";
import { fonts } from "../../../utils/Themes/fonts";
import PlusIcon from "../../../assets/svgs/plus.svg";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import { FlatList } from "react-native-gesture-handler";
import Text from "../../../components/Text";
import { icons } from "../../../assets/icons";
import AvatarModal from "../../../components/AvatarModal";

const Profile = ({ navigation, route }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <ScreenLayout
            style={{
                gap: sizeHelper.calHp(70),
            }}
        >
            <View style={appStyles.rowjustify}>
                <View style={styles.arrowview}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back_arrow} style={styles.backarrow} />
                    </TouchableOpacity>
                    <CustomText
                        text={"Profile"}
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
            <View>

                <View
                    style={{
                        height: sizeHelper.calHp(300),
                        backgroundColor: "#755FE2",
                        borderRadius: sizeHelper.calWp(30),
                        padding: sizeHelper.calWp(30),
                        flexDirection: "row",
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        marginTop: sizeHelper.calHp(100),
                    }}
                >
                    <View>
                        <CustomText
                            text={"Yessine B."}
                            size={50}
                            fontWeight="700"
                            color="white"
                        />
                        <CustomText
                            text={"example@mail.com"}
                            size={25}
                            color="white"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("EditProfile")}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: sizeHelper.calWp(90),
                            height: sizeHelper.calWp(60),
                            borderRadius: sizeHelper.calWp(32),
                            backgroundColor: theme.colors.black,
                        }}
                    >
                        <CustomText
                            text={'Edit'}
                            size={24}
                            color="white"

                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={images.user}
                        style={{
                            position: 'absolute',
                            bottom: sizeHelper.calHp(225),
                            left: sizeHelper.calWp(30),
                        }}
                    />
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <Image source={images.edit}
                            style={{
                                width: sizeHelper.calWp(55),
                                height: sizeHelper.calWp(55),
                                position: 'absolute',
                                bottom: sizeHelper.calHp(230),
                                left: sizeHelper.calWp(190),
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.iconview}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: sizeHelper.calWp(25),
                    }}
                >
                    <Image source={images.Group1} style={styles.imagegroup1} />
                    <View style={{ marginLeft: sizeHelper.calWp(10) }}>
                        <CustomText
                            text={"15 credits"}
                            size={35}
                            fontFam={fonts.InterTight_Bold}
                        />
                        <CustomText text={"Balance"} size={27} />
                    </View>
                </View>
                <Image source={images.add}
                    style={{
                        width: sizeHelper.calWp(100),
                        height: sizeHelper.calWp(100)
                    }}
                />
            </View>
            <AvatarModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
        </ScreenLayout>
    );
};

export default Profile;

const styles = StyleSheet.create({

    iconview: {
        height: sizeHelper.calHp(150),
        width: "100%",
        backgroundColor: theme.colors.PalePurple,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: sizeHelper.calWp(230),
    },
    imagegroup1: {
        height: sizeHelper.calWp(90),
        width: sizeHelper.calWp(90),
        resizeMode: "contain",

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