import React, { useEffect, useRef, useState } from "react";
import {View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButtom from "../../../components/Button";
import ZeroCreditImage from "../../../assets/svgs/zeroCredit.svg";
import AppHeader from "../../../components/AppHeader";

const CreateRoomCreditScreen = ({ navigation, route }: any) => {
  return (
    <>
      <ScreenLayout
      style={{paddingBottom: sizeHelper.calHp(70)}}
       paddingTop={10}>
        <AppHeader/>
        <View style={{ flex: 1,  }}>
          <ZeroCreditImage
            width={"100%"}
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
