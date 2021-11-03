import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Button, Jarak} from '../../kecil';

export default class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Search Bar */}
          <View style={styles.searchSection}>
            <IconSearch />
            <TextInput
              placeholder="Search Hoodie, Shirt..."
              style={styles.input}
            />
          </View>

          <Jarak width={10} />
          {/* Button Cart */}
          <Button
            icon="cart"
            padding={10}
            onPress={() => navigation.navigate('Keranjang')}
            totalCart
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColor,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 14,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.main.reguler,
  },
});
