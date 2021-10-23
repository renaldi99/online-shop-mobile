import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CardKeranjang} from '../../kecil';

const ListKeranjang = ({carts}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {carts.map(cart => {
          return <CardKeranjang cart={cart} key={cart.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
