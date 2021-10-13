import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Button} from '..';
import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../../utils/constant';

const CardProduct = ({product, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <View style={styles.card}>
        <Image source={product.gambar} style={styles.imageProduct} />
      </View>
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.harga}>Rp. {numberWithCommas(product.harga)}</Text>

      {/* <Button type="text" title="Detail" padding={8} /> */}
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.whiteGrey,
    padding: 10,
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 8,
  },
  imageProduct: {
    width: 120,
    height: 135,
  },
  text: {
    marginTop: 10,
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.bold,
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  harga: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'left',
  },
});
