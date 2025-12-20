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
import PinIcon from "../../assets/svgs/pin.svg";
import TimeIcon from "../../assets/svgs/time.svg";

const RestaurantCard = ({ onPress,item ,mainStyle,imgHeight}: any) => {
  const LeadingActorsData = [
    { title: "Sam Worthington", des: "Jake Sully" },
    { title: "Joy Saldana", des: "Neytiri" },
    { title: "Sigourney Weaver", des: "Kiri" },
    { title: "Kate Winslet", des: "Ronal" },
    { title: "Stephen Lang", des: "Miles Quaritch" },
  ];

  const availableMovies = [
    { name: "Italian", },
    { name: "Chinese", },
  ];

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
          style={{ padding: sizeHelper.calWp(30), gap: sizeHelper.calHp(15),

              backgroundColor: theme.colors.white,
                        borderRadius: sizeHelper.calWp(35),

           }}
        >
            <View style={appStyles.rowjustify}>
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
            //   size={22}
              color={theme.colors.secondry + "70"}
            />
          </View>

            </View>

             <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <PinIcon
              height={sizeHelper.calWp(30)}
              width={sizeHelper.calWp(30)}
                              color={theme.colors.secondry+"50"}
              
            />

            <CustomText
              text={item?.location}
              color={theme.colors.secondry + "70"}
            />
          </View>

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <TimeIcon
              height={sizeHelper.calWp(30)}
              width={sizeHelper.calWp(30)}
            />
                      <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>

                         <CustomText
              text={`Closed`}
            //   size={22}
              color={theme.colors.red}
            />

             <CustomText
              text={item?.opening}
            //   size={22}
              color={theme.colors.secondry + "70"}
            />
</View>

           
          </View>
         
      

             <View
              style={appStyles.rowjustify}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                {availableMovies.map((item, index) => {
                  return (
                    <View
                      style={{
                        backgroundColor: theme.colors.secondry + "10",
                        paddingHorizontal: sizeHelper.calWp(15),
                        paddingVertical:sizeHelper.calHp(10),
                        borderRadius:999
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

 <CustomText
                        text={item?.price}
                        size={22}
                        fontFam={fonts.InterTight_SemiBold}
                        fontWeight="600"
                        color={theme.colors.secondry}
                      />
            </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RestaurantCard;

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
