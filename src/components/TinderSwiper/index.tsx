import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";

import HeartIcon from "../../assets/svgs/heart.svg";
import CrossWhite from "../../assets/svgs/crossWhite.svg";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import RestaurantCard from "./RestaurantCard";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

const TinderSwiper = ({ data, navigation }) => {
  const [cards, setCards] = useState(data);

  const translateX = useRef(new Animated.Value(0)).current;

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

  const cardTransform = {
    transform: [{ translateX }, { rotate }],
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const x = event.nativeEvent.translationX;

      if (x > SWIPE_THRESHOLD) swipeCard(width);
      else if (x < -SWIPE_THRESHOLD) swipeCard(-width);
      else resetCard();
    }
  };

  const swipeCard = (toValue) => {
    Animated.timing(translateX, {
      toValue,
      duration: 220,
      useNativeDriver: true,
    }).start(() => {
      setCards((prev) => prev.slice(1));
      translateX.setValue(0);
    });
  };

  const resetCard = () => {
    Animated.spring(translateX, {
      toValue: 0,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item, index }) => {
    const isTop = index === 0;
    const scale = 1 - index * 0.04;
    const translateY = -index * 18;

    const CardContent = (
      <>
        {/* ❌ REJECT */}
        <Animated.View
          style={[styles.nopeOverlay, { opacity: nopeOpacity }]}
        >
          <CrossWhite
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        </Animated.View>

        {/* ❤️ LIKE */}
        <Animated.View
          style={[styles.likeOverlay, { opacity: likeOpacity }]}
        >
          <HeartIcon
            width={sizeHelper.calWp(50)}
            height={sizeHelper.calWp(50)}
          />
        </Animated.View>

        {/* ✅ REAL CARD */}
        <RestaurantCard
          mainStyle={{ flex: 1 }}
          item={data}
          onPress={() =>
            navigation.navigate("MatchSwipesDetail", { data: data })
          }
        />
      </>
    );

    return (
      <View
        style={[
          styles.cardWrapper,
          {
            transform: [{ scale }, { translateY }],
            zIndex: cards.length - index,
          },
        ]}
      >
        {isTop ? (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View style={cardTransform}>
              {CardContent}
            </Animated.View>
          </PanGestureHandler>
        ) : (
          <View>{CardContent}</View>
        )}
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.FlatList
          data={cards.slice(0, 3)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  likeOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.LightBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    zIndex: 10,
  },
  nopeOverlay: {
    position: "absolute",
    width: sizeHelper.calWp(110),
    height: sizeHelper.calWp(110),
    borderRadius: 999,
    backgroundColor: "rgba(244,67,54,0.55)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
