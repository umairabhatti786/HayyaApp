import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import BackArrow from "../../../assets/svgs/backArrow.svg";
import CreditLogo from "../../../assets/svgs/creditLogo.svg";
import { ByCreditsData } from "../../../utils/Data";

const BuyMoreCreditsScreen = ({ navigation, route }: any) => {
 

  const ByCarditsCard=({item,index}:any)=>{

    return(
 <View style={styles.creditsbox}>
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={item.credits}
                size={28}
                fontWeight="600"
                fontFam={fonts.InterTight_SemiBold}
              />

              <CustomText
                text={item.cruncey}
                size={20}
                fontFam={fonts.InterTight_Medium}
              />
            </View>
            <CustomButton
              fontWeight={"500"}
              borderRadius={999}
              fontFam={fonts.InterTight_Regular}
              colors={theme.colors.primary}
              width={90}
              height={50}
              text="Buy Now"
              size={22}
            />
          </View>
    )
  }
  return (
    <ScreenLayout>
      <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
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
          text={"My Credits"}
          size={30}
          fontWeight="600"
          fontFam={fonts.InterTight_SemiBold}
        />
      </View>

      <TouchableOpacity style={styles.creditContainer}>
        <View
          style={{ ...appStyles.rowjustify, padding: sizeHelper.calWp(25) }}
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
      </TouchableOpacity>

      <View>
        <CustomText
          text={"Buy more credits"}
          size={31}
          fontWeight="600"
          fontFam={fonts.InterTight_SemiBold}
        />
      </View>

      <FlatList
        data={ByCreditsData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ gap: sizeHelper.calHp(25) }}
        renderItem={ByCarditsCard}
      />
    </ScreenLayout>
  );
};

export default BuyMoreCreditsScreen;

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
  creditsbox: {
    height: sizeHelper.calHp(120),
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(30),
    justifyContent: "space-between",
    padding: sizeHelper.calWp(30),
    flexDirection: "row",
    alignItems: "center",
  },

  creditContainer: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.PalePurple,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    // gap: sizeHelper.calWp(230),
  },
  insidebox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
    justifyContent: "center",
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
});
