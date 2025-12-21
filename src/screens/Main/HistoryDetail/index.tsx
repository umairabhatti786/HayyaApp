import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
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
import CopyIcon from "../../../assets/svgs/copy.svg";
import ShareIcon from "../../../assets/svgs/share.svg";
import BackArrow from "../../../assets/svgs/backArrow.svg";
import MovieCard from "../../../components/MovieCard";
import AppHeader from "../../../components/AppHeader";

const HistoryDetailScreen = ({ navigation, route }: any) => {
  let data = route?.params?.data;
  const joinRoomPeople = [
    { name: "Yessine (You)", id: 1, image: images.user },
    { name: "Maissen", id: 2, image: images.user2 },
    { name: "Sonia", id: 3, image: images.user3 },
    { name: "Fathi", id: 4, image: images.user4 },
    { name: "Lofti", id: 5, image: images.user5 },
  ];

  let moviesItem = {
    img: images.movies,
    imgHeight: sizeHelper.calHp(300),
    isMovies: true,
    title: "Avatar- The Way of Water (2022)",
    rating: "8.7/10",
    des: "Avatar 2 continues the story of Jake Sully and Neytiri, now parents, as they navigate raising their family on Pandora. A familiar threat from the first film returns, forcing them to leave their home and seek...",
    LeadingActorsData: [
      { title: "Sam Worthington", des: "Jake Sully" },
      { title: "Joy Saldana", des: "Neytiri" },
      { title: "Sigourney Weaver", des: "Kiri" },
      { title: "Kate Winslet", des: "Ronal" },
      { title: "Stephen Lang", des: "Miles Quaritch" },
    ],

    AvailableRestaurant: [
      { name: "Action", img: images.netflix },
      { name: "Adventure", img: images.prime_video },
      { name: "Family", img: images.family },
    ],
  };


  const HistoryDetail = () => {
    return (
      <View style={styles.historyDetailCard}>
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
        </View>

        <View
          style={{
            backgroundColor:
              data?.status == "Pending"
                ? theme.colors?.mustard
                : data?.status == "Launched"
                ? theme.colors.primary
                : theme.colors.secondry + "10",
            paddingHorizontal: sizeHelper.calWp(25),
            paddingVertical: sizeHelper.calHp(8),
            borderRadius: 999,
            alignSelf: "flex-start",
          }}
        >
          <CustomText
            text={data?.status}
            size={17}
            color={
              data?.status == "Launched"
                ? theme.colors.white
                : theme.colors.secondry
            }
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout
        style={{
          paddingBottom: sizeHelper.calHp(70),
          flex:1
        }}
        paddingTop={1}
      >
        <AppHeader
        title={"History"}
      />
        

        <ScrollView
          contentContainerStyle={
            data?.status=="Completed"?
            {
            gap: sizeHelper.calHp(25),
            paddingBottom:sizeHelper.calWp(100),
          }: {
            gap: sizeHelper.calHp(25),
            flex:1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 }}>
            <HistoryDetail />

            <View
              style={{
                borderRadius: sizeHelper.calWp(40),
                backgroundColor: theme.colors.white,
                padding: sizeHelper.calWp(30),
                gap: sizeHelper.calHp(25),
              }}
            >
              <CustomText
                text={`5 have joined`}
                size={25}
                fontFam={fonts.InterTight_SemiBold}
                fontWeight={"600"}
              />

              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(20),
                  flexWrap: "wrap",
                }}
              >
                {joinRoomPeople.map((item) => (
                  <View
                    key={item.id}
                    style={{ alignItems: "center", width: "31%" }}
                  >
                    <View
                      style={{
                        width: sizeHelper.calWp(130),
                        height: sizeHelper.calWp(130),
                        borderRadius: sizeHelper.calWp(130),
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        style={{ width: "100%", height: "100%" }}
                        source={item.image}
                      />
                    </View>
                    <CustomText
                      text={item.name}
                      size={20}
                      color={theme.colors.secondry}
                      style={{ marginVertical: sizeHelper.calHp(8) }}
                      fontFam={fonts.InterTight_Medium}
                      fontWeight={"600"}
                      numberOfLines={1}
                    />
                  </View>
                ))}
              </View>
            </View>
            {data?.status == "Pending" && (
              <View
                style={{
                  gap: sizeHelper.calHp(15),
                  paddingTop: sizeHelper.calHp(30),
                }}
              >
                <CustomText
                  text={`Invite people to your room`}
                  size={28}
                  fontFam={fonts.InterTight_Medium}
                  color={theme.colors.secondry}
                  fontWeight={"600"}
                />

                <View style={appStyles.rowjustify}>
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      borderRadius: 999,
                      backgroundColor: "#FFF5E1",
                      padding: sizeHelper.calWp(3),
                      width: "60%",
                      borderWidth: 1,
                      borderColor: theme.colors.mustard + "35",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomText
                      text={`#F59ID`}
                      size={27}
                      fontFam={fonts.InterTight_Bold}
                      fontWeight="700"
                      style={{ marginLeft: sizeHelper.calWp(30) }}
                      color={theme.colors.secondry}
                    />

                    <View
                      style={{
                        width: sizeHelper.calWp(70),
                        height: sizeHelper.calWp(70),
                        borderRadius: sizeHelper.calWp(70),
                        backgroundColor: theme.colors.mustard,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CopyIcon
                        width={sizeHelper.calWp(42)}
                        height={sizeHelper.calWp(42)}
                      />
                    </View>
                  </View>

                  <CustomButtom
                    text="Share"
                    borderRadius={999}
                    bgColor={theme.colors.secondry}
                    width={"37%"}
                    height={70}
                  >
                    <ShareIcon
                      width={sizeHelper.calWp(42)}
                      height={sizeHelper.calWp(42)}
                      color={theme.colors.white}
                    />
                  </CustomButtom>
                </View>
              </View>
            )}
          </View>

          {data?.status !== "Completed" && (
            <CustomButtom
              textColor={theme.colors.white}
              text={data?.status == "Launched" ? "Start Matching" : "Launch"}
              borderRadius={999}
              style={{ marginBottom: sizeHelper.calHp(80) }}
              bgColor={theme.colors.primary}
             
              width={"100%"}
            />
          )}

          {data?.status == "Completed" && (
            <View
              style={{
              
                padding: sizeHelper.calWp(30),
                backgroundColor: theme.colors.white,
                gap: sizeHelper.calHp(20),
                borderRadius: sizeHelper.calWp(30),
              }}
            >
              <CustomText
                text={"Result"}
                size={27}
                fontWeight="600"
                fontFam={fonts.InterTight_SemiBold}
              />

              <MovieCard
                item={moviesItem}
                onPress={() =>
                  navigation.navigate("MatchSwipesDetail", { data: moviesItem })
                }
              />
            </View>
          )}
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default HistoryDetailScreen;

const styles = StyleSheet.create({
  historyDetailCard: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(25),
    paddingVertical: sizeHelper.calHp(25),
    borderRadius: sizeHelper.calWp(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: sizeHelper.calHp(25),
  },
});
