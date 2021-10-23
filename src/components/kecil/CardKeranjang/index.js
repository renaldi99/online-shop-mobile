import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {IconClose} from '../../../assets';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const CardKeranjang = ({cart}) => {
  return (
    <View style={styles.container}>
      <Image source={cart.product.gambar[0]} style={styles.sectionImage} />
      <View style={styles.sectionDescription}>
        <Text style={styles.textTitle}>{cart.product.title}</Text>
        <Text style={styles.textPrice}>
          Rp. {numberWithCommas(cart.product.harga)}
        </Text>
        <Text style={styles.text}>Order: {cart.jumlahPesan}</Text>
        <Text style={styles.text}>Size: {cart.ukuran}</Text>
        <Text style={styles.text}>
          Total: Rp. {numberWithCommas(cart.totalHarga)}
        </Text>
      </View>
      <View style={styles.sectionIcon}>
        <IconClose />
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 18,
    backgroundColor: colors.white,
    shadowColor: colors.mainColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionImage: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  sectionDescription: {},
  textTitle: {
    fontFamily: fonts.main.semibold,
    fontSize: RFValue(16),
    textTransform: 'capitalize',
  },
  textPrice: {
    fontFamily: fonts.main.regular,
    fontSize: RFValue(14),
  },
  sectionIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
