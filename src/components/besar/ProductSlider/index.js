import React, {Component} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: this.props.images[index],
          props: {
            // Or you can set source directory.
            // source: this.props.images[index],
          },
        },
      ],
    });
  };

  render() {
    const {images} = this.props;
    const {openImage, previewImage} = this.state;
    return (
      <View style={styles.container}>
        <SliderBox
          images={images}
          circleLoop
          sliderBoxHeight={responsiveHeight(420)}
          // backgroundColor="red"
          ImageComponentStyle={styles.product}
          resizeMode={'contain'}
          dotStyle={styles.dotStyle}
          dotColor={colors.mainColor}
          onCurrentImagePressed={index => this.clickPreview(index)}
        />

        <Modal visible={openImage} transparent={true}>
          <ImageViewer
            imageUrls={previewImage}
            backgroundColor={colors.pink}
            onClick={() => this.setState({openImage: false})}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  product: {
    // maxWidth: 300,
    maxHeight: 400,
  },
  dotStyle: {
    marginTop: -40,
  },
});
