import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper, { screentHeight } from "../../utils/Helpers";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import CustomInput from "../Input";
import CustomButtom from "../Button";
import CrossIcon from "../../assets/svgs/cross.svg";
import Modal from "react-native-modal";
import { images } from "../../assets/images";
import { appStyles } from "../../utils/GlobalStyles";
import PlusIcon from "../../assets/svgs/plus.svg";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "../../assets/svgs/backArrow.svg";
import LogoPartIcon from "../../assets/svgs/logoPart.svg";

const AppHeader = ({
 title,
  onPress,
  isProfile
}: any) => {

    const navigation:any=useNavigation()
  return (
    <>


     <View
        style={{ ...appStyles.rowjustify, paddingTop: sizeHelper.calHp(10) }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back_container}
          >
            <BackArrow
              height={sizeHelper.calWp(25)}
              width={sizeHelper.calWp(25)}
            />
          </TouchableOpacity>

          <CustomText
            text={title ||"History"}
            size={30}
            fontWeight="600"
            fontFam={fonts.InterTight_SemiBold}
          />
        </View>

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

           {!isProfile&&(

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
              
            )}
          
        </View>
      </View>
    
    </>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(30),
    alignItems: "center",
    gap: sizeHelper.calHp(10),
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },

   back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
    justifyContent: "center",
  },
});
