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
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

const TinderSwiper = () => {
  const [cards, setCards] = useState([
    { id: "1", color: "#0B1C3F" },
    { id: "2", color: "#F5B26B" },
    { id: "3", color: "#7C6CF2" },
    { id: "4", color: "#0B1C3F" },
    { id: "5", color: "#F5B26B" },
    { id: "6", color: "#7C6CF2" },
  ]);

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

  const cardStyle = {
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

    return (
      <View
        style={[
          styles.cardWrapper,
          {
            transform: [{ scale }, { translateY }],
            zIndex: cards.length - index, // 🔥 FIX 1
            elevation: cards.length - index,
          },
        ]}
        pointerEvents={isTop ? "auto" : "none"} // 🔥 FIX 2
      >
        {isTop ? (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.card,
                cardStyle,
                { backgroundColor: item.color },
              ]}
            >
              {/* ❌ NOPE */}
              <Animated.View
                style={[
                  styles.nopeOverlay,
                  { opacity: nopeOpacity },
                ]}
              >
                <CrossWhite
                  width={sizeHelper.calWp(40)}
                  height={sizeHelper.calWp(40)}
                />
              </Animated.View>

              {/* ❤️ LIKE */}
              <Animated.View
                style={[
                  styles.likeOverlay,
                  { opacity: likeOpacity },
                ]}
              >
                <HeartIcon
                  width={sizeHelper.calWp(50)}
                  height={sizeHelper.calWp(50)}
                />
              </Animated.View>
            </Animated.View>
          </PanGestureHandler>
        ) : (
          <View
            style={[
              styles.card,
              { backgroundColor: item.color },
            ]}
          />
        )}
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.FlatList
          data={cards.slice(0, 4)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
          removeClippedSubviews={false}
          contentContainerStyle={{ flex: 1 }}
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
    marginTop:40
  },
  card: {
    width: 320,
    height: 420,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  likeOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme?.colors?.success || "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  nopeOverlay: {
    position: "absolute",
    width: sizeHelper.calWp(110),
    height: sizeHelper.calWp(110),
    borderRadius: 999,
    backgroundColor: "rgba(244,67,54,0.55)",
    justifyContent: "center",
    alignItems: "center",
  },
});
