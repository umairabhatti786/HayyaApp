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
import { images } from "../../../assets/images";
import CustomButtom from "../../../components/Button";
import PlusIcon from "../../../assets/svgs/plus.svg";
import FastfoodImage from "../../../assets/svgs/fastfood.svg";
import { icons } from "../../../assets/icons";
import ZeroCreditImage from "../../../assets/svgs/zeroCredit.svg";
import BackArrow from "../../../assets/svgs/backArrow.svg";

const CreateRoomCreditScreen = ({ navigation, route }: any) => {
  const HomeHeader = () => {
    return (
      <View
        style={{ ...appStyles.rowjustify, paddingTop: sizeHelper.calHp(10) }}
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
    );
  };
  return (
    <>
      <ScreenLayout
      style={{paddingBottom: sizeHelper.calHp(70)}}
       paddingTop={10}>
        <HomeHeader />
        <View style={{ flex: 1,  }}>
          <ZeroCreditImage
            width={"100%"}
            //   height={sizeHelper.calWp(100)}
          />

          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <CustomText
              text={`0 credits`}
              size={47}
              fontFam={fonts.InterTight_Bold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />

            <CustomText
              style={{ textAlign: "center" }}
              text={`You haven’t enough credits to create a room. Purchase now to continue.`}
              size={28}
              fontFam={fonts.InterTight_Regular}
              color={theme.colors.secondry}
              fontWeight={"400"}
            />
          </View>
        </View>

        <CustomButtom
          textColor={theme.colors.white}
          text="Get more Credits"
          borderRadius={999}
          onPress={() => navigation.navigate("CreateRoomCreditPlanningScreen")}
          width={"100%"}
        />

       
      </ScreenLayout>
    </>
  );
};

export default CreateRoomCreditScreen;

const styles = StyleSheet.create({
  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
});
