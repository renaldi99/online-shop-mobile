import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Line from '../Line';
import {IconOption} from '../../../assets';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {connect} from 'react-redux';
import {updateStatus} from '../../../actions/HistoryAction';

export class CardHistory extends Component {
  componentDidMount = () => {
    const {order, dispatch} = this.props;

    dispatch(updateStatus(order.order_id));
  };

  render() {
    const {order, navigation, id, updateStatusLoading} = this.props;
    // console.log('ini dia: ', order.orders[0].product.nama.length);
    // karena didalam orders ada string / key jadi dipecah untuk digunakan Object.keys
    const orders = order.orders;
    return (
      <View style={styles.containerCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.formatDate}>{order.date}</Text>
          <View style={styles.sectionInfoStatus}>
            <View style={styles.buttonFinished}>
              <Text style={styles.textFinished}>
                {updateStatusLoading ? 'Loading' : order.status}
              </Text>
            </View>
            <TouchableOpacity>
              <IconOption />
            </TouchableOpacity>
          </View>
        </View>

        {Object.keys(orders).map((key, index) => {
          return (
            <View key={index} style={styles.sectionListOrder}>
              <Image
                source={{uri: orders[key].product.gambar[0]}}
                style={styles.sectionImageOrder}
              />
              <View style={styles.sectionDescriptionOrder}>
                <Text style={styles.sectionDescriptionTitle}>
                  {orders[key].product.nama.length > 25
                    ? orders[key].product.nama.substring(0, 28) + '...'
                    : orders[key].product.nama}
                </Text>
                <Text>Order: {orders[key].totalOrder}</Text>
                <Text>
                  Total Order: Rp. {numberWithCommas(orders[key].totalPrice)}
                </Text>
              </View>
            </View>
          );
        })}

        <Line borderWidth={0.5} />

        <View style={styles.sectionTotal}>
          <View>
            <Text style={styles.sectionTotalText}>Total Amount:</Text>
            <Text style={styles.sectionTotalAmount}>
              Rp. {numberWithCommas(order.totalPrice)}
            </Text>
          </View>

          <TouchableOpacity style={styles.sectionFeedBack}>
            <Text style={styles.sectionFeedBackText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  updateStatusLoading: state.HistoryReducer.updateStatusLoading,
});

export default connect(mapStateToProps, null)(CardHistory);

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 13,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formatDate: {
    fontSize: RFValue(14),
    fontFamily: fonts.main.semibold,
  },
  sectionInfoStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonFinished: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: colors.green,
    fontFamily: fonts.main.regular,
    marginRight: 15,
  },
  textFinished: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fonts.main.regular,
  },
  sectionListOrder: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  sectionImageOrder: {
    width: responsiveWidth(80),
    height: responsiveHeight(80),
    backgroundColor: 'grey',
    paddingVertical: 40,
    resizeMode: 'center',
  },
  sectionDescriptionOrder: {
    marginLeft: responsiveWidth(12),
  },
  sectionDescriptionTitle: {
    marginBottom: 5,
    fontSize: RFValue(14),
    fontFamily: fonts.main.semibold,
  },
  sectionTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sectionTotalText: {
    fontSize: RFValue(14),
    fontFamily: fonts.main.semibold,
    marginBottom: 2,
  },
  sectionTotalAmount: {
    fontSize: RFValue(14),
    fontFamily: fonts.main.semibold,
    color: colors.orange,
  },
  sectionFeedBack: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sectionFeedBackText: {
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: fonts.main.regular,
  },
});
