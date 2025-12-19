import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import HomeScreen from "../Home";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/images";
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import LogoIcon from "../../../assets/svgs/logo.svg";
import LogoPartIcon from "../../../assets/svgs/logoPart.svg";
import PlusIcon from "../../../assets/svgs/plus.svg";
import NextArrow from "../../../assets/svgs/nextArrow.svg";
import LocationModal from "../../../components/LocationModal";
import LanguageModal from "../../../components/LanguageModal";

const SettingsScreen = ({ navigation, route }: any) => {
  const [isOn, setIsOn] = useState(false);
  const [isNotificantionOn, setIsNotificantionOn] = useState(true);
  const [isEmailOn, setIsEmailOn] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

  const ToggleCard = ({ isOn, onPress, title, ischildren, children }: any) => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(20),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: sizeHelper.calWp(20),
          height: sizeHelper.calHp(80)
        }}
      >
        <CustomText
          text={title}
          size={23}
          fontWeight="600"
          fontFam={fonts.InterTight_Medium}
        />
        {!ischildren ? (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
              styles.track,
              {
                backgroundColor: isOn ? "#5A4FE9" : "#ccc",
                borderWidth: 1,
                borderColor: isOn ? "#5A4FE9" : theme.colors.secondry + "40",
              },
            ]}
          >
            <View
              style={[
                styles.thumb,
                {
                  alignSelf: isOn ? "flex-end" : "flex-start",
                  backgroundColor: isOn ? theme.colors.white : "#79747E",
                },
              ]}
            />
          </TouchableOpacity>
        ) : (
          children
        )}
      </View>
    );
  };

  const Language = [
    {
      id: 1,
      image: images.uk,
      name: "English",
    },
    {
      id: 2,
      image: images.arabia,
      name: "عربي",
    },
    {
      id: 1,
      image: images.itli,
      name: "Русский",
    },
    {
      id: 1,
      image: images.france,
      name: "Française",
    },
  ];

  const HomeHeader = () => {
    return (
      <View style={appStyles.rowjustify}>
        <CustomText
          text={"Settings"}
          size={35}
          fontWeight="700"
          fontFam={fonts.InterTight_SemiBold}
        />
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
        paddingTop={13}
        style={{
          gap: sizeHelper.calHp(50),
        }}
      >
        <HomeHeader />
        <View style={{ gap: sizeHelper.calHp(25) }}>
          <ToggleCard
            isOn={isNotificantionOn}
            title={"Push Notifications"}
            onPress={() => setIsNotificantionOn(!isNotificantionOn)}
          />

          <ToggleCard
            title={"Email Notifications"}
            isOn={isEmailOn}
            onPress={() => setIsEmailOn(!isEmailOn)}
          />

          <ToggleCard
            title={"Default Location"}
            ischildren={true}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
            >

              <CustomText
                text={`+ Add`}
                textDecorationLine="underline"
                size={23}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.primary}
                fontWeight={"600"}
              />

            </TouchableOpacity>
          </ToggleCard>

          <ToggleCard
            title={"Language"}
            ischildren={true}
          >
            <TouchableOpacity
              onPress={() => setIsLanguageModalVisible(true)}
            >

              <CustomText
                text={`English`}
                textDecorationLine="underline"
                size={23}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.primary}
                fontWeight={"600"}
              />

            </TouchableOpacity>
          </ToggleCard>


          <ToggleCard
            title={"Contact Support"}
            ischildren={true}
          >
            <TouchableOpacity>

              <NextArrow
                width={sizeHelper.calWp(25)}
                height={sizeHelper.calWp(25)}
                color={theme.colors.white}
              />

            </TouchableOpacity>
          </ToggleCard>
        </View>

        <TouchableOpacity
          style={{ alignSelf: "center", paddingVertical: sizeHelper.calHp(30) }}
        >

          <CustomText
            text={`Logout`}
            size={23}
            fontFam={fonts.InterTight_SemiBold}
            color={theme.colors.logout}
            fontWeight={"600"}
          />

        </TouchableOpacity>

        {/* <View style={{padding:sizeHelper.calHp(30),marginTop:sizeHelper.calHp(70),flex:1}}>

<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(60),flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:sizeHelper.calWp(20)
  }}>
<CustomText text={"Push Notifications"} size={27} fontFam={fonts.InterTight_Medium}/>
<TouchableOpacity
      onPress={() => setIsOn(!isOn)}
      activeOpacity={0.8}
      style={[
        styles.track,
        { backgroundColor: isOn ? '#5A4FE9' : '#ccc' }, 
      ]}
    >
      <View
        style={[
          styles.thumb,
          { alignSelf: isOn ? 'flex-end' : 'flex-start' }, 
        ]}
      />
    </TouchableOpacity>

</View>
</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:sizeHelper.calWp(20)
  }}>

<CustomText text={"Email Notifications"} size={27} fontFam={fonts.InterTight_Medium}/>
<TouchableOpacity
      onPress={() => setIsNotificantionOn(!isNotificantionOn)}
      activeOpacity={0.8}
      style={[
        styles.track2,
        { backgroundColor: isNotificantionOn ? '#5A4FE9' : '#ccc' }, 
      ]}
    >
      <View
        style={[
          styles.thumb2,
          { alignSelf: isNotificantionOn ? 'flex-end' : 'flex-start' }, 
        ]}
      />
    </TouchableOpacity>

</View>
</View>


<View>
      
      <View
        style={{
          height: sizeHelper.calHp(100),
          width: "100%",
          backgroundColor: theme.colors.white,
          borderRadius: 15,
          marginTop: sizeHelper.calHp(30),
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: sizeHelper.calWp(20),
        }}
      >
        <CustomText
          text={"Default Location"}
          size={27}
          fontFam={fonts.InterTight_Medium}
        />

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <CustomText
            textDecorationLine="underline"
            text={"+Add"}
            color={theme.colors.primary}
            size={30}
            fontFam={fonts.InterTight_SemiBold}
          />
        </TouchableOpacity>
        </View>

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
    <View style={{flexDirection:"row", marginTop:sizeHelper.calHp(30)}}>

<CustomText
  text="Default Location"
  size={33}
  fontFam={fonts.InterTight_Bold}
/>

<TouchableOpacity 
  style={{
    position: "absolute",       
    left: sizeHelper.calWp(130), 
    bottom: sizeHelper.calHp(25),
    padding: 10,               
  
  }}
  onPress={() => setModalVisible(false)}
>
  <Image 
    source={images.close} 
    style={{ height: sizeHelper.calWp(30), width: sizeHelper.calWp(30),marginLeft:sizeHelper.calWp(250),bottom:sizeHelper.calHp(20) }}
  />
</TouchableOpacity>

</View>


      <View style={{marginRight:sizeHelper.calWp(330), marginTop:sizeHelper.calHp(20)}}>
      <CustomText
          text="Address line 1"
          size={30}
          fontFam={fonts.InterTight_Medium} 
        />
        </View>
        <View style={{marginTop:sizeHelper.calHp(10)}}>
<CustomInput backgroundColor={theme.colors.background} placeholder="Add" />
</View>

<View style={{marginRight:sizeHelper.calWp(330) , marginTop:sizeHelper.calHp(20)}}>
      <CustomText
          text="Address line 2"
          size={30}
          fontFam={fonts.InterTight_Medium} 
        />
        </View>
        <View style={{marginTop:sizeHelper.calHp(10)}}>
<CustomInput backgroundColor={theme.colors.background} placeholder="Add" />
</View>
<View style={{marginRight:sizeHelper.calWp(360) , marginTop:sizeHelper.calHp(20)}}>
      <CustomText
          text="Postal code"
          size={30}
          fontFam={fonts.InterTight_Medium} 
        />
        </View>
        <View style={{marginTop:sizeHelper.calHp(10)}}>
<CustomInput backgroundColor={theme.colors.background} placeholder="Add" />
</View>
<View style={{marginRight:sizeHelper.calWp(460) , marginTop:sizeHelper.calHp(20)}}>
      <CustomText
          text="State"
          size={30}
          fontFam={fonts.InterTight_Medium} 
        />
        </View>
        <View style={{marginTop:sizeHelper.calHp(10)}}>
<CustomInput backgroundColor={theme.colors.background} placeholder="Add" />
<View style={{marginTop:sizeHelper.calHp(40)}}>
<CustomButton colors={theme.colors.primary}  text="Save" size={27} borderRadius={40} height={80}/>

     </View>
     
</View>


      </View>

        </View>
      </Modal>
    </View>





<View>
<View
  style={{
    height: sizeHelper.calHp(100),
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    marginTop: sizeHelper.calHp(30),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: sizeHelper.calWp(20),
  }}
>
  <CustomText text={"Language"} size={27} fontFam={fonts.InterTight_Medium} />

  <TouchableOpacity onPress={() => setIsLanguageModalVisible(true)}>
    <CustomText
      textDecorationLine="underline"
      text={"English"}
      color={theme.colors.primary}
      size={30}
      fontFam={fonts.InterTight_SemiBold}
    />
  </TouchableOpacity>
</View>

// Modal
<Modal
  animationType="slide"
  transparent={true}
  visible={isLanguageModalVisible}
  onRequestClose={() => setIsLanguageModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <CustomText
        text="Select Language"
        size={33}
        fontFam={fonts.InterTight_Bold}
        style={{ marginTop: sizeHelper.calHp(30) }}
      />

      
      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 20 }}
        onPress={() => setIsLanguageModalVisible(false)}
      >
        <Image
          source={images.close}
          style={{ width: sizeHelper.calWp(30), height: sizeHelper.calWp(30), resizeMode: "contain" }}
        />
      </TouchableOpacity>

      <View style={{gap:sizeHelper.calHp(30),marginTop:sizeHelper.calHp(40),}}>
{
Language.map((item,index)=>{
return(
<TouchableOpacity style={{width:sizeHelper.calWp(550)
  ,height:sizeHelper.calHp(80),
  backgroundColor:theme.colors.background,borderRadius:40,flexDirection:"row",alignItems:"center",paddingHorizontal:sizeHelper.calWp(20),gap:sizeHelper.calWp(20)}}>
<Image source={item.image} style={{height:sizeHelper.calWp(70),width:sizeHelper.calWp(70)}}/>
<CustomText text={item.name} size={28}       fontFam={fonts.InterTight_SemiBold}
 />

  
</TouchableOpacity>


)
}
)
}


      </View>
      
      <View style={{marginTop:sizeHelper.calHp(40),width:"98%"}}>
<CustomButton colors={theme.colors.primary}  text="Save" size={27} borderRadius={40} height={80}/>

     </View>
      

    </View>
    
  </View>
</Modal>


</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:sizeHelper.calWp(20)
  }}>

<CustomText text={"Contact Support"} size={27} fontFam={fonts.InterTight_Medium}/>
<TouchableOpacity>
<Image source={images.next} style={{ height:sizeHelper.calWp(30),width:sizeHelper.calWp(30),resizeMode:"contain"}}/>
</TouchableOpacity>
</View>
<TouchableOpacity style={{alignItems:"center",marginTop:sizeHelper.calHp(80)}}>
<CustomText text={"Logout"}  size={28} color="red" fontFam={fonts.InterTight_Medium}/>

</TouchableOpacity>

</View>

</View> */}
      </ScreenLayout>
      <LocationModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
      />

      <LanguageModal
        isVisible={isLanguageModalVisible}
        setIsVisible={setIsLanguageModalVisible}
      />

    </>

  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
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
  track2: {
    width: 60,
    height: 34,
    borderRadius: 20,
    padding: 4,
    justifyContent: "center",
  },
  thumb2: {
    width: 19,
    height: 19,
    borderRadius: 14,
    backgroundColor: "#79747E",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  closeIcon: {},
});
