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
import NextArrow from "../../../assets/svgs/nextArrow.svg";
import { fonts } from "../../../utils/Themes/fonts";
import PlusIcon from "../../../assets/svgs/plus.svg";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import { FlatList } from "react-native-gesture-handler";
import Text from "../../../components/Text";

const cardData = [
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    status: "Pending",
     JoinUsers:[
        { id: 1, img: images.user },
        { id: 2, img: images.user2 },
        { id: 3, img: images.user3 },
        { id: 4, img: images.user3 },
        { id: 5, img: images.user3 },
      ],

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    status: "Pending",
    JoinUsers:[
        { id: 1, img: images.user },
        { id: 2, img: images.user2 },
        { id: 3, img: images.user3 },
        { id: 4, img: images.user3 },
        { id: 5, img: images.user3 },
      ],
  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    status: "Launched",
   
     JoinUsers:[
        { id: 1, img: images.user },
        { id: 2, img: images.user2 },
        { id: 3, img: images.user3 },
        { id: 4, img: images.user3 },
        { id: 5, img: images.user3 },
      ],

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    status: "Launched",
    JoinUsers:[
        { id: 1, img: images.user },
        { id: 2, img: images.user2 },
        { id: 3, img: images.user3 },
        { id: 4, img: images.user3 },
        { id: 5, img: images.user3 },
      ],
   

  },
  {
    title: 'Let’s watch a movie this Saturday',
    text: 'Room created by Yessine',
    status: "Completed",

     JoinUsers:[
        { id: 1, img: images.user },
        { id: 2, img: images.user2 },
        { id: 3, img: images.user3 },
        { id: 4, img: images.user3 },
        { id: 5, img: images.user3 },
      ],

  },
]


const HistoryScreen = ({ navigation, route }: any) => {


   const HomeHeader = () => {
    return (
      <View style={appStyles.rowjustify}>
        <CustomText
          text={"History"}
          size={35}
          fontWeight="700"
          fontFam={fonts.InterTight_SemiBold}
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
          <TouchableOpacity
          onPress={()=>navigation.navigate("Profile")}
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              borderRadius: sizeHelper.calWp(80),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.user}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <ScreenLayout
       paddingTop={13}
        style={{
          gap: sizeHelper.calHp(50),
        }}
    >
     <HomeHeader/>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.title}
        renderItem={({ item ,index}:any) => (
         <TouchableOpacity
         activeOpacity={0.5}
         onPress={()=>navigation.navigate("HistoryDetailScreen",{data:item})}
          style={styles.card}>

             <View style={{ gap: sizeHelper.calHp(5) }}>
            <CustomText
              text={"Let’s watch a movie this Saturday"}
              size={22}
              fontWeight="700"
            />
            <CustomText text={"Room created by Yessine"} 
            color={theme.colors.secondry+"80"}
            size={20} />

             <View
                    style={{
                      backgroundColor: item?.status=="Pending"?theme.colors?.mustard:item?.status=="Launched"?theme.colors.primary:  theme.colors.secondry + "10",
                      paddingHorizontal: sizeHelper.calWp(25),
                      paddingVertical: sizeHelper.calHp(8),
                      borderRadius: 999,
                      alignSelf:"flex-start"
                    }}

                  >
                    <CustomText
                      text={item?.status}
                      size={17}
                      color={item?.status=="Launched"?theme.colors.white: theme.colors.secondry}
                    />
                  </View>
                
           
          </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
         
       


           <View style={{ flexDirection: "row", alignItems: "center" }}>
          {item?.JoinUsers?.slice(0, 3).map((item:any, index:any) => (
            <Image
              key={item.id}
              source={item.img}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
                borderRadius: 999,
                marginLeft: index === 0 ? 0 : -sizeHelper.calWp(25),
              }}
            />
          ))}

          {item?.JoinUsers?.length > 3 && (
            <View
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
                borderRadius: 999,
                marginLeft: -sizeHelper.calWp(25),
                backgroundColor: theme.colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomText
                text={`+${item?.JoinUsers?.length - 3}`}
                size={20}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.white}
                fontWeight={"600"}
              />
            </View>
          )}
        </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back_container}
          >
                <NextArrow
                    height={sizeHelper.calWp(25)}
                    width={sizeHelper.calWp(25)}
                  />
           
          </TouchableOpacity>
        </View>

       

       
      </TouchableOpacity>
        )}
      />

    </ScreenLayout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  card: {
      backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(25),
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
    padding: sizeHelper.calHp(10), borderRadius: sizeHelper.calWp(30),
    alignItems: 'center',
    marginTop: sizeHelper.calHp(10)
  },

  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
    justifyContent:"center",
  alignItems:"flex-end"
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
});