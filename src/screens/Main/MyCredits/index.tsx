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
import PlusLight from "../../../assets/svgs/plusLight.svg";
import CreditLogo from "../../../assets/svgs/creditLogo.svg";
import { appStyles } from "../../../utils/GlobalStyles";
import BackArrow from "../../../assets/svgs/backArrow.svg";

const MyCreditsScreen = ({ navigation, route }: any) => {
  const [isOn, setIsOn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(
      {name:"Free",des:"10 credits/ mon"},

  );


  const PlainsData=[
    {name:"Free",des:"10 credits/ mon"},
        {name:"Premium",des:"100 credits/ mon",price:"€ 45/ mon",billType:"Billed Annually"}

  ]


  const PlanCard=({item,onPress}:any)=>{

    return(


      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.freeview,
          {
            borderColor:
              selectedPlan?.name === item?.name ? theme.colors.blue : "white",
          },
        ]}
      >
        <View style={{gap:sizeHelper.calHp(10)}}>
          <CustomText text={item?.name} size={35} 
          fontWeight="700"
          fontFam={fonts.InterTight_Bold} />

           <CustomText
          text={item?.des}
          size={25}
          fontFam={fonts.InterTight_Medium}
        />
         
        </View>

         <View style={{gap:sizeHelper.calHp(10)}} >
          {
            item?.price&&(
              <View style={{gap:sizeHelper.calHp(4),alignItems:"center"}}>
                      <CustomText
          text={item?.price}
          // size={25}
          fontFam={fonts.InterTight_Medium}
        />

                  <CustomText
          text={"Billed Annually"}
          // size={25}
          fontFam={fonts.InterTight_Medium}
        />
                </View>

           

            )
          }
          
            <CustomButton
              colors={theme.colors.BluePurple}
              width={90}
              height={50}
              text="Select"
              size={22}
            />
          </View>
       
      </TouchableOpacity>

    )
  }

  return (
    <ScreenLayout >
      
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

    
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={()=>navigation.navigate('MyCreditsScreen')}
      style={styles.iconview}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
       
      </TouchableOpacity>

      <View
             style={appStyles.rowjustify}
      >
        <CustomText
          text={"Select your plan "}
          size={30}
          fontWeight="600"
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
          <CustomText text={ "Annually"} size={23} 
          color={!isOn?theme.colors.secondry+"30":theme.colors.secondry}
           />
        </View>
      </View>
      {
        PlainsData.map((item,index)=>{

          return(
      <PlanCard
      onPress={()=>setSelectedPlan(item)}
      item={item}
      />

          )
        })
      }



      <View
        style={{...appStyles.row,gap:sizeHelper.calWp(20)}}
      >
        <View style={styles.line} />
        <CustomText text={"or"} size={25} />
        <View style={styles.line} />
      </View>

      <CustomButton
        text="Buy custom credits"
        textColor={theme.colors.black}
        onPress={()=>navigation.navigate("BuyMoreCreditsScreen")}
        bgColor={theme.colors.white}
        borderRadius={999}
      />
    </ScreenLayout>
  );
};

export default MyCreditsScreen;

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
    flexDirection: "row",
    alignItems: "center",
    // gap: sizeHelper.calWp(230),
  },
  imagegroup1: {
    height: sizeHelper.calWp(90),
    width: sizeHelper.calWp(90),
    resizeMode: "contain",
  },
  toggleview: {
    flexDirection: "row",
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

  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
    justifyContent:"center",
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
  freeview: {
    height: sizeHelper.calHp(150),
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(20),
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
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
    flex:1,
    height: sizeHelper.calHp(1),
    backgroundColor: theme.colors.secondry+"30",
  },
  borderline:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }


});
