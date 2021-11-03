import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconProduct,
  IconProductActive,
  IconUser,
  IconUserActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }

    if (label === 'Product') {
      return isFocused ? <IconProductActive /> : <IconProduct />;
    }

    if (label === 'Profile') {
      return isFocused ? <IconUserActive /> : <IconUser />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.light,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.main.reguler,
  }),
});
