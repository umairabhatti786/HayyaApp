import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import CustomInput from "../Input";
import CustomButtom from "../Button";
import CrossIcon from "../../assets/svgs/cross.svg";
import Modal from "react-native-modal";
import { images } from "../../assets/images";
import { appStyles } from "../../utils/GlobalStyles";
import CheckIcon from "../../assets/svgs/check.svg";

const LanguageModal = ({ isVisible, setIsVisible }: any) => {
    const [selectedLanguage,setSelectedLanguage]= useState <any>(null);

    const [Language,setLanguage]= useState([
    {
      id: 1,
      image: images.uk,
      name: "English",
      isSelected: false,
    },
    {
      id: 2,
      image: images.arabia,
      name: "عربي",
      isSelected: false,
    },
    {
      id: 3,
      image: images.itli,
      name: "Русский",
      isSelected: false,
    },
    {
      id: 4,
      image: images.france,
      name: "Française",
      isSelected: false,
    },
  ])
  return (
    <>
      <Modal
        animationIn="slideInUp"
        animationOut={"slideOutDown"}
        isVisible={isVisible}
        backdropColor="rgba(0,0,0,0.1)"
        onBackdropPress={() => setIsVisible(false)}
        onBackButtonPress={() => setIsVisible(false)} // Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                padding: sizeHelper.calWp(10),
              }}
              onPress={() => setIsVisible(false)}
            >
              <CrossIcon
                height={sizeHelper.calWp(30)}
                width={sizeHelper.calWp(30)}
              />
            </TouchableOpacity>
            <CustomText
              text="Select Language"
              size={25}
              fontWeight="600"
              fontFam={fonts.InterTight_Bold}
            />

            <View
              style={{
                marginTop: sizeHelper.calHp(20),
                gap: sizeHelper.calHp(30),
                width: "100%",
              }}
            >
              {Language.map((item, index) => {
                return (
                  <TouchableOpacity
                  key={index.toString()}
                  onPress={()=>setSelectedLanguage(item)}
                    style={{
                      width: "100%",
                      height: sizeHelper.calHp(70),
                      backgroundColor: theme.colors.background,
                      borderRadius: 999,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingHorizontal: sizeHelper.calWp(20),
                      gap: sizeHelper.calWp(20),
                    }}
                  >
                    <View
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}
                    >
                      <Image
                        source={item.image}
                        style={{
                          height: sizeHelper.calWp(50),
                          width: sizeHelper.calWp(50),
                        }}
                      />
                      <CustomText text={item.name} size={28} />
                    </View>
                    {
                        selectedLanguage?.id===item.id && (

                                 <CheckIcon
                // height={sizeHelper.calWp(30)}
                // width={sizeHelper.calWp(30)}
              />
                        )
                    }

                
                  </TouchableOpacity>
                );
              })}
            </View>

            <CustomButtom
              colors={theme.colors.primary}
              text="Save"
              size={27}
              onPress={()=>setIsVisible(false)}
              style={{
                marginTop: sizeHelper.calHp(20),
              }}
              width={"100%"}
              borderRadius={40}
              // height={80}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LanguageModal;

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
    gap:sizeHelper.calHp(10)
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
});
