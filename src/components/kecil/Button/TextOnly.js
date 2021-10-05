import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({padding, title}) => {
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.mainColor,
    padding: padding,
    borderRadius: 5,
    marginTop: 8,
  }),
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.main.bold,
  },
});
