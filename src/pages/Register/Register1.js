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
import {Button, Jarak} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Register1 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionText}>
          <Text style={styles.titleText}>Register ✍️</Text>
          <Text style={styles.smallText}>
            Create an account so you can buy our product!
          </Text>
        </View>
        <View style={styles.wrapperCircle}>
          <View style={styles.circlePrimary} />
          <Jarak width={10} />
          <View style={styles.circleDisable} />
        </View>
        <View style={styles.sectionInput}>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Input your name"
            right={<TextInput.Affix />}
          />
          <Jarak height={10} />
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
          <Jarak height={10} />
          <TextInput
            mode="outlined"
            label="No. Handphone"
            placeholder="Input your number"
            right={<TextInput.Affix />}
          />
          <Jarak height={20} />
          <Button
            type="text"
            title="Continue"
            padding={15}
            fontSize={18}
            onPress={() => navigation.navigate('Register2')}
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
