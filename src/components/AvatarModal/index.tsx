import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import CustomButtom from "../Button";
import CrossIcon from "../../assets/svgs/cross.svg";

const avatars = [
  require("../../assets/images/user.png"),
  require("../../assets/images/user2.png"),
  require("../../assets/images/user2.png"),
  require("../../assets/images/user3.png"),

  require("../../assets/images/user4.png"),
  require("../../assets/images/user4.png"),
  require("../../assets/images/user5.png"),
  require("../../assets/images/user5.png"),

  require("../../assets/images/user4.png"),
  require("../../assets/images/user4.png"),
  require("../../assets/images/user5.png"),
  require("../../assets/images/user5.png"),
];

const AvatarModal = ({ isVisible, setIsVisible }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isVisible}
      backdropColor="rgba(0,0,0,0.1)"
      onBackdropPress={() => setIsVisible(false)}
      onBackButtonPress={() => setIsVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          <View style={styles.header}>
            <CustomText
              text="Select Avatar"
              fontWeight="600"
              fontFam={fonts.InterTight_Bold}
              size={24}
            />

            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <CrossIcon
                width={sizeHelper.calWp(28)}
                height={sizeHelper.calWp(28)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            {avatars.map((item, index) => {
              const isSelected = selectedIndex === index;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.avatarWrapper,
                    isSelected && styles.selectedBorder,
                  ]}
                  onPress={() => setSelectedIndex(index)}
                >
                  <Image source={item} style={styles.avatar} />
                </TouchableOpacity>
              );
            })}
          </View>

          <CustomButtom
            text="Save"
            colors={theme.colors.primary}
            size={26}
            width="100%"
            borderRadius={40}
            onPress={() => setIsVisible(false)}
            style={{ marginTop: sizeHelper.calHp(25) }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AvatarModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: sizeHelper.calWp(40),
    paddingVertical: sizeHelper.calHp(25),
    paddingHorizontal: sizeHelper.calWp(30),
    gap:sizeHelper.calHp(30)
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: sizeHelper.calHp(25),
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: sizeHelper.calHp(25),
  },

  avatarWrapper: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  selectedBorder: {
    borderWidth: 3,
    borderColor: theme.colors.black,
  },
});
