import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getListCart} from '../../actions/CartAction';
import {Button, ListKeranjang} from '../../components';
import {
  colors,
  fonts,
  getData,
  numberWithCommas,
  responsiveHeight,
} from '../../utils';

class Keranjang extends Component {
  componentDidMount = () => {
    const {navigation, dispatch} = this.props;
    getData('user').then(res => {
      if (res) {
        dispatch(getListCart(res.uid));
      } else {
        navigation.replace('Login');
      }
    });
  };

  componentDidUpdate(prevProps) {
    const {deleteCartResult} = this.props;

    if (deleteCartResult && prevProps.deleteCartResult !== deleteCartResult) {
      const {navigation, dispatch} = this.props;
      getData('user').then(res => {
        if (res) {
          dispatch(getListCart(res.uid));
        } else {
          navigation.replace('Login');
        }
      });
    }
  }

  render() {
    const {navigation, getListCartResult} = this.props;
    return (
      <View style={styles.container}>
        <ListKeranjang {...this.props} />
        <View style={styles.sectionFooter}>
          <View style={styles.sectionTotal}>
            <Text style={styles.sectionText}>Total Product</Text>
            <Text style={styles.sectionTotalHarga}>
              Rp :{' '}
              {getListCartResult
                ? numberWithCommas(getListCartResult.totalPrice)
                : 0}
            </Text>
          </View>
          {getListCartResult ? (
            <Button
              icon=""
              type="textIcon"
              title="Checkout"
              padding={responsiveHeight(20)}
              fontSize={18}
              onPress={() =>
                navigation.navigate('Checkout', {
                  totalPrice: getListCartResult.totalPrice,
                  totalWeight: getListCartResult.totalWeight,
                })
              }
            />
          ) : (
            <Button
              icon=""
              type="textIcon"
              title="Checkout"
              padding={responsiveHeight(20)}
              fontSize={18}
              disabled={true}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListCartLoading: state.CartReducer.getListCartLoading,
  getListCartResult: state.CartReducer.getListCartResult,
  getListCartError: state.CartReducer.getListCartError,

  deleteCartLoading: state.CartReducer.deleteCartLoading,
  deleteCartResult: state.CartReducer.deleteCartResult,
  deleteCartError: state.CartReducer.deleteCartError,
});

export default connect(mapStateToProps, null)(Keranjang);

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
