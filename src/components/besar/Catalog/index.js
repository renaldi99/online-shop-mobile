import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardCatalog} from '../../kecil';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../utils';

const Catalog = ({
  getListCatalogLoading,
  getListCatalogResult,
  getListCatalogError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListCatalogResult ? (
        Object.keys(getListCatalogResult).map(key => {
          return (
            <CardCatalog
              navigation={navigation}
              category={getListCatalogResult[key]}
              key={key}
              id={key}
            />
          );
        })
      ) : getListCatalogLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.grey} />
        </View>
      ) : getListCatalogError ? (
        <Text>{getListCatalogError}</Text>
      ) : (
        <Text>No Item</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  getListCatalogLoading: state.CatalogReducer.getListCatalogLoading,
  getListCatalogResult: state.CatalogReducer.getListCatalogResult,
  getListCatalogError: state.CatalogReducer.getListCatalogError,
});

export default connect(mapStateToProps, null)(Catalog);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
