import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper, { screentHeight } from "../../utils/Helpers";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import CustomInput from "../Input";
import CustomButtom from "../Button";
import CrossIcon from "../../assets/svgs/cross.svg";
import Modal from "react-native-modal";
import { images } from "../../assets/images";
import { appStyles } from "../../utils/GlobalStyles";
import StarIcon from "../../assets/svgs/star.svg";

const MovieCard = ({
  isVisible,
  setIsVisible,
  item,
  mainStyle,
  imgHeight,
  onPress,
}: any) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          mainStyle,

          {
            backgroundColor: theme.colors.white,
            borderRadius: sizeHelper.calWp(35),
          },
        ]}
      >
        <Image
          style={{
            width: "100%",
            height: imgHeight || item?.imgHeight,
            borderRadius: sizeHelper.calWp(35),
          }}
          // resizeMode="none"
          source={item?.img}
        />
        <View
          style={{
            padding: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(15),

            backgroundColor: theme.colors.white,
                        borderRadius: sizeHelper.calWp(35),

          }}
        >
          <CustomText
            text={item?.title}
            size={22}
            fontFam={fonts.InterTight_SemiBold}
            color={theme.colors.secondry}
            fontWeight={"600"}
          />
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <StarIcon
              height={sizeHelper.calWp(27)}
              width={sizeHelper.calWp(27)}
            />

            <CustomText
              text={item?.rating}
              size={22}
              color={theme.colors.secondry + "70"}
            />
          </View>
          <CustomText
            text={item?.des}
            size={19}
            numberOfLines={3}
            color={theme.colors.secondry + "50"}
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={`Leading Actors`}
              size={21}
              fontFam={fonts.InterTight_Medium}
              color={theme.colors.secondry}
              fontWeight={"600"}
            />

            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              {item?.LeadingActorsData?.map((item: any, index: any) => {
                return (
                  <View style={{ gap: sizeHelper.calHp(5) }}>
                    <CustomText
                      text={item?.title}
                      size={13}
                      style={{ width: sizeHelper.calWp(120) }}
                      //   fontFam={fonts.InterTight_Light}
                      //   fontWeight="400"
                      color={theme.colors.secondry}
                    />

                    <CustomText
                      text={item?.des}
                      size={12}
                      color={theme.colors.secondry + "70"}
                    />
                  </View>
                );
              })}
            </View>
          </View>

          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              {item?.AvailableRestaurant?.map((item: any, index: any) => {
                return (
                  <View
                    style={{
                      backgroundColor: theme.colors.secondry + "10",
                      paddingHorizontal: sizeHelper.calWp(15),
                      paddingVertical: sizeHelper.calHp(10),
                      borderRadius: 999,
                    }}
                  >
                    <CustomText
                      text={item?.name}
                      size={17}
                      color={theme.colors.secondry}
                    />
                  </View>
                );
              })}
            </View>

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              {item?.AvailableRestaurant.map((item: any, index: any) => {
                return (
                  <Image
                    style={{
                      width: sizeHelper.calWp(55),
                      height: sizeHelper.calWp(55),
                      borderRadius: sizeHelper.calWp(55),
                    }}
                    source={item?.img}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(30),
    alignItems: "center",
    gap: sizeHelper.calHp(10),
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
});
