import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Button} from '..';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../../utils/constant';

const CardProduct = ({product, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <View style={styles.card}>
        <Image source={product.gambar[0]} style={styles.imageProduct} />
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.harga}>Rp. {numberWithCommas(product.harga)}</Text>
      </View>

      {/* <Button type="text" title="Detail" padding={8} /> */}
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.whiteGrey,
    borderRadius: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
    minHeight: responsiveHeight(350),
    minWidth: responsiveWidth(160),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    padding: 8,
  },
  imageProduct: {
    width: 120,
    height: 135,
  },
  sectionContent: {
    padding: 10,
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
