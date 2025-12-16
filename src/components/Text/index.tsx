import React, { useMemo } from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { TextType } from "../../utils/Types";


const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,
  textTransform,
}: TextType) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle = {
      color: color || theme.colors.secondry,
      fontSize: sizeHelper.calHp(size || 20),
      fontWeight: fontWeight || "500",
      fontFamily: fontFam || fonts.InterTight_Regular,
      textTransform,
      textDecorationLine,
      ...(lineHeight ? { lineHeight } : {}),
    };

    return [baseStyle, style] as StyleProp<TextStyle>;
  }, [
    color,
    size,
    fontFam,
    fontWeight,
    textTransform,
    textDecorationLine,
    lineHeight,
    style,
  ]);

  return (
    <Text numberOfLines={numberOfLines} allowFontScaling={false} style={memoizedStyle}>
      {text}
      {label}
    </Text>
  );
};

export default React.memo(CustomText);
