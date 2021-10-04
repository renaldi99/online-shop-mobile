import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {IconCart} from '../../../assets';
import {colors} from '../../../utils';

const Button = ({icon, totalCart, padding}) => {
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    }

    return <IconCart />;
  };
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalCart && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalCart}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.secondColor,
    padding: 4,
    textAlign: 'center',
  },
  textNotif: {
    fontSize: 10,
    color: colors.white,
  },
});
