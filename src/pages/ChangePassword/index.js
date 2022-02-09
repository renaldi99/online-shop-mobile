import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import SweetAlert from 'react-native-sweet-alert';
import {connect} from 'react-redux';
import {changePassword} from '../../actions/ProfileAction';
import {Button, Inputan} from '../../components';
import {colors, getData, responsiveHeight} from '../../utils';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      newPassword: '',
      newPasswordConfirm: '',
    };
  }

  onSubmit = () => {
    const {password, newPassword, newPasswordConfirm} = this.state;
    const {navigation} = this.props;

    if (newPassword !== newPasswordConfirm) {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle: 'New Password and New Password Confirm must be match',
        style: 'error',
        cancellable: true,
      });
    } else if (password && newPassword && newPasswordConfirm) {
      // ambil data email dari local
      getData('user').then(res => {
        const parameter = {
          email: res.email,
          password: password,
          newPassword: newPassword,
        };

        this.props.dispatch(changePassword(parameter));
        SweetAlert.showAlertWithOptions({
          title: 'Success',
          subTitle: 'Change Password Success',
          style: 'ok',
          cancellable: true,
        });
        navigation.replace('MainApp');
      });
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle:
          'Password, New Password and New Password Confirm cannot be empty',
        style: 'error',
        cancellable: true,
      });
    }
  };

  componentDidUpdate = prevProps => {
    const {changePasswordResult, navigation} = this.props;

    if (
      changePasswordResult &&
      prevProps.changePasswordResult !== changePasswordResult
    ) {
      Alert.alert('Success Change Password');
      navigation.replace('MainApp');
    }
  };

  render() {
    const {password, newPassword, newPasswordConfirm} = this.state;
    const {changePasswordLoading} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Inputan
            fontSize={RFValue(18)}
            label="Old Password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Inputan
            fontSize={RFValue(18)}
            label="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={newPassword => this.setState({newPassword})}
          />
          <Inputan
            fontSize={RFValue(18)}
            label="Confirm New Password"
            secureTextEntry
            value={newPasswordConfirm}
            onChangeText={newPasswordConfirm =>
              this.setState({newPasswordConfirm})
            }
          />
        </View>

        <View style={styles.wrapperButton}>
          <Button
            title="Update Profile"
            type="text"
            padding={responsiveHeight(18)}
            fontSize={18}
            onPress={() => this.onSubmit()}
            loading={changePasswordLoading}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  changePasswordLoading: state.ProfileReducer.changePasswordLoading,
  changePasswordResult: state.ProfileReducer.changePasswordResult,
  changePasswordError: state.ProfileReducer.changePasswordError,
});

export default connect(mapStateToProps, null)(ChangePassword);

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
