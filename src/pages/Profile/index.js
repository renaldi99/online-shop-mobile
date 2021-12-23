import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors, fonts, getData, responsiveHeight} from '../../utils';
import {dummyMenu} from '../../data';
import {DefaultImageProfile, IconLine, IconOption} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils';
import {Button, ListMenu} from '../../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
      menus: dummyMenu,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;

    // refresh data when click nav-bottom profile
    // only page profile can run componentDidMount
    this._unsubscribe = navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      if (data) {
        this.setState({
          profile: data,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {profile, menus} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.navItem}>
          <Button
            icon="arrow-left"
            padding={10}
            onPress={() => navigation.goBack()}
          />
          <IconOption />
        </View>
        <View style={styles.container}>
          <Image
            source={
              profile.avatar ? {uri: profile.avatar} : DefaultImageProfile
            }
            style={styles.imageUser}
          />
          <View style={styles.sectionProfile}>
            <Text style={styles.namaProfile}>{profile.nama}</Text>
            <View style={styles.contactProfile}>
              <Text style={styles.contact}>{profile.noHp}</Text>
              <IconLine style={styles.line} />
              <Text style={styles.contact}>{profile.email}</Text>
            </View>
            <Text>
              {profile.alamat}, {profile.kota}
            </Text>
          </View>

          <ListMenu menus={menus} navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.pink,
  },
  navItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(700),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageUser: {
    // responsiive not declared yet
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignSelf: 'center',
    marginTop: -65,
  },
  sectionProfile: {
    marginTop: 10,
    alignItems: 'center',
  },
  namaProfile: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.main.semibold,
  },
  contactProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  line: {
    marginLeft: 10,
    marginRight: 10,
  },
  contact: {
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.main.light,
  },
});
