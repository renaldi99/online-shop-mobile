import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../utils';
import {dummyMenu, dummyUser} from '../../data';
import {IconArrowLeft, IconLine, IconOption} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';
import {ListMenu} from '../../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyUser,
      menus: dummyMenu,
    };
  }

  render() {
    const {profile, menus} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.navItem}>
          <IconArrowLeft />
          <IconOption />
        </View>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.imageUser} />
          <View style={styles.sectionProfile}>
            <Text style={styles.namaProfile}>{profile.nama}</Text>
            <View style={styles.contactProfile}>
              <Text style={styles.contact}>{profile.nomorHp}</Text>
              <IconLine style={styles.line} />
              <Text style={styles.contact}>{profile.email}</Text>
            </View>
            <Text>
              {profile.alamat}, {profile.kota}
            </Text>
          </View>

          <ListMenu menus={menus} />
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
