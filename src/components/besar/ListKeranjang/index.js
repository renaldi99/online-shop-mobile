import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../utils';
import {CardKeranjang} from '../../kecil';

const ListKeranjang = ({
  getListCartLoading,
  getListCartResult,
  getListCartError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListCartResult ? (
          Object.keys(getListCartResult.orders).map(key => {
            return (
              <CardKeranjang
                cart={getListCartResult.orders[key]}
                mainCart={getListCartResult}
                key={key}
                id={key}
              />
            );
          })
        ) : getListCartLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.grey} />
          </View>
        ) : getListCartError ? (
          <Text>{getListCartError}</Text>
        ) : (
          <Text>Data Empty</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
