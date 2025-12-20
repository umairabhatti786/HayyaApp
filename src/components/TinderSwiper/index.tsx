import React, { useRef } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";
import Animated, { interpolate, Extrapolation } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = height * 0.65;
const STACK_OFFSET = 14;

const DATA = [
  { id: "1", name: "Cafe Aroma", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800" },
  { id: "2", name: "Burger House", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800" },
  { id: "3", name: "Pizza Corner", img: "https://images.unsplash.com/photo-1548365328-9c2f7f08b85d?w=800" },
  { id: "4", name: "Sushi World", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
];

const TinderSwiper = () => {
  const direction = useRef(0);

  /**
   * value:
   *   0   -> current card
   *  -1   -> swiping left
   *   1   -> swiping right
   */
  const animationStyle: TAnimationStyle = (value, index) => {
    "worklet";

    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-width, 0, width],
      Extrapolation.CLAMP
    );

    const rotateZ = interpolate(
      value,
      [-1, 0, 1],
      [-15, 0, 15],
      Extrapolation.CLAMP
    );

    const scale = interpolate(index, [0, 1, 2], [1, 0.95, 0.9]);
    const translateY = index * STACK_OFFSET;

    return {
      transform: [
        { translateX },
        { translateY },
        { rotateZ: `${rotateZ}deg` },
        { scale },
      ],
      zIndex: 100 - index,
    };
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        data={DATA}
        loop={false}
        vertical={false}
        windowSize={4}
        customAnimation={animationStyle}
        onConfigurePanGesture={(g) =>
          g.onChange((e) => {
            "worklet";
            direction.current = Math.sign(e.translationX);
          })
        }
        onSnapToItem={(index) => {
          console.log("Swiped to index:", index);
        }}
        renderItem={({ item }) => (
          <Animated.View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default TinderSwiper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,

    // Android shadow
    elevation: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  label: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
