import React, { useEffect, useRef, useState } from "react";
import {View} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButtom from "../../../components/Button";
import PlusIcon from "../../../assets/svgs/plus.svg";
import PlanningImage from "../../../assets/svgs/planning.svg";
import CustomInput from "../../../components/Input";
import AppHeader from "../../../components/AppHeader";

const CreateRoomCreditPlanningScreen = ({ navigation, route }: any) => {
  return (
    <>
      <ScreenLayout
        style={{ paddingBottom: sizeHelper.calHp(70) }}
        paddingTop={10}
      >
        <AppHeader />
        <View style={{ flex: 1 }}>
          <PlanningImage width={"100%"} />

          <View style={{ gap: sizeHelper.calHp(20) }}>
            <CustomText
              text={`What are you planning Today`}
              size={28}
              fontFam={fonts.InterTight_Medium}
              color={theme.colors.secondry}
              fontWeight={"600"}
            />

            <CustomInput
              borderRadius={sizeHelper.calHp(20)}
              height={250}
              paddingTop={sizeHelper.calHp(20)}
              multiline={true}
              textAlignVertical={"top"}
              placeholder="Describe what do you want to do? (e.g. Where can eat italian nearby?)"
            />
          </View>
        </View>

        <CustomButtom
          textColor={theme.colors.white}
          text="Create Room"
          borderRadius={999}
          onPress={() => navigation.navigate("CreateRoomLaunchScreen")}
          width={"100%"}
        >
          <PlusIcon
            width={sizeHelper.calWp(22)}
            height={sizeHelper.calWp(22)}
            color={theme.colors.white}
          />
        </CustomButtom>
      </ScreenLayout>
    </>
  );
};

export default CreateRoomCreditPlanningScreen;
