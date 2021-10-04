import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BannerSlider, Catalog} from '../../components/besar';
import HeaderComponent from '../../components/besar/HeaderComponent';
import {fonts} from '../../utils';
import {dummyCatalog} from '../../data/dummyCatalog';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: dummyCatalog,
    };
  }

  render() {
    const {categories} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.category}>
          <Text style={styles.label}>Select Category</Text>
          <Catalog categories={categories} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Colors.white},
  category: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontFamily: fonts.main.semibold,
    fontSize: 18,
  },
});
