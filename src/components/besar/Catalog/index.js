import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardCatalog} from '../../kecil';

const Catalog = ({categories}) => {
  return (
    <View style={styles.container}>
      {categories.map(category => {
        return <CardCatalog category={category} key={category.id} />;
      })}
    </View>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
