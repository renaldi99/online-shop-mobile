import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ListKeranjang from '../../components/besar/ListKeranjang';
import {dummyOrders} from '../../data';
import {colors} from '../../utils';

export default class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: dummyOrders[0],
    };
  }

  render() {
    const {carts} = this.state;
    return (
      <View style={styles.container}>
        <ListKeranjang carts={carts.orders} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
