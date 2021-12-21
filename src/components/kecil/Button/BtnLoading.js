import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Jarak from '../Jarak';
import {colors, fonts} from '../../../utils';

const BtnLoading = ({padding, fontSize, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <ActivityIndicator size="small" color={colors.white} />
      <Text style={styles.title(fontSize)}>Loading . . .</Text>
      <Jarak width={20} />
    </TouchableOpacity>
  );
};

export default BtnLoading;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.green,
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
    marginLeft: 10,
  }),
});
