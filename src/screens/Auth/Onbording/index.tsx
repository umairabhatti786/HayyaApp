import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
    Keyboard,Text,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
import { icons } from "../../../assets/icons";
import { images } from "../../../assets/images";

const Slides =[

{
key:"One",
title:"Decide Together Effortlessly",
text:"Describe what do you want to do? (e.g. Where can we eat Italian nearby?)",
image:images.intro1,
},
{
    key:"Two",
    title:"Share what you’re craving",
    text:"Tell us what you’re in the mood for, and we’ll serve up tailored suggestions.",
    image:images.intro2,
    },
    {
        key:"Three",
        title:"Swipe. Match. Go!",
        text:"Swipe through options, match with your group, and make plans in seconds.",
        image:images.intro3,
        }
        


]


const OnbordingScreen =()=>{
return(
<View style={{backgroundColor:"red",flex:1}}>
<Text>hgjhgjhghkg</Text>


</View>




)




}

export default OnbordingScreen