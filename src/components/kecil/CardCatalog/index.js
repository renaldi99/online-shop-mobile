import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getProductByCatalog} from '../../../actions/ProductAction';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardCatalog = ({category, navigation, id, dispatch}) => {
  const productByCatalog = (id, namaKatalog) => {
    dispatch(getProductByCatalog(id, namaKatalog));

    // navigate ke list product
    navigation.navigate('ListProduct');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => productByCatalog(id, category.namaKatalog)}>
      <Image style={styles.logo} source={{uri: category.image}} />
    </TouchableOpacity>
  );
};

export default connect()(CardCatalog);

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
