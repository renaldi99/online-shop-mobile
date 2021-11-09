import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CardHistory} from '../../kecil';

const ListHistory = ({orders}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {orders.map(order => {
          return <CardHistory order={order} key={order.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
});
