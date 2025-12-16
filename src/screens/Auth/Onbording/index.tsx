import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    Platform,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import AppIntroSlider from "react-native-app-intro-slider";
import CustomText from "../../../components/Text";
import SplashLogo from "../../../assets/svgs/splashLogo.svg";
import Intro1 from "../../../assets/svgs/intro1.svg";
import Intro2 from "../../../assets/svgs/intro2.svg";
import Intro3 from "../../../assets/svgs/intro3.svg";

const Slides = [

    {
        key: "One",
        title: "Decide Together Effortlessly",
        des: "Describe what do you want to do? (e.g. Where can we eat Italian nearby?)",
        image:  <Intro1 height={ sizeHelper.calHp(750)} width={"110%"} />
    },
    {
        key: "Two",
        title: "Share what you’re craving",
        des: "Tell us what you’re in the mood for, and we’ll serve up tailored suggestions.",
        image:  <Intro2 height={ sizeHelper.calHp(750)} width={"110%"} />
    },
    {
        key: "Three",
        title: "Swipe. Match. Go!",
        des: "Swipe through options, match with your group, and make plans in seconds.",
        image:  <Intro3 height={ sizeHelper.calHp(750)} width={"110%"} />
    }



]


const OnbordingScreen = ({ navigation }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<AppIntroSlider>(null);

    const onSlideChange = (index: any) => {
        setCurrentIndex(index);
    };



    const renderItem = ({ item }: any) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                {
                    item?.image
                }
                {/* <Image source={item.image} style={{ width: "110%", height: sizeHelper.calHp(750) }}
                    resizeMode="contain"
                /> */}
                <View style={{ gap: sizeHelper.calHp(10),  }}>
                    <CustomText
                        text={item?.title}
                        size={37}
                        style={{ textAlign: "center" }}
                        fontFam={fonts.InterTight_Medium}
                        color={theme.colors.secondry}
                        fontWeight={"600"}
                    />
                    <CustomText
                        text={item?.des}
                        style={{ textAlign: "center" }}
                        size={23}
                        color={theme.colors.secondry}
                    />

                </View>


            </View>
        );
    };
    return (
        <ScreenLayout
            style={{ paddingBottom: sizeHelper.calHp(30) }}
        >
            <View style={{ flex: 1 ,marginTop:sizeHelper.calHp(-40)}}>
                <AppIntroSlider
                    renderItem={renderItem}
                    data={Slides}
                    //   onDone={onDone}
                    ref={flatListRef}
                    onSlideChange={onSlideChange}

                    showNextButton={false}
                    showDoneButton={false}
                    renderPagination={() => null} // Disable dots
                />

                <View style={{ ...styles.dotsContainer, marginBottom: sizeHelper.calHp(Platform.OS=="ios"? 30:100) }}>
                    {Slides.map((it, ind) => {
                        return (
                            <View
                                key={ind.toString()}
                                // Adjust colors to your needs

                                style={{

                                    width:
                                        currentIndex == ind
                                            ? sizeHelper.calWp(20)
                                            : sizeHelper.calWp(13),
                                    height:
                                        currentIndex == ind
                                            ? sizeHelper.calWp(20)
                                            : sizeHelper.calWp(13),
                                    borderRadius: currentIndex == ind
                                        ? sizeHelper.calWp(20)
                                        : sizeHelper.calWp(13),

                                    backgroundColor:
                                        currentIndex == ind
                                            ? theme.colors.primary
                                            : theme.colors.primary + "40",
                                }}
                            />
                            // <View
                            //   key={ind.toString()}
                            //   style={{
                            //     ...styles.dots,
                            //     width:currentIndex == ind?sizeHelper.calWp(90):sizeHelper.calWp(20),
                            //     backgroundColor:
                            //       currentIndex == ind
                            //         ? theme.colors.primary
                            //         : theme.colors.secondry + "15",
                            //   }}
                            // />
                        );
                    })}
                </View>

            </View>




            <View style={{ gap: sizeHelper.calHp(20) }}>

                <CustomButtom
                    textColor={theme.colors.white}

                    text="Get Started"
                    borderRadius={999}
                    onPress={() => navigation.navigate("LoginScreen")}
                    width={"100%"}
                />


                <CustomButtom
                    textColor={theme.colors.secondry}

                    text="Log In"
                    bgColor={theme.colors.secondry + "10"}
                    borderRadius={999}
                    // onPress={() => navigation.navigate("BottomTab")}
                    width={"100%"}
                />

            </View>



        </ScreenLayout>




    )




}

export default OnbordingScreen

const styles = StyleSheet.create({

    dots: {
        width: sizeHelper.calWp(13),
        height: sizeHelper.calWp(13),
        borderRadius: sizeHelper.calWp(13),
    },
    dotsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: sizeHelper.calWp(10),
        alignSelf: "center",
    },

});