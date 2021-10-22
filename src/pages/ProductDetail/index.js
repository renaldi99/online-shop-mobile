import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {IconArrowLeft} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils';
import {Button, Inputan, Jarak, Pilihan, ProductSlider} from '../../components';

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
        <ProductSlider images={images} />
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

            <View style={styles.wrapperInput}>
              <Inputan
                label="Quantity"
                width={responsiveWidth(170)}
                height={responsiveHeight(38)}
                fontSize={RFValue(20, heightMobileUI)}
              />
              <Pilihan
                label="Size"
                width={responsiveWidth(170)}
                height={responsiveHeight(38)}
                fontSize={RFValue(20, heightMobileUI)}
                sizes={product.ukuran}
              />
            </View>
            <Inputan
              textarea
              label="Description"
              fontSize={RFValue(20, heightMobileUI)}
              placeholder="Drop your description here ..."
            />

            <Jarak height={5} />
            <Button
              title="Add to Cart"
              type="text"
              padding={responsiveHeight(15)}
              fontSize={15}
              // onPress={() => navigation.navigate('Profile')}
            />
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
    paddingHorizontal: 30,
    paddingVertical: 30,
    position: 'absolute',
    zIndex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(460),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 2,
  },
  sectionDetail: {
    marginTop: 20,
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
    marginTop: 20,
    marginBottom: 10,
  },
  wrapperType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentType: {
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.main.regular,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
