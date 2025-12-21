import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper, { screentHeight, screenWidth } from "../../../utils/Helpers";
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
import Carousel from "react-native-reanimated-carousel";
import Animated from "react-native-reanimated";
import CardSwiper from "../../../components/CardSwiper";
import RestaurantCard from "../../../components/RestaurantCard";
import MovieCard from "../../../components/MovieCard";
import HeartIcon from "../../../assets/svgs/heart.svg";
import CrossWhite from "../../../assets/svgs/crossWhite.svg";
import TinderSwiper from "../../../components/TinderSwiper";

const MatchSwipesSceen = ({ navigation, route }: any) => {
  const carouselRef = useRef<any>(null);

  const moviessData = [{ img: images.movies }, { img: images.restaurants }];

  const DATA = [
    { id: 1, name: "Alex", img: "https://picsum.photos/400/600?1" },
    { id: 2, name: "John", img: "https://picsum.photos/400/600?2" },
    { id: 3, name: "Sara", img: "https://picsum.photos/400/600?3" },
  ];
  const JoinUsers = [
    { id: 1, img: images.user },
    { id: 2, img: images.user2 },
    { id: 3, img: images.user3 },
    { id: 4, img: images.user3 },
    { id: 5, img: images.user3 },
  ];

  let moviesItem = {
    img: images.movies,
    imgHeight: "58%",
    isMovies:true,
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

  let restaurentItem = {
    img: images.restaurants,
    imgHeight: "77%",
    itsRestaurent:true,
    title: "Ze Kitchen Galerie (2Km)",
    rating: "4.7/5 (1940)",
    location: "4 Rue des Grands Augustins, 75006 Paris",
    opening: "Opens 10.00AM",
    price: "€20-€100",

    AvailableRestaurant: [
      { name: "Action", img: images.netflix },
      { name: "Adventure", img: images.prime_video },
      { name: "Family", img: images.family },
    ],
  };

  const HomeHeader = () => {
    return (
      <View style={styles.nearbyCard}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back_container}
          >
                <BackArrow
                    height={sizeHelper.calWp(25)}
                    width={sizeHelper.calWp(25)}
                  />
           
          </TouchableOpacity>
          <View style={{ gap: sizeHelper.calHp(5) }}>
            <CustomText
              text={"Let’s watch a movie this Saturday"}
              size={22}
              fontWeight="700"
            />
            <CustomText text={"Room created by Yessine"} size={20} />
            {/* <View
                style={[styles.differentbg,
                  item.different === "Launched" ? { backgroundColor: theme.colors.primary } : item.different === "Completed" ? { backgroundColor: theme.colors.background } : null
                  ]}>
                <CustomText text={item.different} fontWeight="600" style={{ color: item.different === "Launched" ? theme.colors.white : theme.colors.black }} />
              </View> */}
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {JoinUsers.slice(0, 3).map((item, index) => (
            <Image
              key={item.id}
              source={item.img}
              style={{
                width: sizeHelper.calWp(55),
                height: sizeHelper.calWp(55),
                borderRadius: 999,
                marginLeft: index === 0 ? 0 : -sizeHelper.calWp(25),
              }}
            />
          ))}

          {JoinUsers.length > 3 && (
            <View
              style={{
                width: sizeHelper.calWp(55),
                height: sizeHelper.calWp(55),
                borderRadius: 999,
                marginLeft: -sizeHelper.calWp(25),
                backgroundColor: theme.colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomText
                text={`+${JoinUsers.length - 3}`}
                size={20}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.white}
                fontWeight={"600"}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderItem = ({ item, index }: any) => (
    <View style={styles.swipeCard}></View>
  );
  return (
    <>
      <ScreenLayout
        // style={{ paddingBottom: sizeHelper.calHp(70) }}
        paddingTop={10}
      >
        <HomeHeader />

        <View style={{ flex: 1, paddingHorizontal: sizeHelper.calWp(30) }}>

          <TinderSwiper/>
        
          {/* <RestaurantCard
          mainStyle={{flex:1}}
          item={restaurentItem}
           onPress={() =>
              navigation.navigate("MatchSwipesDetail", { data: restaurentItem })
            }
          /> */}
        </View>

        <View
          style={{
            ...appStyles.row,
            alignSelf: "center",
            gap: "15%",
          }}
        >
          <TouchableOpacity
            style={{ ...styles.circle, backgroundColor: theme.colors.reject }}
          >
            <CrossWhite
              height={sizeHelper.calWp(40)}
              width={sizeHelper.calWp(40)}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.circle, backgroundColor: theme.colors.accept }}
          >
            <HeartIcon
              height={sizeHelper.calWp(50)}
              width={sizeHelper.calWp(50)}
            />
          </TouchableOpacity>
        </View>

        {/* <Carousel
          ref={carouselRef}
          data={moviessData}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.9}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          loop={false}
          layout={"tinder"}
          layoutCardOffset={25} // Set offset as 0 if it disturbs the top positioning
          containerCustomStyle={styles.carouselContainer}
          slideStyle={{ marginTop: 0 }} // Ensure no margin disrupts top alignment
          vertical={false} // Swipe remains horizontal
          scrollEnabled={false} // Disable swipe gestures
          useScrollView={true} // Enhances smoothness of rendering
        /> */}
        {/* <View style={{ flex: 1,  }}>
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
        </View> */}

        {/* <CustomButtom
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
            </CustomButtom> */}
      </ScreenLayout>
    </>
  );
};

export default MatchSwipesSceen;

const styles = StyleSheet.create({
  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },

  carouselContainer: {
    flex: 1, // Adjust height to ensure cards are fully visible
  },

  nearbyCard: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(25),
    borderRadius: sizeHelper.calWp(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: sizeHelper.calHp(25),
  },
  differentbg: {
    backgroundColor: theme.colors.mustard,
    width: sizeHelper.calWp(150),
    padding: sizeHelper.calHp(10),
    borderRadius: sizeHelper.calWp(30),
    alignItems: "center",
    marginTop: sizeHelper.calHp(10),
  },

  swipeCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    marginTop: sizeHelper.calHp(60),
    height: screentHeight / 1.8, // Ensure the card height is manageable within the container
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    width: sizeHelper.calWp(110),
    height: sizeHelper.calWp(110),
  },

  
});
