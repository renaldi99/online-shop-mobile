import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Button, Inputan, Pilihan} from '../../components';
import {dummyUser} from '../../data';
import {colors, fonts, responsiveHeight} from '../../utils';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyUser,
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: '',
          props: {
            // Or you can set source directory.
            source: this.state.profile.avatar,
          },
        },
      ],
    });
  };

  render() {
    const {dataProvinsi, dataKota, profile, openImage, previewImage} =
      this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionImage}>
            {/* <Text style={styles.sectionLabelImage}>Image Profile</Text> */}

            <View style={styles.sectionInputImage}>
              <TouchableOpacity onPress={index => this.clickPreview(index)}>
                <Image source={profile.avatar} style={styles.Image} />
              </TouchableOpacity>

              <Modal visible={openImage} transparent={true}>
                <View style={styles.optionImageViewer}>
                  <Button icon="edit" />
                </View>
                <ImageViewer
                  imageUrls={previewImage}
                  backgroundColor={colors.secondGrey}
                  onClick={() => this.setState({openImage: false})}
                  enableSwipeDown
                  onSwipeDown={() => this.setState({openImage: false})}
                />
              </Modal>
            </View>
          </View>
          <Inputan fontSize={RFValue(18)} label="Name" value={profile.nama} />
          <Inputan fontSize={RFValue(18)} label="Email" value={profile.email} />
          <Inputan
            fontSize={RFValue(18)}
            label="No. Handphone"
            value={profile.nomorHp}
          />
          <Inputan
            fontSize={RFValue(18)}
            textarea
            label="Address"
            value={profile.alamat}
          />
          <Pilihan
            fontSize={RFValue(18)}
            label="Province"
            datas={dataProvinsi}
          />
          <Pilihan fontSize={RFValue(18)} label="City" datas={dataKota} />

          <View style={styles.wrapperButton}>
            <Button
              title="Update Profile"
              type="text"
              padding={responsiveHeight(18)}
              fontSize={18}
            />
          </View>
        </ScrollView>
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
  },
  sectionImage: {
    // marginTop: 20,
  },
  sectionLabelImage: {
    fontSize: RFValue(18),
    fontFamily: fonts.main.regular,
  },
  Image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignSelf: 'center',
  },
  wrapperButton: {
    paddingTop: 10,
  },
  optionImageViewer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
  },
});
