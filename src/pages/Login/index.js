import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Logo} from '../../assets';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../utils';
import {TextInput} from 'react-native-paper';
import {Button, Jarak} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {loginUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';
import SweetAlert from 'react-native-sweet-alert';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const {email, password} = this.state;

    if (email && password) {
      // action
      this.props.dispatch(loginUser(email, password));
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle: 'Email and Password cannot be empty',
        style: 'error',
        cancellable: true,
      });
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {navigation, loginLoading} = this.props;
    const {email, password} = this.state;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperLogo}>
          <Logo style={styles.logo} />
        </View>
        <View style={styles.sectionText}>
          <Text style={styles.titleText}>Welcome Back 👋</Text>
          <Text style={styles.smallText}>
            I am happy to see. You can continue to login for buying our product
          </Text>
        </View>
        <View style={styles.sectionInput}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Input your email"
            right={<TextInput.Affix />}
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <Jarak height={10} />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Input your password"
            secureTextEntry
            right={<TextInput.Affix />}
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Jarak height={20} />
          <Button
            type="text"
            title="Login"
            padding={15}
            fontSize={18}
            loading={loginLoading}
            onPress={() => this.login()}
          />
        </View>
        <View style={styles.sectionRegisterAccount}>
          <Text style={styles.TitleRegisterAccount}>
            Don't have an account?
          </Text>
          <Text
            onPress={() => navigation.navigate('Register1')}
            style={styles.TextRegisterAccount}>
            Register
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);

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
    marginTop: responsiveHeight(100),
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
});
