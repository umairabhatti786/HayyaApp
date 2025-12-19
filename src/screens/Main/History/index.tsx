import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { theme } from "../../../utils/Themes";
import LogoIcon from "../../../assets/svgs/logo.svg";
import { fonts } from "../../../utils/Themes/fonts";
import PlusIcon from "../../../assets/svgs/plus.svg";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import { FlatList } from "react-native-gesture-handler";
import Text from "../../../components/Text";

const card = [
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    different: "Pending",
    user: images.user,
    user2: images.user2,
    user3: images.user3,
    next: images.next2,
    number: '+2'

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    different: "Pending",
    user: images.user,
    user2: images.user2,
    user3: images.user3,
    next: images.next2,
    number: '+2'

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    different: "Launched",
    user: images.user,
    user2: images.user2,
    user3: images.user3,
    next: images.next2,
    number: '+2'

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    different: "Launched",
    user: images.user,
    user2: images.user2,
    user3: images.user3,
    next: images.next2,
    number: '+2'

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    different: "Completed",
    user: images.user,
    user2: images.user2,
    user3: images.user3,
    next: images.next2,
    number: '+2'

  },
]
const HistoryScreen = ({ navigation, route }: any) => {
  return (
    <ScreenLayout
      style={{
        gap: sizeHelper.calHp(70),
      }}
    >
      <View style={appStyles.rowjustify}>
        <CustomText
          text={"History"}
          size={46}
          fontWeight="700"
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <View
            style={{
              ...appStyles.row,
              paddingRight: sizeHelper.calWp(5),
              backgroundColor: "#755FE21F",
              paddingLeft: sizeHelper.calWp(15),
              borderRadius: 999,
            }}
          >
            <LogoPartIcon
              width={sizeHelper.calWp(50)}
              height={sizeHelper.calWp(50)}
            />
            <CustomText
              text={`15`}
              size={27}
              fontFam={fonts.InterTight_Medium}
              color={theme.colors.secondry}
              fontWeight={"600"}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: sizeHelper.calWp(25),
                borderRadius: 999,
                backgroundColor: theme.colors.secondry,
                marginLeft: sizeHelper.calWp(20),
              }}
            >
              <PlusIcon
                width={sizeHelper.calWp(25)}
                height={sizeHelper.calWp(25)}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              borderRadius: sizeHelper.calWp(80),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.user}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={card}
        keyExtractor={(item) => item.title}
        renderItem={({ item ,index}) => (
          <View style={styles.card}>
            <View>
              <CustomText
                text={item.title}
                size={25}
                fontWeight="700"
              />
              <CustomText
                text={item.text}
                size={23}

              />
              <View
                style={[styles.differentbg,
                  item.different === "Launched" ? { backgroundColor: theme.colors.primary } : item.different === "Completed" ? { backgroundColor: theme.colors.background } : null
                  ]}>
                <CustomText text={item.different} fontWeight="600" style={{ color: item.different === "Launched" ? theme.colors.white : theme.colors.black }} />
              </View>
            </View>
            <View
              style={{
                marginLeft: sizeHelper.calWp(20),
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Image source={item.user}
                style={{
                  width: sizeHelper.calWp(50),
                  height: sizeHelper.calWp(50)
                }} />
              <Image source={item.user2}
                style={{
                  width: sizeHelper.calWp(50),
                  height: sizeHelper.calWp(50),
                  position: 'absolute',
                  left: sizeHelper.calWp(27),
                }} />
              <Image source={item.user3}
                style={{
                  width: sizeHelper.calWp(50),
                  height: sizeHelper.calWp(50),
                  position: 'absolute',
                  left: sizeHelper.calWp(55),
                }} />
              <CustomText
                text={item.number}
                size={25}
                color="white"
                style={{
                  width: sizeHelper.calWp(50),
                  height: sizeHelper.calWp(50),
                  backgroundColor: theme.colors.primary,
                  borderRadius: sizeHelper.calWp(25),
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  position: 'absolute',
                  left: sizeHelper.calWp(80),
                }}
              />
              <Image source={item.next}
                style={{

                  marginLeft: sizeHelper.calWp(90),
                }}
              />
            </View>
          </View>
        )}
      />

    </ScreenLayout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: sizeHelper.calWp(30),
    borderRadius: sizeHelper.calWp(30),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizeHelper.calHp(25)
  },
  differentbg: {
    backgroundColor: theme.colors.mustard,
    width: sizeHelper.calWp(150),
    padding: sizeHelper.calHp(10), borderRadius: sizeHelper.calWp(30),
    alignItems: 'center',
    marginTop: sizeHelper.calHp(10)
  }
});