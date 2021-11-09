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

const CardHistory = ({order}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.sectionHeader}>
        <Text style={styles.formatDate}>{order.tanggalPemesanan}</Text>
        <View style={styles.sectionInfoStatus}>
          <View style={styles.buttonFinished}>
            <Text style={styles.textFinished}>Finished</Text>
          </View>
          <TouchableOpacity>
            <IconOption />
          </TouchableOpacity>
        </View>
      </View>

      {order.orders.map((item, index) => {
        return (
          <View key={index} style={styles.sectionListOrder}>
            <Image
              source={item.product.gambar[0]}
              style={styles.sectionImageOrder}
            />
            <View style={styles.sectionDescriptionOrder}>
              <Text style={styles.sectionDescriptionTitle}>
                {item.product.title}
              </Text>
              <Text>Order: {item.jumlahPesan}</Text>
              <Text>Total Order: Rp. {numberWithCommas(item.totalHarga)}</Text>
            </View>
          </View>
        );
      })}

      <Line borderWidth={0.5} />

      <View style={styles.sectionTotal}>
        <View>
          <Text style={styles.sectionTotalText}>Total Amount:</Text>
          <Text style={styles.sectionTotalAmount}>
            Rp. {numberWithCommas(order.totalHarga + 15000)}
          </Text>
        </View>

        <View style={styles.sectionFeedBack}>
          <Text style={styles.sectionFeedBackText}>Feedback</Text>
        </View>
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
    width: responsiveWidth(66),
    height: responsiveHeight(66),
    // backgroundColor: 'grey',
    resizeMode: 'contain',
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