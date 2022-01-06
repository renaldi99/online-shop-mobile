import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  colors,
  fonts,
  getData,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils';
import {Button, Inputan, Jarak, Pilihan, ProductSlider} from '../../components';
import {IconFavorite} from '../../assets';
import SweetAlert from 'react-native-sweet-alert';
import {getInCart} from '../../actions/CartAction';
import {connect} from 'react-redux';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.route.params.product,
      images: this.props.route.params.product.gambar,
      quantity: '',
      size: '',
      desc: '',
      uid: '',
    };
  }

  getInCart = () => {
    const {quantity, size, desc} = this.state;
    const {navigation} = this.props;

    getData('user').then(res => {
      if (res) {
        this.setState({
          uid: res.uid,
        });

        //validasi form
        if (quantity && size && desc) {
          //connect to action
          this.props.dispatch(getInCart(this.state));
        } else {
          SweetAlert.showAlertWithOptions({
            title: 'Opps..',
            subTitle: 'Please fill form',
            style: 'error',
            cancellable: true,
          });
        }
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'Opps..',
          subTitle: 'Please Login',
          style: 'error',
          cancellable: true,
        });

        navigation.replace('Login');
      }
    });
  };

  componentDidUpdate(prevProps) {
    const {saveCartResult} = this.props;

    if (saveCartResult && prevProps.saveCartResult !== saveCartResult) {
      this.props.navigation.replace('Keranjang');
    }
  }

  render() {
    const {navigation, saveCartLoading} = this.props;
    const {product, images, quantity, size, desc} = this.state;
    // console.log('parameter : ', this.props.route.params);
    return (
      <View style={styles.page}>
        <View style={styles.navItem}>
          <Button
            icon="arrow-left"
            padding={10}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ProductSlider images={images} />
        <View style={styles.container}>
          <View style={styles.sectionDetail}>
            <View style={styles.sectionTitle}>
              <Text style={styles.harga}>
                Rp. {numberWithCommas(product.harga)}
              </Text>
              <TouchableOpacity>
                <IconFavorite />
              </TouchableOpacity>
            </View>
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
                value={quantity}
                onChangeText={quantity => this.setState({quantity})}
              />
              <Pilihan
                label="Size :"
                width={responsiveWidth(170)}
                height={responsiveHeight(38)}
                fontSize={RFValue(20, heightMobileUI)}
                datas={product.ukuran}
                selectedValue={size}
                onValueChange={size => this.setState({size})}
              />
            </View>
            <Inputan
              textarea
              label="Description"
              fontSize={RFValue(20, heightMobileUI)}
              placeholder="Drop your description here ..."
              value={desc}
              onChangeText={desc => this.setState({desc})}
            />

            <Jarak height={5} />
            <Button
              title="Add to Cart"
              type="textIcon"
              padding={responsiveHeight(15)}
              fontSize={15}
              onPress={() => this.getInCart()}
              loading={saveCartLoading}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  saveCartLoading: state.CartReducer.saveCartLoading,
  saveCartResult: state.CartReducer.saveCartResult,
  saveCartError: state.CartReducer.saveCartError,
});

export default connect(mapStateToProps, null)(ProductDetail);

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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  sectionDetail: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
