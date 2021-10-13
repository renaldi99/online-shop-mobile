import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils';
import {IconArrowLeft} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.route.params.product,
      images: this.props.route.params.product.gambar,
    };
  }

  render() {
    const {navigation} = this.props;
    const {product, images} = this.state;
    // console.log('parameter : ', this.props.route.params);
    return (
      <View style={styles.page}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.goBack()}>
          <IconArrowLeft />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.imageProduct} source={product.gambar} />
        </View>
        <View style={styles.container}>
          <View style={styles.sectionDetail}>
            <Text style={styles.harga}>
              Rp. {numberWithCommas(product.harga)}
            </Text>
            <Text style={styles.nama}>{product.nama}</Text>

            <View style={styles.line} />
            <View style={styles.wrapperType}>
              <Text style={styles.contentType}>Type: {product.jenis}</Text>
              <Text style={styles.contentType}>Weight: {product.berat} Kg</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.pink,
  },
  navItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  imageContainer: {
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(490),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  sectionDetail: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  harga: {
    fontSize: RFValue(28, heightMobileUI),
    fontFamily: fonts.main.bold,
  },
  nama: {
    marginTop: 10,
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.main.regular,
    textTransform: 'capitalize',
  },
  line: {
    borderWidth: 0.2,
    marginVertical: 20,
  },
  wrapperType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentType: {
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.main.regular,
  },
});
