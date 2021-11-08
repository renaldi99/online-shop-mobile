import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconArrowRight} from '../../../assets';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';

const CardMenu = ({menu, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(menu.halaman)}>
      <View style={styles.sectionMenu}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
      <IconArrowRight />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.mainColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30,
    paddingVertical: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.main.semibold,
    marginLeft: 30,
  },
});
