import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {IconArrowLeft, IconCart, IconEdit} from '../../../assets';
import {colors} from '../../../utils';
import BtnLoading from './BtnLoading';
import TextIcon from './TextIcon';
import TextOnly from './TextOnly';

const Button = props => {
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    } else if (icon === 'edit') {
      return <IconEdit />;
    }

    return <IconCart />;
  };

  const {icon, totalCart, padding, type, onPress, loading} = props;

  // loading
  if (loading) {
    return <BtnLoading {...props} />;
  }

  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      {totalCart && (
        <View style={styles.notif}>
          {/* <Text style={styles.textNotif}></Text> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding ? padding : 10,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 10,
    right: 8,
    backgroundColor: colors.danger,
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 100,
  },
  textNotif: {
    fontSize: 10,
    color: colors.white,
  },
});
