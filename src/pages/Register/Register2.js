import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  colors,
  fonts,
  heightMobileUI,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {TextInput} from 'react-native-paper';
import {Button, Jarak, Pilihan} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getProvinceList, getCityList} from '../../actions/RajaOngkirAction';

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kota: '',
      provinsi: '',
      dataKota: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinceList());
  }

  changeProvince = province => {
    this.setState({
      provinsi: province,
    });

    this.props.dispatch(getCityList(province));
  };

  render() {
    const {dataKota, kota, provinsi} = this.state;
    const {navigation, getProvinceResult, getCityResult} = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionText}>
          <Text style={styles.titleText}>Register ✍️</Text>
          <Text style={styles.smallText}>Fill data for your address</Text>
        </View>
        <View style={styles.wrapperCircle}>
          <View style={styles.circleDisable} />
          <Jarak width={10} />
          <View style={styles.circlePrimary} />
        </View>
        <View style={styles.sectionInput}>
          <TextInput
            mode="outlined"
            label="Address"
            multiline={true}
            numberOfLines={4}
            placeholder="Input your address"
            right={<TextInput.Affix />}
          />
          <Pilihan
            fontSize={RFValue(18)}
            height={responsiveHeight(70)}
            borderWidth={1}
            borderColor="#7f8c8d"
            label="Province"
            datas={getProvinceResult ? getProvinceResult : []}
            selectedValue={provinsi}
            onValueChange={province => this.changeProvince(province)}
          />
          <Pilihan
            fontSize={RFValue(18)}
            height={responsiveHeight(70)}
            borderWidth={1}
            borderColor="#7f8c8d"
            label="City"
            datas={getCityResult ? getCityResult : []}
            selectedValue={kota}
            onValueChange={city => this.setState({kota: city})}
          />
          <Jarak height={20} />

          <Button
            type="text"
            title="Submit"
            padding={15}
            fontSize={18}
            onPress={() => navigation.navigate('MainApp')}
          />
        </View>

        <View style={styles.sectionRegisterAccount}>
          <Text style={styles.TitleRegisterAccount}>Have an account?</Text>
          <Text style={styles.TextRegisterAccount}>Login</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  getProvinceResult: state.RajaOngkirReducer.getProvinceResult,
  getCityResult: state.RajaOngkirReducer.getCityResult,
});

export default connect(mapStateToProps, null)(Register2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapperLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(50),
  },
  logo: {
    maxHeight: 80,
  },
  sectionText: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  titleText: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.main.bold,
    color: colors.mainColor,
    marginBottom: 10,
  },
  smallText: {
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.main.regular,
    color: colors.thirdGrey,
  },
  sectionInput: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  sectionRegisterAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(90),
  },
  TitleRegisterAccount: {
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.regular,
  },
  TextRegisterAccount: {
    marginLeft: 5,
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.regular,
    color: colors.mainColor,
  },
  wrapperCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  circlePrimary: {
    width: responsiveWidth(15),
    height: responsiveHeight(12),
    backgroundColor: colors.mainColor,
    borderRadius: 12,
  },
  circleDisable: {
    width: responsiveWidth(15),
    height: responsiveHeight(12),
    backgroundColor: colors.grey,
    borderRadius: 12,
  },
});
