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

const HomeScreen = ({ navigation}: any) => {
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
            <TouchableOpacity style={styles.add_container}>
              <PlusIcon
                width={sizeHelper.calWp(25)}
                height={sizeHelper.calWp(25)}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.user_container}>
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
        paddingTop={10}
        backgroundColor={theme.colors.white}
        style={{
          gap: sizeHelper.calHp(50),
          backgroundColor: theme.colors.white,
        }}
      >
        <HomeHeader />

        <View style={{ gap: sizeHelper.calHp(5) }}>
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

        <View style={{ paddingTop: "14%" }}>
          <View style={styles.room_container}>
            <View
              style={{
                gap: sizeHelper.calHp(7),
                width: "80%",
              }}
            >
              <CustomText
                text={`Can’t decide what to do together?`}
                size={35}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.white}
                fontWeight={"700"}
              />

              <CustomText
                text={`Explore restaurants, movies, recipes & many more.`}
                size={25}
                fontFam={fonts.InterTight_Regular}
                color={theme.colors.white}
                fontWeight={"400"}
              />
            </View>

            <CustomButtom
              textColor={theme.colors.black}
              text="Create Room"
              borderColor={theme.colors.white}
              borderWidth={1}
              bgColor={theme.colors.mustard}
              borderRadius={999}
              style={{ marginBottom: sizeHelper.calHp(10) }}
              onPress={() => navigation.navigate("BottomTab")}
              width={"100%"}
            >
              <PlusIcon
                width={sizeHelper.calWp(22)}
                height={sizeHelper.calWp(22)}
              />
            </CustomButtom>
          </View>

          <View style={styles.absoulate_logo}>
            <FastfoodImage width={"110%"} color={theme.colors.white} />
          </View>
        </View>

        <View style={{ gap: sizeHelper.calHp(15) }}>
          <CustomText
            text={`Your group is waiting on you?`}
            size={28}
            fontFam={fonts.InterTight_Medium}
            color={theme.colors.secondry}
            fontWeight={"600"}
          />
          <View
            style={{
              ...appStyles.rowjustify,
              borderRadius: 999,
              backgroundColor: theme.colors.background,
              padding: sizeHelper.calWp(5),
            }}
          >
            <CustomText
              text={`Type Room #ID`}
              size={25}
              style={{ marginLeft: sizeHelper.calWp(30) }}
              color={theme.colors.secondry}
            />

            <CustomButtom
              text="Join Room"
              borderRadius={999}
              paddingHorizontal={sizeHelper.calWp(45)}
              onPress={() => navigation.navigate("CreateRoomCreditScreen")}
              height={70}/>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  user_container: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    borderRadius: sizeHelper.calWp(80),
  },
  add_container: {
    alignItems: "center",
    justifyContent: "center",
    padding: sizeHelper.calWp(25),
    borderRadius: 999,
    backgroundColor: theme.colors.secondry,
    marginLeft: sizeHelper.calWp(20),
  },
  room_container: {
    height: sizeHelper.calHp(410),
    borderRadius: sizeHelper.calWp(40),
    backgroundColor: "#755FE2",
    padding: sizeHelper.calWp(30),
    justifyContent: "flex-end",
    gap: sizeHelper.calHp(25),
  },
  absoulate_logo: {
    position: "absolute",
    width: "100%",
    top: sizeHelper.calHp(-24),
    paddingRight: sizeHelper.calWp(40),
  },
});
