import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CardAlamat, Jarak, Pilihan} from '../../components';
import {colors, fonts, numberWithCommas} from '../../utils';
import {dummyOrders, dummyUser} from '../../data';

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUser: dummyUser,
      carts: dummyOrders[0],
      ekspedisi: [],
    };
  }

  render() {
    const {dataUser, carts, ekspedisi} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sectionCheckout}>
          <Text style={styles.sectionAddressTitle}>Shipping Address</Text>
          <CardAlamat dataUser={dataUser} />
          <Jarak height={30} />

          <Pilihan
            datas={ekspedisi}
            label="Choose Courier"
            fontSize={RFValue(18)}
            height={48}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  sectionCheckout: {
    paddingHorizontal: 30,
  },
  sectionAddressTitle: {
    fontSize: RFValue(18),
    fontFamily: fonts.main.semibold,
  },
  sectionTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sectionText: {
    fontFamily: fonts.main.bold,
    fontSize: RFValue(20),
    color: colors.thirdGrey,
  },
  sectionTotalHarga: {
    fontFamily: fonts.main.bold,
    fontSize: RFValue(20),
    color: colors.orange,
  },
});
