import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { theme } from "../../../utils/Themes";
import NextArrow from "../../../assets/svgs/nextArrow.svg";
import { fonts } from "../../../utils/Themes/fonts";
import CustomText from "../../../components/Text";
import { FlatList } from "react-native-gesture-handler";
import AppHeader from "../../../components/AppHeader";
import { HistoryData } from "../../../utils/Data";

const HistoryScreen = ({ navigation, route }: any) => {
  const HistoryCard = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate("HistoryDetailScreen", { data: item })
        }
        style={styles.mainCard}
      >
        <View style={{ gap: sizeHelper.calHp(5) }}>
          <CustomText
            text={"Let’s watch a movie this Saturday"}
            size={22}
            fontWeight="700"
          />
          <CustomText
            text={"Room created by Yessine"}
            color={theme.colors.secondry + "80"}
            size={20}
          />

          <View
            style={{
              ...styles.status,
              backgroundColor:
                item?.status == "Pending"
                  ? theme.colors?.mustard
                  : item?.status == "Launched"
                  ? theme.colors.primary
                  : theme.colors.secondry + "10",
            }}
          >
            <CustomText
              text={item?.status}
              size={17}
              color={
                item?.status == "Launched"
                  ? theme.colors.white
                  : theme.colors.secondry
              }
            />
          </View>
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {item?.JoinUsers?.slice(0, 3).map((item: any, index: any) => (
              <Image
                key={item.id}
                source={item.img}
                style={{
                  width: sizeHelper.calWp(45),
                  height: sizeHelper.calWp(45),
                  borderRadius: 999,
                  marginLeft: index === 0 ? 0 : -sizeHelper.calWp(25),
                }}
              />
            ))}

            {item?.JoinUsers?.length > 3 && (
              <View style={styles.join_user_container}>
                <CustomText
                  text={`+${item?.JoinUsers?.length - 3}`}
                  size={20}
                  fontFam={fonts.InterTight_SemiBold}
                  color={theme.colors.white}
                  fontWeight={"600"}
                />
              </View>
            )}
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              ...appStyles.back_container,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <NextArrow
              height={sizeHelper.calWp(25)}
              width={sizeHelper.calWp(25)}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout
      paddingTop={1}
      style={{
        gap: sizeHelper.calHp(50),
      }}
    >
      <AppHeader
        title={"History"}
        isDisableBack
        fontWeight={"700"}
        fontFam={fonts.InterTight_Bold}
      />
      <FlatList
        data={HistoryData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={HistoryCard}
      />
    </ScreenLayout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(25),
    paddingVertical: sizeHelper.calHp(25),
    borderRadius: sizeHelper.calWp(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: sizeHelper.calHp(25),
  },
  status: {
    paddingHorizontal: sizeHelper.calWp(25),
    paddingVertical: sizeHelper.calHp(8),
    borderRadius: 999,
    alignSelf: "flex-start",
  },

  join_user_container: {
    width: sizeHelper.calWp(45),
    height: sizeHelper.calWp(45),
    borderRadius: 999,
    marginLeft: -sizeHelper.calWp(25),
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
