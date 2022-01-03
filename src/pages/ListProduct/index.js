import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Catalog, ListProducts} from '../../components/besar';
import HeaderComponent from '../../components/besar/HeaderComponent';
import {fonts} from '../../utils';
import {Jarak} from '../../components';
import {getListCatalog} from '../../actions/CatalogAction';
import {getListProduct} from '../../actions/ProductAction';
import {connect} from 'react-redux';

class ListProduct extends Component {
  componentDidMount() {
    const {navigation} = this.props;
    this._unsubscribe = navigation.addListener('focus', () => {
      const {idProduct, keyword} = this.props;
      this.props.dispatch(getListCatalog());
      this.props.dispatch(getListProduct(idProduct, keyword));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const {idProduct, keyword} = this.props;

    if (idProduct && prevProps.idProduct !== idProduct) {
      this.props.dispatch(getListProduct(idProduct));
    }

    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListProduct(keyword));
    }
  }

  render() {
    const {navigation, keyword} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="ListProduct" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.category}>
            <Catalog navigation={navigation} />
          </View>
          <View style={styles.product}>
            {keyword ? (
              <Text style={styles.label}>
                <Text style={styles.boldLabel}>🔍 Searching {keyword}</Text>
              </Text>
            ) : (
              <Text style={styles.label}>
                <Text style={styles.boldLabel}>All our products</Text>
              </Text>
            )}
            <ListProducts navigation={navigation} />
          </View>
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  idProduct: state.ProductReducer.idProduct,
  namaKatalog: state.ProductReducer.namaKatalog,
  keyword: state.ProductReducer.keyword,
});

export default connect(mapStateToProps, null)(ListProduct);

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
