import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";
import { images } from "../../../assets/images";
import CustomButtom from "../../../components/Button";
import PlusIcon from "../../../assets/svgs/plus.svg";
import { icons } from "../../../assets/icons";
import PlanningImage from "../../../assets/svgs/planning.svg";
import CustomInput from "../../../components/Input";
import BackArrow from "../../../assets/svgs/backArrow.svg";

const CreateRoomCreditPlanningScreen = ({ navigation, route }: any) => {
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
       paddingTop={10}
       >
        <HomeHeader />
        <View style={{ flex: 1,  }}>
          <PlanningImage
            width={"100%"}
            //   height={sizeHelper.calWp(100)}
          />

          <View style={{ gap: sizeHelper.calHp(20),}}>
            

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
