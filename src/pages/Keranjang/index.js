import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, ListKeranjang} from '../../components';
import {dummyOrders} from '../../data';
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils';

export default class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: dummyOrders[0],
    };
  }

  render() {
    const {carts} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ListKeranjang carts={carts.orders} />
        <View style={styles.sectionFooter}>
          <View style={styles.sectionTotal}>
            <Text style={styles.sectionText}>Total Product</Text>
            <Text style={styles.sectionTotalHarga}>
              Rp : {numberWithCommas(carts.totalHarga)}
            </Text>
          </View>

          <Button
            icon=""
            type="textIcon"
            title="Checkout"
            padding={responsiveHeight(20)}
            fontSize={18}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  sectionTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionFooter: {
    marginHorizontal: 30,
    marginBottom: 10,
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
