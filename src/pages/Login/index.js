import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Logo} from '../../assets';
import {colors, fonts, heightMobileUI, responsiveHeight} from '../../utils';
import {TextInput} from 'react-native-paper';
import {Button, Jarak} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Login extends Component {
  render() {
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
          />
          <Jarak height={10} />

          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Input your password"
            secureTextEntry
            right={<TextInput.Affix />}
          />
          <Jarak height={20} />
          <Button type="text" title="Login" padding={15} fontSize={18} />
        </View>
        <View style={styles.sectionRegisterAccount}>
          <Text style={styles.TitleRegisterAccount}>
            Don't have an account?
          </Text>
          <Text style={styles.TextRegisterAccount}>Register</Text>
        </View>
      </ScrollView>
    );
  }
}

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
