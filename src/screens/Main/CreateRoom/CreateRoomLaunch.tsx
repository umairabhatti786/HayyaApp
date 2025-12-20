import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
import FastfoodImage from "../../../assets/svgs/fastfood.svg";
import { icons } from "../../../assets/icons";
import CopyIcon from "../../../assets/svgs/copy.svg";
import ShareIcon from "../../../assets/svgs/share.svg";
import ClockIcon from "../../../assets/svgs/clock.svg";
import BackArrow from "../../../assets/svgs/backArrow.svg";

const CreateRoomLaunchScreen = ({ navigation, route }: any) => {

    const [isLaunchLoading, setIsLaunchLoading] = useState(false);
  const joinRoomPeople = [
    { name: "Yessine (You)", id: 1, image: images.user },
    { name: "Maissen", id: 2, image: images.user2 },
    { name: "Sonia", id: 3, image: images.user3 },
    { name: "Fathi", id: 4, image: images.user4 },
    { name: "Lofti", id: 5, image: images.user5 },
  ];


  const HomeHeader = () => {
    return (
      <View
        style={{ ...appStyles.rowjustify, paddingTop: sizeHelper.calHp(10) }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back_container}
        >
           <BackArrow
                    height={sizeHelper.calWp(25)}
                    width={sizeHelper.calWp(25)}
                  />
        </TouchableOpacity>
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
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.user}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout
        style={{
          paddingBottom: sizeHelper.calHp(70),
          gap: sizeHelper.calHp(50),
        }}
        paddingTop={10}
      >
        <HomeHeader />


        <View
          style={{
            // height: sizeHelper.calHp(410),
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
          {/* <CustomButtom
              textColor={theme.colors.black}
              text="Create Room"
              borderColor={theme.colors.white}
              borderWidth={1}
              bgColor={theme.colors.mustard}
              borderRadius={999}
              style={{ marginBottom: sizeHelper.calHp(10) }}
              onPress={() => navigation.navigate("BottomTab")}
              width={"100%"}
            >
              <PlusIcon
                width={sizeHelper.calWp(22)}
                height={sizeHelper.calWp(22)}
                // color={theme.colors.white}
              />
            </CustomButtom> */}
        </View>
        <View style={{flex:1}}>


{
    isLaunchLoading ? (
        <View style={{flex:1,gap:sizeHelper.calHp(15),alignItems:"center",justifyContent:"center"}}>


             <View
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              borderRadius: sizeHelper.calWp(80),
              backgroundColor: theme.colors.mustard,
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            <ClockIcon
                width={sizeHelper.calWp(42)}
                height={sizeHelper.calWp(42)}
              />
          </View>

             <CustomText
            text={`Waiting for Yassine to launch!`}
            size={28}
            fontFam={fonts.InterTight_SemiBold}
            color={theme.colors.secondry}
            fontWeight={"600"}
          />

        </View>
       
           
          
    ) : (
         <View style={{ gap: sizeHelper.calHp(15) }}>
          <CustomText
            text={`Invite people to your room`}
            size={28}
            fontFam={fonts.InterTight_Medium}
            color={theme.colors.secondry}
            fontWeight={"600"}
          />

          <View
          style={appStyles.rowjustify}
          >

            <View
            style={{
              ...appStyles.rowjustify,
              borderRadius: 999,
              backgroundColor: "#FFF5E1",
              padding: sizeHelper.calWp(3),
              width:"60%",
              borderWidth:1,
              borderColor:theme.colors.mustard+"35",
              alignItems:"center",
              justifyContent:"space-between"
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
              alignItems:"center",
              justifyContent:"center"
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
              // onPress={() => navigation.navigate("CreateRoomCreditScreen")}
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
    )
}
            

       

      

         </View>
          <CustomButtom
          textColor={theme.colors.white}
          text={isLaunchLoading?"Start Matching":"Launch"}
          borderRadius={999}
          bgColor={isLaunchLoading?theme.colors.secondry+"20":theme.colors.primary}
          

          onPress={() => {
            setIsLaunchLoading(true);
            setTimeout(() => {
                          setIsLaunchLoading(false);

                navigation.navigate("MatchSwipesSceen");
                
            }, 3000);

          }}
          width={"100%"}
        >
             
            </CustomButtom>
      </ScreenLayout>
    </>
  );
};

export default CreateRoomLaunchScreen;

const styles = StyleSheet.create({
  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
});
