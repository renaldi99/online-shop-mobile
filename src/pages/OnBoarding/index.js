import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {dummyOnboards} from '../../data';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export default class OnBoarding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: dummyOnboards,
      showRealApp: false,
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.wrapperSlide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <Text style={styles.sectionText}>{item.text}</Text>
        </View>
      </View>
    );
  };
  keyExtractor = item => item.title;

  renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#A5C8FF', '#23286B']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </LinearGradient>
    );
  };

  render() {
    const {slides} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <AppIntroSlider
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={slides}
          showPrevButton={true}
          renderNextButton={this.renderNextButton}
          renderPrevButton={this.renderPrevButton}
          renderDoneButton={this.renderDoneButton}
          onDone={() => navigation.navigate('MainApp')}
          activeDotStyle={styles.dotStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: responsiveWidth(254),
    height: responsiveHeight(250),
    resizeMode: 'contain',
  },
  sectionContent: {
    paddingHorizontal: 30,
    marginTop: 70,
  },
  sectionTitle: {
    fontFamily: fonts.main.bold,
    fontSize: RFValue(20),
    textAlign: 'center',
    color: colors.mainColor,
  },
  sectionText: {
    marginTop: 28,
    fontFamily: fonts.main.regular,
    fontSize: RFValue(14),
    textAlign: 'center',
    color: colors.mainColor,
  },
  rightTextWrapper: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  rightText: {
    fontFamily: fonts.main.semibold,
    fontSize: RFValue(14),
    color: colors.mainColor,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  leftText: {
    fontFamily: fonts.main.semibold,
    fontSize: RFValue(14),
    color: colors.mainColor,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontFamily: fonts.main.semibold,
    fontSize: RFValue(14),
    textAlign: 'center',
    margin: 10,
    color: colors.white,
  },
  dotStyle: {
    width: 18,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.mainColor,
  },
});
