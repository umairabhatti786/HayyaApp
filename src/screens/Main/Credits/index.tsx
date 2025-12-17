import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { images } from "../../../assets/images";
import { icons } from "../../../assets/icons";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButton from "../../../components/Button";

const CreditsScreen = ({ navigation, route }: any) => {
  const [isOn, setIsOn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <ScreenLayout style={{ marginTop: sizeHelper.calHp(30) }}>
      
      <View style={styles.arrowview}>
        <TouchableOpacity>
          <Image source={icons.back_arrow} style={styles.backarrow} />
        </TouchableOpacity>
        <CustomText
          text={"My Credits"}
          size={29}
          fontFam={fonts.InterTight_SemiBold}
        />
      </View>

    
      <View style={styles.iconview}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: sizeHelper.calWp(25),
          }}
        >
          <Image source={images.Group1} style={styles.imagegroup1} />
          <View style={{ marginLeft: sizeHelper.calWp(10) }}>
            <CustomText
              text={"15 credits"}
              size={35}
              fontFam={fonts.InterTight_Bold}
            />
            <CustomText text={"Balance"} size={27} />
          </View>
        </View>
      </View>

      <View
             style={{ flexDirection: "row",
             alignItems: "center", 
             marginTop: sizeHelper.calHp(15) }}
      >
        <CustomText
          text={"Select your plan "}
          size={30}
          fontFam={fonts.InterTight_SemiBold}
        />
        <View style={styles.toggleview}>
          <CustomText text={"Monthly"} 
          size={23} 
          fontFam={fonts.InterTight_Medium} />

          <TouchableOpacity
            onPress={() => setIsOn(!isOn)}
            activeOpacity={0.8}
            style={[
              styles.track,
              {
                backgroundColor: "#5A4FE9",
                borderWidth: 1,
                borderColor: isOn
                  ? "#5A4FE9"
                  : theme.colors.secondry + "40",
              },
            ]}
          >
            <View
              style={[
                styles.thumb,
                {
                  alignSelf: isOn ? "flex-end" : "flex-start",
                  backgroundColor: theme.colors.white,
                },
              ]}
            />
          </TouchableOpacity>
          <CustomText text={"Annually"} size={23} fontFam={fonts.InterTight_Medium} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setSelectedPlan("free")}
        activeOpacity={0.8}
        style={[
          styles.freeview,
          {
            borderColor:
              selectedPlan === "free" ? theme.colors.blue : "white",
          },
        ]}
      >
        <View style={styles.freeview2}>
          <CustomText text={"Free"} size={40} fontFam={fonts.InterTight_Bold} />
          <View style={{ top: sizeHelper.calHp(20) }}>
            <CustomButton
              colors={theme.colors.BluePurple}
              width={90}
              height={50}
              text="Select"
              size={22}
            />
          </View>
        </View>
        <CustomText
          text={"10 credits/mon"}
          size={25}
          fontFam={fonts.InterTight_Medium}
        />
      </TouchableOpacity>

      <TouchableOpacity
  onPress={() => {
    setSelectedPlan("premium");
    navigation.navigate("CreditsScreen2"); 
  }}
        activeOpacity={0.8}
        style={[
          styles.premiumView,
          {
            borderColor:
              selectedPlan === "premium" ? theme.colors.blue: "white",
          },
        ]}
      >
        <View>
          <CustomText text={"Premium"} size={32} fontFam={fonts.InterTight_Bold} />
          <CustomText text={"100 credits/mon"} size={24} fontFam={fonts.InterTight_Medium} />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <CustomText text={"€ 45/mon"} size={26} fontFam={fonts.InterTight_SemiBold} />
          <CustomText text={"Billed Annually"} size={20} />
          <View style={{ marginTop: sizeHelper.calHp(10) }}>
            <CustomButton
              colors={theme.colors.BluePurple}
              width={sizeHelper.calWp(140)}
              height={sizeHelper.calHp(70)}
              text="Select"
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={styles.borderline}
      >
        <View style={styles.line} />
        <CustomText text={"or"} size={25} />
        <View style={styles.line} />
      </View>

      <CustomButton
        text="Buy custom credits"
        textColor={theme.colors.black}
        bgColor={theme.colors.white}
        borderRadius={40}
        size={29}
        fontFam={fonts.InterTight_Bold}
      />
    </ScreenLayout>
  );
};

export default CreditsScreen;

const styles = StyleSheet.create({
  arrowview: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(25),
  },
  backarrow: {
    height: sizeHelper.calWp(30),
    width: sizeHelper.calWp(30),
    resizeMode: "contain",
  },
  iconview: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.PalePurple,
    borderRadius: 30,
    justifyContent: "center",
    marginTop: sizeHelper.calHp(25),
  },
  imagegroup1: {
    height: sizeHelper.calWp(90),
    width: sizeHelper.calWp(90),
    resizeMode: "contain",
  },
  toggleview: {
    flexDirection: "row",
    marginLeft: sizeHelper.calWp(90),
    gap: sizeHelper.calWp(15),
    alignItems: "center",
  },
  track: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calHp(43),
    borderRadius: 999,
    padding: 4,
    justifyContent: "center",
  },
  thumb: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  freeview: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: sizeHelper.calHp(25),
    padding: sizeHelper.calWp(30),
    borderWidth: 2,
  },
  freeview2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  premiumView: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    marginTop: sizeHelper.calHp(5),
    padding: sizeHelper.calWp(30),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
  },
  line: {
    width: "45%",
    height: sizeHelper.calHp(1),
    backgroundColor: "#BEBEBE",
  },
  borderline:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: sizeHelper.calHp(25),
  }


});
