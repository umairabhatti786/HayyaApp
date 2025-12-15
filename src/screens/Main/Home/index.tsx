import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import LogoIcon from "../../../assets/svgs/logo.svg";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";
import PlusIcon from "../../../assets/svgs/plus.svg";
import { images } from "../../../assets/images";

const HomeScreen = ({ navigation, route }: any) => {
  const HomeHeader = () => {
    return (
      <View style={appStyles.rowjustify}>
        <LogoIcon
          width={sizeHelper.calWp(220)}
          height={sizeHelper.calWp(100)}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <View
            style={{
              ...appStyles.row,
              paddingRight: sizeHelper.calWp(5),
              backgroundColor: "#755FE21F",
              paddingLeft:sizeHelper.calWp(15),
              borderRadius: 999,
            }}
          >
            <LogoPartIcon
              width={sizeHelper.calWp(50)}
              height={sizeHelper.calWp(50)}
            />
            <CustomText
              text={`15`}
              size={28}
            //   fontFam={fonts.InterTight_Medium}
              color={theme.colors.secondry}
            //   fontWeight={"600"}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: sizeHelper.calWp(25),
                borderRadius: 999,
                backgroundColor: theme.colors.secondry,
                marginLeft:sizeHelper.calWp(20)
              }}
            >

                 <PlusIcon
              width={sizeHelper.calWp(25)}
              height={sizeHelper.calWp(25)}
               color={
                   theme.colors.white
                  }
            />

            </TouchableOpacity>
          </View>
          <View
          style={{width:sizeHelper.calWp(80),height:sizeHelper.calWp(80),borderRadius:sizeHelper.calWp(80),}}
          >
            <Image
            style={{width:"100%",height:"100%"}}
            source={images.user}
            />

          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout
        paddingTop={10}
        style={{
          gap: sizeHelper.calHp(50),
        }}
      >
        <HomeHeader />

         <View style={{ gap: sizeHelper.calHp(10) }}>

                        <CustomText
                            text={`Hi Yessine 👋`}
                            size={47}
                            fontFam={fonts.InterTight_Bold}
                            color={theme.colors.secondry}

                            fontWeight={"700"}
                        />


                        <CustomText
                            text={`What are you up for today?`}
                            size={30}
                            fontFam={fonts.InterTight_Regular}
                            color={theme.colors.secondry}

                            fontWeight={"400"}
                        />




                    </View>
      </ScreenLayout>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
