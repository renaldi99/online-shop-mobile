import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BannerSlider, Catalog, ListProducts} from '../../components/besar';
import HeaderComponent from '../../components/besar/HeaderComponent';
import {fonts} from '../../utils';
import {dummyCatalogs, dummyProducts} from '../../data';
import {Button, Jarak} from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: dummyCatalogs,
      products: dummyProducts,
    };
  }

  render() {
    const {categories, products} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} />
          <BannerSlider />
          <View style={styles.category}>
            <Text style={styles.label}>Select Category</Text>
            <Catalog categories={categories} />
          </View>
          <View style={styles.product}>
            <Text style={styles.label}>
              <Text style={styles.boldLabel}>Find your</Text> match style
            </Text>
            <ListProducts products={products} navigation={navigation} />
            <Button title="Lihat Semua" type="text" padding={10} />
          </View>
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Colors.white},
  category: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontFamily: fonts.main.semibold,
    fontSize: 18,
  },
  product: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  boldLabel: {
    fontFamily: fonts.main.bold,
  },
});
