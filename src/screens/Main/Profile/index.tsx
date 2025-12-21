import React, {useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CreditLogo from "../../../assets/svgs/creditLogo.svg";
import PlusLight from "../../../assets/svgs/plusLight.svg";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import AvatarModal from "../../../components/AvatarModal";
import AppHeader from "../../../components/AppHeader";
import EditIcon from "../../../assets/svgs/edit.svg";
import { appStyles } from "../../../utils/GlobalStyles";
const Profile = ({ navigation, route }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ScreenLayout
      style={{
        paddingBottom: sizeHelper.calHp(70),
        flex: 1,
      }}
      paddingTop={1}
    >
      <AppHeader isProfile={true} title={"Profile"} />
      <View>
        <View style={styles.profile_detail}>
          <View
            style={{
              gap: sizeHelper.calHp(10),
              paddingTop: sizeHelper.calHp(90),
            }}
          >
            <CustomText
              text={"Yessine B."}
              size={42}
              fontWeight="600"
              color={theme.colors.white}
              fontFam={fonts.InterTight_SemiBold}
            />
            <CustomText
              text={"example@mail.com"}
              size={22}
              color={theme.colors.white}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={styles.edit_profile_container}
          >
            <CustomText text={"Edit"} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            top: sizeHelper.calHp(-10),
            left: sizeHelper.calWp(30),
          }}
        >
          <Image
            source={images.user}
            style={{
              width: sizeHelper.calWp(200),
              height: sizeHelper.calWp(200),
              borderRadius: sizeHelper.calWp(200),
            }}
          />

          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={styles.edit_container}
          >
            <EditIcon
              height={sizeHelper.calWp(30)}
              width={sizeHelper.calWp(30)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("MyCreditsScreen")}
        style={styles.my_credit}
      >
        <View
          style={{
            ...appStyles.rowjustify,

            padding: sizeHelper.calWp(25),
          }}
        >
          <CreditLogo
            height={sizeHelper.calWp(90)}
            width={sizeHelper.calWp(90)}
          />
          <View
            style={{
              marginLeft: sizeHelper.calWp(15),
              gap: sizeHelper.calHp(5),
            }}
          >
            <CustomText
              text={"15 credits"}
              size={35}
              fontWeight="700"
              fontFam={fonts.InterTight_Bold}
            />

            <CustomText
              text={"Balance"}
              color={theme.colors.secondry + "70"}
              size={27}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: sizeHelper.calWp(27),
            borderRadius: 999,
            backgroundColor: theme.colors.secondry,
          }}
        >
          <PlusLight
            height={sizeHelper.calWp(40)}
            width={sizeHelper.calWp(40)}
          />
        </View>
      </TouchableOpacity>
      <AvatarModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </ScreenLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  my_credit: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.PalePurple,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(230),
  },
  profile_detail: {
    backgroundColor: "#755FE2",
    borderRadius: sizeHelper.calWp(40),
    padding: sizeHelper.calWp(30),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: sizeHelper.calHp(70),
  },

 

  edit_profile_container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(10),

    borderRadius: sizeHelper.calWp(32),
    backgroundColor: theme.colors.black,
  },

  edit_container: {
    width: sizeHelper.calWp(55),
    height: sizeHelper.calWp(55),
    position: "absolute",
    bottom: sizeHelper.calHp(20),
    right: sizeHelper.calWp(-20),
    borderRadius: sizeHelper.calWp(55),
    backgroundColor: theme.colors.secondry,
    alignItems: "center",
    justifyContent: "center",
  },
});
