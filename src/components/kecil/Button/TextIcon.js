import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Jarak from '../Jarak';
import {
  IconArrowLeft,
  IconArrowRightWhite,
  IconCart,
  IconCartWhite,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TextIcon = ({icon, padding, fontSize, title, onPress, disabled}) => {
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    } else if (icon === 'cart-white') {
      return <IconCartWhite />;
    } else if (icon === 'arrow-right-white') {
      return <IconArrowRightWhite />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={styles.container(padding, disabled)}
      onPress={onPress}>
      <Text style={styles.title(fontSize)}>{title}</Text>
      <Jarak width={20} />
      <Icon />
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding, disabled) => ({
    backgroundColor: disabled ? colors.grey : colors.mainColor,
    padding: padding ? padding : 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  title: fontSize => ({
    fontSize: fontSize ? fontSize : 15,
    color: colors.white,
    fontFamily: fonts.main.semibold,
  }),
});
