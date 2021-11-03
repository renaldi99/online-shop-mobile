import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts} from '../../../utils';

const CardAlamat = props => {
  const {dataUser} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Address :</Text>
      <Text style={styles.sectionText}>
        {dataUser.alamat}, Kota {dataUser.kota}
      </Text>
      <Text style={styles.sectionText}>Provinsi {dataUser.provinsi}</Text>
      <TouchableOpacity>
        <Text style={styles.sectionAddress}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
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
  sectionTitle: {
    fontFamily: fonts.main.semibold,
    marginBottom: 12,
    fontSize: RFValue(15),
  },
  sectionText: {
    fontFamily: fonts.main.regular,
    fontSize: RFValue(14),
  },
  sectionAddress: {
    marginTop: 20,
    alignSelf: 'flex-end',
    color: colors.mainColor,
    fontFamily: fonts.main.semibold,
    fontSize: RFValue(14),
  },
});
