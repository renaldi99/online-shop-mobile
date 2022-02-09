import React from 'react';
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

const CardHistory = ({order, navigation, id}) => {
  // console.log('ini dia: ', order.orders[0].product.nama.length);
  const orders = order.orders;

  return (
    <View style={styles.containerCard}>
      <View style={styles.sectionHeader}>
        <Text style={styles.formatDate}>{order.date}</Text>
        <View style={styles.sectionInfoStatus}>
          <View style={styles.buttonFinished}>
            <Text style={styles.textFinished}>{order.status}</Text>
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
};

export default CardHistory;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
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
