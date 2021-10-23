import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardCatalog = ({category}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.logo} source={category.gambar} />
    </TouchableOpacity>
  );
};

export default CardCatalog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.mainColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 8,
    padding: 10,
  },
  logo: {
    width: responsiveWidth(40),
    height: responsiveHeight(55),
    resizeMode: 'contain',
  },
});
