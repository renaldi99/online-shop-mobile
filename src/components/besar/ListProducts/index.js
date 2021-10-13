import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardProduct} from '../../kecil';

const ListProducts = ({products, navigation}) => {
  return (
    <View style={styles.container}>
      {products.map(product => {
        return (
          <CardProduct
            product={product}
            key={product.id}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});
