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

const LocationModal = ({ isVisible, setIsVisible }: any) => {
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
              text="Default Location"
              size={25}
              fontWeight="600"
              fontFam={fonts.InterTight_Bold}
            />

            <View
              style={{
                marginTop: sizeHelper.calHp(20),
                gap: sizeHelper.calHp(20),
              }}
            >
              <CustomInput
                label="Address line 1"
                backgroundColor={theme.colors.background}
                placeholder="Add"
                height={68}
              />
              <CustomInput
                label="Address line 2"
                backgroundColor={theme.colors.background}
                placeholder="Add"
                height={68}
              />
              <CustomInput
                label="Postal code"
                backgroundColor={theme.colors.background}
                placeholder="Add"
                height={68}
              />

              <CustomInput
                label="State"
                backgroundColor={theme.colors.background}
                placeholder="Add"
                height={68}
              />
            </View>

            <CustomButtom
              colors={theme.colors.primary}
              text="Save"
              onPress={()=>setIsVisible(false)}
              size={27}
              style={{
                marginTop: sizeHelper.calHp(20),
              }}
              width={"100%"}
              borderRadius={40}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LocationModal;

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
