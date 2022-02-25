import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {CardHistory} from '../../kecil';
import {EmptyBox} from '../../../assets';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../utils';
import {connect} from 'react-redux';

const ListHistory = ({
  navigation,
  getListHistoryLoading,
  getListHistoryResult,
  getListHistoryError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListHistoryResult ? (
          Object.keys(getListHistoryResult).map(key => {
            return (
              <CardHistory
                navigation={navigation}
                order={getListHistoryResult[key]}
                key={key}
                id={key}
              />
            );
          })
        ) : getListHistoryLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.grey} />
          </View>
        ) : getListHistoryError ? (
          <Text>{getListHistoryError}</Text>
        ) : (
          <EmptyBox />
        )}
      </View>
    </ScrollView>
  );
};

export default connect()(ListHistory);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
