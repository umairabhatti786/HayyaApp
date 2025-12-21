import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import { theme } from "../../../utils/Themes";
import BackArrow from "../../../assets/svgs/backArrow.svg";
import { appStyles } from "../../../utils/GlobalStyles";

const CongratulationsScreen = ({ navigation, route }: any) => {
  const screenDetail = route?.params?.screenDetail;

  return (
    <>
      <ScreenLayout
        style={{
          gap: sizeHelper.calHp(70),
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
        {screenDetail?.img}

        <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
          <CustomText
            text={screenDetail?.title}
            size={47}
            fontFam={fonts.InterTight_Bold}
            color={theme.colors.secondry}
            fontWeight={"700"}
          />

          <CustomText
            text={screenDetail?.des}
            size={25}
            fontFam={fonts.InterTight_Regular}
            color={theme.colors.secondry}
            fontWeight={"400"}
          />
        </View>
        <CustomButtom
          textColor={theme.colors.white}
          text={screenDetail?.btn_txt}
          borderRadius={999}
          onPress={() => navigation.navigate(screenDetail?.navigate)}
          width={"100%"}
        />
      </ScreenLayout>
    </>
  );
};

export default CongratulationsScreen;
