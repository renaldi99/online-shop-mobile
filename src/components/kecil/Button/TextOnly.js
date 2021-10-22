import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({padding, title, fontSize, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Text style={styles.text(fontSize)}>{title}</Text>
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
  text: fontSize => ({
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize ? fontSize : 13,
    fontFamily: fonts.main.bold,
  }),
});
