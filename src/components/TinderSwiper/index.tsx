import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";
import HeartIcon from "../../assets/svgs/heart.svg";
import CrossWhite from "../../assets/svgs/crossWhite.svg";
import sizeHelper, { screentHeight } from "../../utils/Helpers";
import RestaurantCard from "../RestaurantCard";
import MovieCard from "../MovieCard";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

const TinderSwiper = ({ data, navigation }: any) => {
  const [cards, setCards] = useState(data);
  const translateX = useRef(new Animated.Value(0)).current;
  const frontScale = useRef(new Animated.Value(1)).current;

  /* ROTATION */
  const rotate = translateX.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ["-15deg", "0deg", "15deg"],
  });

  /* OPACITY */
  const likeOpacity = translateX.interpolate({
    inputRange: [0, SWIPE_THRESHOLD],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nopeOpacity = translateX.interpolate({
    inputRange: [-SWIPE_THRESHOLD, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

 const cardStyle = {
    transform: [
      { translateX },
      { rotate },
      { scale: frontScale }, // 🔥 micro smoothness
    ],
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const x = event.nativeEvent.translationX;

      if (x > SWIPE_THRESHOLD) swipeCard(width);
      else if (x < -SWIPE_THRESHOLD) swipeCard(-width);
      else resetCard();
    }
  };
   const swipeCard = (toValue: number) => {
    Animated.timing(translateX, {
      toValue,
      duration: 220,
      useNativeDriver: true,
    }).start(() => {
      // prepare next card
      frontScale.setValue(0.98);

      setCards((prev: any[]) => prev.slice(1));
      translateX.setValue(0);

      // subtle smooth settle
      Animated.timing(frontScale, {
        toValue: 1,
        duration: 70,
        useNativeDriver: true,
      }).start();
    });
  };

  const resetCard = () => {
    Animated.spring(translateX, {
      toValue: 0,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  if (!cards || cards.length === 0) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.emptyContainer}>
          <CustomText
            text={"No cards available"}
            size={30}
            fontFam={fonts.InterTight_SemiBold}
            color={theme.colors.secondry}
            fontWeight={"600"}
          />
        </View>
      </GestureHandlerRootView>
    );
  }

  const renderItem = ({ item, index }) => {
    const isTop = index === 0;
    const scale = 1 - index * 0.04;
    const translateY = -index * 25;

    return (
      <View
        style={[
          styles.cardWrapper,
          {
            transform: [{ scale }, { translateY }],
            zIndex: cards.length - index,
            elevation: cards.length - index,
          },
        ]}
      >
        {isTop ? (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View style={[styles.card, cardStyle]}>
              {item?.isMovies ? (
                <>
                  <MovieCard
                    item={item}
                    onPress={() =>
                      navigation.navigate("MatchSwipesDetail", {
                        data: item,
                      })
                    }
                  />
                </>
              ) : (
                <>
                  <View style={{width:"100%",backgroundColor:"red"}}>

                <RestaurantCard
                mainStyle={{width:"100%"}}
                  item={item}
                  onPress={() =>
                    navigation.navigate("MatchSwipesDetail", {
                      data: item,
                    })
                  }
                />

              </View>
                </>
              )}
              {/* BASE CARD */}

              {/* NOPE */}
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.Overlay,
                  { opacity: nopeOpacity, backgroundColor: "#FE2F3D50" },
                ]}
              >
                <TouchableOpacity
                  style={{
                    ...styles.circle,
                    backgroundColor: theme.colors.reject,
                  }}
                >
                  <CrossWhite
                    width={sizeHelper.calWp(40)}
                    height={sizeHelper.calWp(40)}
                  />
                </TouchableOpacity>
              </Animated.View>

              {/* LIKE */}
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.Overlay,
                  { opacity: likeOpacity, backgroundColor: "#43CD2E50" },
                ]}
              >
                <TouchableOpacity
                  style={{
                    ...styles.circle,
                    backgroundColor: theme.colors.accept,
                  }}
                >
                  <HeartIcon
                    width={sizeHelper.calWp(50)}
                    height={sizeHelper.calWp(50)}
                  />
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          </PanGestureHandler>
        ) : (
          <View style={styles.card}>
            {item?.isMovies ? (
              <>
                <MovieCard
                  item={item}
                  onPress={() =>
                    navigation.navigate("MatchSwipesDetail", {
                      data: item,
                    })
                  }
                />
              </>
            ) : (
              <>
              <View style={{width:"100%"}}>

                <RestaurantCard
                                mainStyle={{width:"100%"}}

                  item={item}
                  onPress={() =>
                    navigation.navigate("MatchSwipesDetail", {
                      data: item,
                    })
                  }
                />

              </View>
                
              </>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.FlatList
          data={cards.slice(0, 3)}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
          removeClippedSubviews={false}
          style={StyleSheet.absoluteFill}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default TinderSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: sizeHelper.calHp(40),
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "93%",
    height: screentHeight / 1.6,
    borderRadius: 24,
    // overflow: "hidden",
    backgroundColor:theme.colors.white,
    alignSelf: "center",

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: theme.colors.black,
    shadowRadius: 7,
    elevation: 10,
  },
  Overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },

  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    width: sizeHelper.calWp(110),
    height: sizeHelper.calWp(110),
  },
});
