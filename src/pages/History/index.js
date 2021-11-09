import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListHistory} from '../../components';
import {dummyOrders} from '../../data';
import {colors} from '../../utils';

export default class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: dummyOrders,
    };
  }

  render() {
    const {orders} = this.state;
    return (
      <View style={styles.container}>
        <ListHistory orders={orders} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
