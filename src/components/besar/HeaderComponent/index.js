import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts, getData, responsiveHeight} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Button, Jarak} from '../../kecil';
import {connect} from 'react-redux';
import {saveKeyword} from '../../../actions/ProductAction';
import {getListCart} from '../../../actions/CartAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount = () => {
    const {navigation, dispatch} = this.props;
    getData('user').then(res => {
      if (res) {
        dispatch(getListCart(res.uid));
      }
    });
  };

  onSearching = () => {
    const {page, navigation, dispatch} = this.props;
    const {search} = this.state;

    //run action save keyword
    dispatch(saveKeyword(search));

    //if search in home page navigate to list product page
    if (page !== 'ListProduct') {
      navigation.navigate('ListProduct');
    }

    //back to empty string after finish searching / after click enter
    this.setState({
      search: '',
    });
  };

  render() {
    const {navigation, getListCartResult} = this.props;
    const {search} = this.state;

    let totalCart;

    if (getListCartResult) {
      totalCart = Object.keys(getListCartResult.orders).length;
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Search Bar */}
          <View style={styles.searchSection}>
            <IconSearch />
            <TextInput
              placeholder="Search Hoodie, Shirt..."
              style={styles.input}
              value={search}
              onChangeText={search => this.setState({search})}
              onSubmitEditing={() => this.onSearching()}
            />
          </View>

          <Jarak width={10} />
          {/* Button Cart */}
          <Button
            icon="cart"
            padding={10}
            onPress={() => navigation.navigate('Keranjang')}
            totalCart={totalCart}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListCartResult: state.CartReducer.getListCartResult,
});

export default connect(mapStateToProps, null)(HeaderComponent);

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
