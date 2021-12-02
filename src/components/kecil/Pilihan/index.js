import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const Pilihan = ({
  label,
  datas,
  width,
  height,
  fontSize,
  borderColor,
  borderWidth,
  labelDefault,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label}</Text>
      <View style={styles.wrapperPicker(borderColor, borderWidth)}>
        <Picker
          selectedValue={selectedValue}
          style={styles.pick(width, height, fontSize)}
          onValueChange={onValueChange}>
          <Picker.Item
            label={labelDefault ? labelDefault : '-- Choose --'}
            value=""
          />
          {datas.map((item, index) => (
            <Picker.Item
              label={item.province}
              value={item.province_id}
              key={item.province_id}
            />
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
    marginTop: -10,
    marginBottom: 15,
    // backgroundColor: 'grey',
  }),
  wrapperPicker: (borderColor, borderWidth) => ({
    borderWidth: borderWidth ? borderWidth : 0.5,
    borderRadius: 5,
    borderColor: borderColor ? borderColor : colors.grey,
  }),
  pickerItem: {},
});
