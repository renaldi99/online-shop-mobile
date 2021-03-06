import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import SweetAlert from 'react-native-sweet-alert';
import {connect} from 'react-redux';
import {snapTransaction} from '../../actions/PaymentAction';
import {getCityDetail, postOngkir} from '../../actions/RajaOngkirAction';
import {Button, CardAlamat, Jarak, Line, Pilihan} from '../../components';
import {couriers} from '../../data';
import {
  colors,
  fonts,
  getData,
  numberWithCommas,
  responsiveHeight,
} from '../../utils';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUser: false,
      ekspedisi: couriers,
      ekspedisiSelected: false,
      ongkir: 0,
      estimasi: '',
      totalPrice: this.props.route.params.totalPrice,
      totalWeight: this.props.route.params.totalWeight,
      // get data alamat secara dinamis melalui value / id dari api raja ongkir saat register (postman)
      // dinamis
      kota: '',
      provinsi: '',
      alamat: '',
    };
  }

  getUserData = () => {
    const {navigation, dispatch} = this.props;
    getData('user').then(response => {
      const data = response;

      if (data) {
        this.setState({
          dataUser: data,
          alamat: data.alamat,
        });

        dispatch(getCityDetail(data.kota));
      } else {
        navigation.replace('Login');
      }
    });
  };

  componentDidMount = () => {
    this.getUserData();
  };

  componentDidUpdate = prevProps => {
    const {getCityDetailResult, ongkirResult, snapTransactionResult} =
      this.props;

    if (
      getCityDetailResult &&
      prevProps.getCityDetailResult !== getCityDetailResult
    ) {
      this.setState({
        provinsi: getCityDetailResult.province,
        kota: getCityDetailResult.type + ' ' + getCityDetailResult.city_name,
      });
    }

    if (ongkirResult && prevProps.ongkirResult !== ongkirResult) {
      this.setState({
        ongkir: ongkirResult.cost[0].value,
        estimasi: ongkirResult.cost[0].etd,
      });
    }

    if (
      snapTransactionResult &&
      prevProps.snapTransactionResult !== snapTransactionResult
    ) {
      const {dataUser, ongkir, estimasi} = this.state;
      // checkout success and redirect to web view
      // (parameter) sent to Midtrans Page to change cart to be history
      const parameter = {
        redirect_url: snapTransactionResult.redirect_url,
        ongkir: ongkir,
        estimasi: estimasi,
        order_id: 'TEST - ' + new Date().getTime() + '-' + dataUser.uid,
      };

      this.props.navigation.navigate('Midtrans', parameter);
    }
  };

  changeEkpedisi = ekspedisiSelected => {
    if (ekspedisiSelected) {
      this.setState({
        ekspedisiSelected: ekspedisiSelected,
      });
    }
    // console.log('Log : ', ekspedisiSelected.service);
    this.props.dispatch(postOngkir(this.state, ekspedisiSelected));
  };

  // submit -> checkout midtrans
  bayarCheckout = () => {
    const {totalPrice, ongkir, dataUser, alamat} = this.state;
    const {dispatch} = this.props;
    // di kirim ke midtrans
    const data = {
      transaction_details: {
        order_id: 'TEST - ' + new Date().getTime() + '-' + dataUser.uid,
        gross_amount: totalPrice + ongkir,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: dataUser.nama,
        email: dataUser.email,
        phone: dataUser.noHp,
        address: alamat,
      },
    };

    if (ongkir !== 0) {
      // action
      dispatch(snapTransaction(data));
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle: 'Select your shipping method',
        style: 'error',
        cancellable: true,
      });
    }
  };

  render() {
    const {
      dataUser,
      ekspedisi,
      ekspedisiSelected,
      estimasi,
      ongkir,
      totalPrice,
      totalWeight,
      alamat,
      kota,
      provinsi,
    } = this.state;
    const {navigation, snapTransactionLoading} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.sectionCheckout}>
          <Text style={styles.sectionAddressTitle}>Shipping Address</Text>
          <CardAlamat
            alamat={alamat}
            kota={kota}
            provinsi={provinsi}
            navigation={navigation}
          />
          <Jarak height={8} />

          <Pilihan
            datas={ekspedisi}
            label="Courier"
            fontSize={RFValue(18)}
            height={48}
            selectedValue={ekspedisiSelected}
            onValueChange={ekspedisiSelected =>
              this.changeEkpedisi(ekspedisiSelected)
            }
          />

          <Jarak height={18} />
          <Line borderWidth={0.3} />
          <Text style={styles.sectionTitleOrder}>Order Summary</Text>

          <View style={styles.sectionDetailOrder}>
            <Text style={styles.sectionTextOrder}>Items </Text>
            <Text style={styles.sectionTextOrder}>
              Rp. {numberWithCommas(totalPrice)}
            </Text>
          </View>
          <View style={styles.sectionDetailOrder}>
            <Text style={styles.sectionTextOrder}>Weight {totalWeight}</Text>
            <Text style={styles.sectionTextOrder}>
              Rp. {numberWithCommas(ongkir)}
            </Text>
          </View>
          <View style={styles.sectionDetailOrder}>
            <Text style={styles.sectionTextOrder}>estimated time</Text>
            <Text style={styles.sectionTextOrder}>{estimasi} Days</Text>
          </View>
        </View>

        <View style={styles.sectionFooter}>
          <View style={styles.sectionTotal}>
            <Text style={styles.sectionText}>Total Pay</Text>
            <Text style={styles.sectionTotalHarga}>
              Rp : {numberWithCommas(totalPrice + ongkir)}
            </Text>
          </View>

          <Button
            loading={snapTransactionLoading}
            icon=""
            type="textIcon"
            title="Process Payment"
            padding={responsiveHeight(20)}
            fontSize={18}
            onPress={() => this.bayarCheckout()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getCityDetailLoading: state.RajaOngkirReducer.getCityDetailLoading,
  getCityDetailResult: state.RajaOngkirReducer.getCityDetailResult,
  getCityDetailError: state.RajaOngkirReducer.getCityDetailError,

  ongkirResult: state.RajaOngkirReducer.ongkirResult,

  snapTransactionResult: state.PaymentReducer.snapTransactionResult,
  snapTransactionLoading: state.PaymentReducer.snapTransactionLoading,
});

export default connect(mapStateToProps, null)(Checkout);

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
  sectionFooter: {
    marginHorizontal: 30,
    marginBottom: 10,
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
  sectionTitleOrder: {
    fontSize: RFValue(18),
    fontFamily: fonts.main.semibold,
    marginVertical: 18,
  },
  sectionDetailOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  sectionTextOrder: {
    fontSize: RFValue(16),
    color: colors.thirdGrey,
    fontFamily: fonts.main.regular,
  },
});
