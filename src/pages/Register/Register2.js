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
import SweetAlert from 'react-native-sweet-alert';
import {registerUser} from '../../actions/AuthAction';

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alamat: '',
      kota: false,
      provinsi: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinceList());
  }

  componentDidUpdate(prevProps) {
    const {registerResult} = this.props;

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  changeProvince = province => {
    this.setState({
      provinsi: province,
    });

    this.props.dispatch(getCityList(province));
  };

  onContinue = () => {
    const {kota, provinsi, alamat} = this.state;
    const {nama, email, noHp, password} = this.props.route.params;

    if (kota && provinsi && alamat) {
      const data = {
        nama: nama,
        email: email,
        noHp: noHp,
        alamat: alamat,
        provinsi: provinsi,
        kota: kota,
        status: 'USER',
      };

      //send to auth action
      this.props.dispatch(registerUser(data, password));
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle: 'Form cannot be empty',
        style: 'error',
        cancellable: true,
      });
    }
  };

  render() {
    const {kota, provinsi, alamat} = this.state;
    const {getProvinceResult, getCityResult, registerLoading} = this.props;
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
            onChangeText={alamat => this.setState({alamat})}
            value={alamat}
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
            onPress={() => this.onContinue()}
            loading={registerLoading}
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

  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
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
