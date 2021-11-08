import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts, responsiveHeight} from '../../../utils';

const Pilihan = ({label, datas, width, height, fontSize}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.pick(width, height, fontSize)}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {datas.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 20,
    fontFamily: fonts.main.regular,
  }),
  pick: (width, height, fontSize) => ({
    width: width,
    height: height,
    fontSize: fontSize ? fontSize : 20,
    fontFamily: fonts.main.regular,
    alignItem: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey',
  }),
  wrapperPicker: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.secondGrey,
  },
  pickerItem: {},
});
