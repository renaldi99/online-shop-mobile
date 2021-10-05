import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Button} from '..';
import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';

const CardProduct = ({product}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={product.gambar} style={styles.imageProduct} />
      </TouchableOpacity>
      <Text style={styles.text}>{product.nama}</Text>

      {/* <Button type="text" title="Detail" padding={8} /> */}
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.pink,
    borderRadius: 10,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
  },
  imageProduct: {
    width: 120,
    height: 135,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: fonts.main.bold,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
