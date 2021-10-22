import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';
import {fonts} from '../../utils';

export default class Splash extends Component {
  // Set Timer Splash Screen
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('OnBoarding');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo />
        <Text style={styles.textSplash}>Change your style with us</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FCDF6',
  },
  textSplash: {
    marginTop: 12,
    color: '#0C2461',
    fontFamily: fonts.main.semibold,
  },
});
