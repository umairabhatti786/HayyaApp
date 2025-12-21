import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

const TinderSwiper = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "AVATAR", color: "#0B1C3F" },
    { id: 2, title: "NEXT", color: "#F5B26B" },
    { id: 3, title: "MORE", color: "#7C6CF2" },
    { id: 4, title: "NEXT", color: "#F5B26B" },
    { id: 5, title: "AVATAR", color: "#0B1C3F" },
    { id: 6, title: "MORE", color: "#7C6CF2" },
    { id: 7, title: "NEXT", color: "#F5B26B" },



  ]);

  const translateX = useRef(new Animated.Value(0)).current;

  const rotate = translateX.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ["-15deg", "0deg", "15deg"],
  });

  const cardStyle = {
    transform: [{ translateX }, { rotate }],
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === 5) {
      if (event.nativeEvent.translationX > SWIPE_THRESHOLD) {
        swipeCard(width);
      } else if (event.nativeEvent.translationX < -SWIPE_THRESHOLD) {
        swipeCard(-width);
      } else {
        resetCard();
      }
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
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {cards
        .slice(0, 3)
        .map((item, index) => {
          const isTop = index === 0;

          const scale = 1 - index * 0.04;
          const translateY = -index * 18; // 👈 TOP STACK

          return (
            <View
              key={item.id}
              style={[
                styles.cardWrapper,
                {
                  transform: [{ scale }, { translateY }],
                },
              ]}
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
                    <Text style={styles.text}>{item.title}</Text>
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
        })
        .reverse()}
    </View>
  );
};

export default TinderSwiper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    position: "absolute",
  },
  card: {
    width: 320,
    height: 420,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#8CF0FF",
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: 2,
  },
});
