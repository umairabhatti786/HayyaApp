import React, { useMemo } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import CustomText from '../Text';
import { ButtonProps } from '../../utils/Types';
import { theme } from '../../utils/Themes';
import sizeHelper from '../../utils/Helpers';
import { fonts } from '../../utils/Themes/fonts';

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  fontWeight,
  children,
}: ButtonProps) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      width: width,
      height: sizeHelper.calHp(height || 73),
      backgroundColor: bgColor || theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: sizeHelper.calHp(borderRadius || 20),
      borderWidth: borderWidth || 0,
      borderColor: borderColor,
      paddingHorizontal: paddingHorizontal,
      flexDirection: 'row',
      gap: sizeHelper.calWp(20),
    };

    return [baseStyle, style] as StyleProp<ViewStyle>;
  }, [
    width,
    height,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    paddingHorizontal,
    style,
  ]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={memoizedStyle}
    >
         {children}
      <CustomText
        text={text}
        color={textColor || theme.colors.white}
        size={size || 26}
        fontWeight={"700"}
        fontFam={fontFam || fonts.InterTight_Bold}
      />
   
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
