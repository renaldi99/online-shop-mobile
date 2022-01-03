import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BannerSlider, Catalog, ListProducts} from '../../components/besar';
import HeaderComponent from '../../components/besar/HeaderComponent';
import {fonts} from '../../utils';
import {Button, Jarak} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getListCatalog} from '../../actions/CatalogAction';
import {getSomeProduct} from '../../actions/ProductAction';

class Home extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    this._unsubscribe = navigation.addListener('focus', () => {
      this.props.dispatch(getListCatalog());
      this.props.dispatch(getSomeProduct());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} page="Home" />
          <BannerSlider />
          <View style={styles.category}>
            <Text style={styles.label}>Select Category</Text>
            <Catalog navigation={navigation} />
          </View>
          <View style={styles.product}>
            <Text style={styles.labelProduct}>The Best Product Today ✨</Text>
            <ListProducts navigation={navigation} />
            <Button title="Lihat Semua" type="text" padding={10} />
          </View>
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Colors.white},
  category: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontFamily: fonts.main.bold,
    fontSize: 18,
  },
  product: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  labelProduct: {
    fontFamily: fonts.main.bold,
    fontSize: RFValue(20),
  },
});
