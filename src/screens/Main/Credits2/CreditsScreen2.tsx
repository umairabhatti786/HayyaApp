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

const CreditsScreen2 = ({ navigation, route }: any) => {
const Credits=[
{
id:1,
credits:"10 credits",
cruncey:"€ 5.0"
},
{
    id:2,
    credits:"20 credits",
    cruncey:"€ 10.0"
    },{
        id:1,
        credits:"30 credits",
        cruncey:"€ 30.0"
        },{
            id:1,
            credits:"50 credits",
            cruncey:"€ 45.0"
            },{
                id:1,
                credits:"100 credits",
                cruncey:"€ 80.0"
                },



]
  return (
    <ScreenLayout style={{ marginTop: sizeHelper.calHp(30) }}>
      
      <View style={styles.arrowview}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
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

<View>
<CustomText text={"Buy more credits"} size={31} fontFam={fonts.InterTight_Bold}/>



</View>
<View style={{bottom:sizeHelper.calHp(30)}}>
{
Credits.map((item,index)=>{
return(

<View
       
       style={
         styles.creditsbox}>
       <View style={styles.insidebox}>
         <CustomText text={item.credits} size={28} fontFam={fonts.InterTight_Bold} />
         <View style={{ top: sizeHelper.calHp(20) }}>
           <CustomButton
             colors={theme.colors.primary}
             width={90}
             height={50}
             text="Buy Now"
             size={22}
           />
         </View>
       </View>
       <CustomText
         text={item.cruncey}
         size={20}
         fontFam={fonts.InterTight_Medium}
       />
     </View> 

)

}
)

}

</View>
    </ScreenLayout>
  );
};

export default CreditsScreen2;

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
    borderRadius: 25,
    justifyContent: "center",
    marginTop: sizeHelper.calHp(25),
    padding: sizeHelper.calWp(30),
    
  },
  insidebox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

});
