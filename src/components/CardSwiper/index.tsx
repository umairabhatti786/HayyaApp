import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import sizeHelper, { screentHeight } from '../../utils/Helpers';
import { images } from '../../assets/images';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width - 60;
const CARD_HEIGHT = height * 0.75;

const DATA = [
  { id: 1, name: 'Card 1', img: images.restaurants,isRestaurant:true},
  { id: 2, name: 'Card 2', img:images.movies,isMovies:true},
    { id: 2, name: 'Card 2', img:images.movies,isMovies:true},
  { id: 2, name: 'Card 2', img:images.movies,isMovies:true},
  { id: 2, name: 'Card 2', img:images.movies,isMovies:true},
  { id: 2, name: 'Card 2', img:images.movies,isMovies:true},
  { id: 2, name: 'Card 2', img:images.movies,isMovies:true},

 
];

const CardSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={DATA}
        stackSize={7}
        cardIndex={0}
        verticalSwipe={false} // only left/right
        animateCardOpacity
        backgroundColor="transparent"
        showSecondCard

        onSwipedLeft={(cardIndex) => {
          // Alert.alert('Disliked', DATA[cardIndex].name);
        }}
        onSwipedRight={(cardIndex) => {
          // Alert.alert('Liked', DATA[cardIndex].name);
        }}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={card?.img} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{card.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: CARD_WIDTH,
    height:screentHeight/2,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
