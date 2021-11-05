import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const Line = ({color, borderWidth}) => {
  return <View style={styles.line(color, borderWidth)} />;
};

export default Line;

const styles = StyleSheet.create({
  line: (color, borderWidth) => ({
    borderWidth: borderWidth ? borderWidth : 0.2,
    borderColor: color ? color : colors.grey,
  }),
});
