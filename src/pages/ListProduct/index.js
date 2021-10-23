import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Catalog, ListProducts} from '../../components/besar';
import HeaderComponent from '../../components/besar/HeaderComponent';
import {fonts} from '../../utils';
import {dummyCatalogs, dummyProducts} from '../../data';
import {Jarak} from '../../components';

export default class ListProduct extends Component {
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
        <HeaderComponent navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.category}>
            <Catalog categories={categories} />
          </View>
          <View style={styles.product}>
            <Text style={styles.label}>
              <Text style={styles.boldLabel}>All our products</Text>
            </Text>
            <ListProducts products={products} />
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
    marginTop: 0,
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
