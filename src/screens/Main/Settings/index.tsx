import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import NextArrow from "../../../assets/svgs/nextArrow.svg";
import LocationModal from "../../../components/LocationModal";
import LanguageModal from "../../../components/LanguageModal";
import AppHeader from "../../../components/AppHeader";

const SettingsScreen = ({ navigation }: any) => {
  const [isNotificantionOn, setIsNotificantionOn] = useState(true);
  const [isEmailOn, setIsEmailOn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

  const SettingCard = ({ isOn, onPress, title, ischildren, children }: any) => {
    return (
      <View
        style={styles.setting_card}
      >
        <CustomText
          text={title}
          size={23}
          fontWeight="600"
          fontFam={fonts.InterTight_Medium}
        />
        {!ischildren ? (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
              styles.track,
              {
                backgroundColor: isOn ? "#5A4FE9" : "#ccc",
                borderWidth: 1,
                borderColor: isOn ? "#5A4FE9" : theme.colors.secondry + "40",
              },
            ]}
          >
            <View
              style={[
                styles.thumb,
                {
                  alignSelf: isOn ? "flex-end" : "flex-start",
                  backgroundColor: isOn ? theme.colors.white : "#79747E",
                },
              ]}
            />
          </TouchableOpacity>
        ) : (
          children
        )}
      </View>
    );
  };



  return (
    <>

       <ScreenLayout
      paddingTop={1}
      style={{
        gap: sizeHelper.calHp(50),
      }}
    >
      <AppHeader
        title={"Settings"}
        isDisableBack
        fontWeight={"700"}
        fontFam={fonts.InterTight_Bold}
      />
        <View style={{ gap: sizeHelper.calHp(25) }}>
          <SettingCard
            isOn={isNotificantionOn}
            title={"Push Notifications"}
            onPress={() => setIsNotificantionOn(!isNotificantionOn)}
          />

          <SettingCard
            title={"Email Notifications"}
            isOn={isEmailOn}
            onPress={() => setIsEmailOn(!isEmailOn)}
          />

          <SettingCard
            title={"Default Location"}
            ischildren={true}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
            >

              <CustomText
                text={`+ Add`}
                textDecorationLine="underline"
                size={23}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.primary}
                fontWeight={"600"}
              />

            </TouchableOpacity>
          </SettingCard>

          <SettingCard
            title={"Language"}
            ischildren={true}
          >
            <TouchableOpacity
              onPress={() => setIsLanguageModalVisible(true)}
            >

              <CustomText
                text={`English`}
                textDecorationLine="underline"
                size={23}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.primary}
                fontWeight={"600"}
              />

            </TouchableOpacity>
          </SettingCard>


          <SettingCard
            title={"Contact Support"}
            ischildren={true}
          >
            <TouchableOpacity>

              <NextArrow
                width={sizeHelper.calWp(25)}
                height={sizeHelper.calWp(25)}
                color={theme.colors.white}
              />

            </TouchableOpacity>
          </SettingCard>
        </View>

        <TouchableOpacity
          style={{ alignSelf: "center", paddingVertical: sizeHelper.calHp(30) }}
        >

          <CustomText
            text={`Logout`}
            size={23}
            fontFam={fonts.InterTight_SemiBold}
            color={theme.colors.logout}
            fontWeight={"600"}
          />

        </TouchableOpacity>
      </ScreenLayout>
      <LocationModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
      />

      <LanguageModal
        isVisible={isLanguageModalVisible}
        setIsVisible={setIsLanguageModalVisible}
      />

    </>

  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  track: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calHp(43),
    borderRadius: 999,
    padding: 4,
    justifyContent: "center",
  },
  thumb: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
    borderRadius: 14,
    backgroundColor: theme.colors.white,
  },
  setting_card:{
          width: "100%",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(20),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: sizeHelper.calWp(20),
          height: sizeHelper.calHp(80)
        }
});
