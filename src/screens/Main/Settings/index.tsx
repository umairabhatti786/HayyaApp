import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,View,Image,
  TouchableOpacity,Switch
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import HomeScreen from "../Home";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/images";


const SettingsScreen = ({ navigation, route }: any) => {
  const [isOn, setIsOn] = useState(false);  return (
<View style={{padding:sizeHelper.calHp(30),marginTop:sizeHelper.calHp(50)}}>
<View style={{flexDirection:"row",gap:sizeHelper.calWp(180)}}>
<CustomText text={"Settings"} 
size={40}
 fontWeight="700" 
 fontFam={fonts.InterTight_Bold}
/>
<View>
<View style={{height:sizeHelper.calHp(70),
  width:sizeHelper.calWp(210), 
  backgroundColor:theme.colors.BluePurple,
  borderRadius:99,flexDirection:"row",alignItems:"center",gap:sizeHelper.calWp(15)
  }}>

<Image
            style={{width:sizeHelper.calWp(60),height:sizeHelper.calWp(60)}}
            source={images.Group8} resizeMode="contain"
            />
<CustomText text={"15"} size={30}  fontFam={fonts.InterTight_Medium}
/>
<TouchableOpacity style={{height:sizeHelper.calWp(80),
  width:sizeHelper.calWp(80),
  backgroundColor:theme.colors.secondry,
  borderRadius:99,alignItems:"center",justifyContent:"center",

  }}>
<Image
            style={{width:sizeHelper.calWp(30),height:sizeHelper.calWp(30)}}
            source={images.plus} resizeMode="contain"
            />
</TouchableOpacity>
<View style={{marginLeft:sizeHelper.calWp(5)}}>
<View style={{height:sizeHelper.calWp(80),
  width:sizeHelper.calWp(80),
  backgroundColor:theme.colors.LightBlue,
  borderRadius:99,alignItems:"center",justifyContent:"center",

  }}>
<Image
            style={{width:sizeHelper.calWp(80),height:sizeHelper.calWp(80)}}
            source={images.avatar} resizeMode="contain"
            />
</View>
</View>

</View>

</View>


</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:sizeHelper.calWp(20)
  }}>
<CustomText text={"Push Notifications"} size={27} fontFam={fonts.InterTight_Medium}/>
<TouchableOpacity
      onPress={() => setIsOn(!isOn)}
      activeOpacity={0.8}
      style={[
        styles.track,
        { backgroundColor: isOn ? '#5A4FE9' : '#ccc' }, // ON = blue, OFF = gray
      ]}
    >
      <View
        style={[
          styles.thumb,
          { alignSelf: isOn ? 'flex-end' : 'flex-start' }, // left or right move
        ]}
      />
    </TouchableOpacity>

</View>
</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),justifyContent:"center"
  }}>

<CustomText text={"Email Notifications"} size={27} fontFam={fonts.InterTight_Medium}/>


</View>
</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),justifyContent:"center"
  }}>

<CustomText text={"Default Location"} size={27} fontFam={fonts.InterTight_Medium}/>


</View>
</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),justifyContent:"center"
  }}>
<CustomText text={"Language"} size={27} fontFam={fonts.InterTight_Medium}/>



</View>
</View>
<View>
<View style={{height:sizeHelper.calHp(100),
  width:"100%",
  backgroundColor:theme.colors.white,
  borderRadius:15,marginTop:sizeHelper.calHp(30),justifyContent:"center"
  }}>

<CustomText text={"Contact Support"} size={27} fontFam={fonts.InterTight_Medium}/>


</View>
</View>

</View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  track: {
    width: 60, // toggle width
    height: 35, // toggle height
    borderRadius: 20,
    padding: 4,
    justifyContent: 'center',
  },
  thumb: {
    width: 24, // smaller white circle
    height: 24,
    borderRadius: 14,
    backgroundColor: '#fff',
  },
});
