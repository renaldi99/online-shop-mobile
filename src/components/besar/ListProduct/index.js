import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardProduct} from '../../kecil';

const ListProduct = ({products}) => {
  return (
    <View style={styles.container}>
      {products.map(product => {
        return <CardProduct product={product} key={product.id} />;
      })}
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
