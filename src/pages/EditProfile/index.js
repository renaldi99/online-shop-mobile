import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Button, Inputan, Pilihan} from '../../components';
import {colors, fonts, getData, responsiveHeight} from '../../utils';
import {connect} from 'react-redux';
import {getCityList, getProvinceList} from '../../actions/RajaOngkirAction';
import {DefaultImageProfile} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
      nama: '',
      email: '',
      noHp: '',
      alamat: '',
      provinsi: false,
      kota: false,
      openImage: false,
      previewImage: false,
      avatar: false,
      avatarForDB: '',
      // avatarLama: '',
      // updateAvatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();

    this.props.dispatch(getProvinceList());
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        noHp: data.noHp,
        alamat: data.alamat,
        kota: data.kota,
        provinsi: data.provinsi,
        avatar: data.avatar,
        avatarLama: data.avatarLama,
      });

      this.props.dispatch(getCityList(data.provinsi));
    });
  };

  clickPreview = index => {
    const {avatar} = this.state;
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: '',
          props: {
            // Or you can set source directory.
            source: avatar ? {uri: avatar} : DefaultImageProfile,
          },
        },
      ],
    });
  };

  changeProvince = province => {
    this.setState({
      provinsi: province,
    });

    this.props.dispatch(getCityList(province));
  };

  getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 500, maxHeight: 500},
      response => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'Please choose your image');
        } else {
          // image profile untuk di tampilkan ke aplikasi
          const source = response.assets[0].uri;
          // image bentuk string untuk di tempatkan ke database
          const fileString = `data: ${response.type};base64,${response.data}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
          });
        }
      },
    );
  };

  onSubmit = () => {
    const {nama, noHp, alamat, provinsi, kota} = this.state;

    if (nama && noHp && alamat && provinsi && kota) {
      // dispatch update
      // this.props.dispatch(updateProfile(this.state))
    } else {
      Alert.alert('Error', 'Form cannot be empty');
    }
  };

  render() {
    const {
      openImage,
      previewImage,
      nama,
      email,
      noHp,
      alamat,
      provinsi,
      kota,
      avatar,
    } = this.state;

    const {getProvinceResult, getCityResult} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionImage}>
            {/* <Text style={styles.sectionLabelImage}>Image Profile</Text> */}

            <View style={styles.sectionInputImage}>
              <TouchableOpacity onPress={index => this.clickPreview(index)}>
                <Image
                  source={avatar ? {uri: avatar} : DefaultImageProfile}
                  style={styles.Image}
                />
              </TouchableOpacity>

              <Modal visible={openImage} transparent={true}>
                <View style={styles.optionImageViewer}>
                  <Button icon="edit" onPress={() => this.getImage()} />
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
          <Inputan
            fontSize={RFValue(18)}
            label="Name"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan
            fontSize={RFValue(18)}
            label="Email"
            value={email}
            disabled
          />
          <Inputan
            fontSize={RFValue(18)}
            label="No. Handphone"
            value={noHp}
            onChangeText={noHp => this.setState({noHp})}
            keyboardType="number-pad"
          />
          <Inputan
            fontSize={RFValue(18)}
            textarea
            label="Address"
            value={alamat}
            onChangeText={alamat => this.setState({alamat})}
          />
          <Pilihan
            fontSize={RFValue(18)}
            height={responsiveHeight(38)}
            label="Province"
            datas={getProvinceResult ? getProvinceResult : []}
            selectedValue={provinsi}
            onValueChange={province => this.changeProvince(province)}
          />
          <Pilihan
            fontSize={RFValue(18)}
            height={responsiveHeight(38)}
            label="City"
            datas={getCityResult ? getCityResult : []}
            selectedValue={kota}
            onValueChange={city => this.setState({kota: city})}
          />

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

const mapStateToProps = state => ({
  getProvinceResult: state.RajaOngkirReducer.getProvinceResult,
  getCityResult: state.RajaOngkirReducer.getCityResult,
});

export default connect(mapStateToProps, null)(EditProfile);

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
