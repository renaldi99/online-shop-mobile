import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, Inputan} from '../../components';
import {colors, responsiveHeight} from '../../utils';

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Inputan
            fontSize={RFValue(18)}
            label="Old Password"
            secureTextEntry
          />
          <Inputan
            fontSize={RFValue(18)}
            label="New Password"
            secureTextEntry
          />
          <Inputan
            fontSize={RFValue(18)}
            label="Confirm New Password"
            secureTextEntry
          />
        </View>

        <View style={styles.wrapperButton}>
          <Button
            title="Update Profile"
            type="text"
            padding={responsiveHeight(18)}
            fontSize={18}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  wrapperButton: {
    paddingTop: 10,
  },
});
