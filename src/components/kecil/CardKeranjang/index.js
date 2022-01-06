import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Jarak from '../Jarak';
import {IconDelete} from '../../../assets';
import {connect} from 'react-redux';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {deleteCart} from '../../../actions/CartAction';

const CardKeranjang = ({cart, mainCart, id, dispatch}) => {
  const deleteCartProduct = () => {
    dispatch(deleteCart(id, mainCart, cart));
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: cart.product.gambar[0]}}
        style={styles.sectionImage}
      />
      <View style={styles.sectionDescription}>
        <Text style={styles.textTitle}>{cart.product.nama}</Text>
        <Text style={styles.textPrice}>
          Rp. {numberWithCommas(cart.product.harga)}
        </Text>
        <Jarak height={20} />
        <Text style={styles.text}>Order: {cart.totalOrder}</Text>
        <Text style={styles.text}>Size: {cart.size}</Text>
        <Text style={styles.text}>
          Total: Rp. {numberWithCommas(cart.totalPrice)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.sectionIcon}
        onPress={() => deleteCartProduct()}>
        <IconDelete />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(CardKeranjang);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 18,
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    overflow: 'hidden',
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
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.danger,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
