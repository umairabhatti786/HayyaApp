import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import sizeHelper, { screentHeight } from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import LogoIcon from "../../../assets/svgs/logo.svg";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CalendarIcon from "../../../assets/svgs/calendar.svg";
import { images } from "../../../assets/images";
import CustomButtom from "../../../components/Button";
import PinIcon from "../../../assets/svgs/pin.svg";
import FastfoodImage from "../../../assets/svgs/fastfood.svg";
import LinearGradient from "react-native-linear-gradient";
import BackArrow from "../../../assets/svgs/backArrow.svg";
import MovieMatch from "../../../assets/svgs/movieMatches.svg";
import RestaurentMatch from "../../../assets/svgs/restaurentMatch.svg";

import MovieCard from "../../../components/MovieCard";
import RestaurantCard from "../../../components/RestaurantCard";

const MatchSwipesDetail = ({ navigation, route }: any) => {
  const data = route?.params?.data;
  console.log("data", data);
  const HomeHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.back_container}
      >
        <BackArrow height={sizeHelper.calWp(25)} width={sizeHelper.calWp(25)} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout
        paddingTop={10}
        style={{
          gap: sizeHelper.calHp(50),
        }}
      >

      
        <View style={{flex:1,

                  gap: sizeHelper.calHp(50),


        }}>
        <HomeHeader />

           <View>
          <View
            // colors={['#755FE2', '#6347EC', ]}

            style={{
              height: screentHeight / 2.8,
              borderRadius: sizeHelper.calWp(40),
              backgroundColor: "#755FE2",
              padding: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(25),
            }}
          >
            <View
              style={{
                gap: sizeHelper.calHp(7),
                paddingTop: "20%",
                alignItems: "center",
              }}
            >
              <CustomText
                text={`It’s a match!`}
                size={35}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.white}
                fontWeight={"700"}
              />

              <CustomText
                text={`Everyone loved this choice.`}
                size={25}
                fontFam={fonts.InterTight_Regular}
                color={theme.colors.white}
                fontWeight={"400"}
              />
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              width: "100%",
              top: sizeHelper.calHp(-54),
              alignItems: "center",
            }}
          >
            {
              data?.isMovies?(
                 <MovieMatch
              //   width={"110%"}
              // height={sizeHelper.calWp(25)}
              color={theme.colors.white}
            />

              ):(

                     <RestaurentMatch
              //   width={"110%"}
              // height={sizeHelper.calWp(25)}
              color={theme.colors.white}
            />

              )
            }
           
          </View>
          {data?.isMovies ? (
            <View
              style={{
                position: "absolute",
                bottom: sizeHelper.calHp(-140),
                width: "100%",
              }}
            >
              <View style={{ paddingHorizontal: sizeHelper.calWp(40) }}>
                <MovieCard item={data} imgHeight={"45%"} />
              </View>
            </View>
          ) : (
            <View
              style={{
                position: "absolute",
                bottom: sizeHelper.calHp(10),
                width: "100%",
              }}
            >
              <View style={{ paddingHorizontal: sizeHelper.calWp(40) }}>
                <RestaurantCard item={data} imgHeight={"70%"} />
              </View>
            </View>
          )}
        </View>

        </View>

        <View
        style={{gap:sizeHelper.calHp(10)}}
        >

          <CustomButtom
              textColor={theme.colors.black}
              text="Make Reservation"
              bgColor={theme.colors.mustard}
              borderRadius={999}
              style={{ marginBottom: sizeHelper.calHp(10) }}
              onPress={() => navigation.navigate("BottomTab")}
              width={"100%"}

            >
              <CalendarIcon
                width={sizeHelper.calWp(35)}
                height={sizeHelper.calWp(35)}
                // color={theme.colors.white}
              />
            </CustomButtom>

             <CustomButtom
              textColor={theme.colors.black}
              text="Directions"
              bgColor={theme.colors.white}
              borderRadius={999}
              style={{ marginBottom: sizeHelper.calHp(10) }}
              onPress={() => navigation.navigate("BottomTab")}
              width={"100%"}

            >
              <PinIcon
                width={sizeHelper.calWp(35)}
                height={sizeHelper.calWp(35)}
                color={theme.colors.secondry}
              />
            </CustomButtom>

        </View>

       

        {/* <View style={{ gap: sizeHelper.calHp(15) }}>
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
            style={{marginLeft:sizeHelper.calWp(30)}}
            color={theme.colors.secondry}
          />

           <CustomButtom
              text="Join Room"
              borderRadius={999}
              paddingHorizontal={sizeHelper.calWp(45)}
              onPress={() => navigation.navigate("CreateRoomCreditScreen")}
                            height={70}

              // width={"50%"}
            ></CustomButtom>

          </View>
        </View> */}
      </ScreenLayout>
    </>
  );
};

export default MatchSwipesDetail;

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
