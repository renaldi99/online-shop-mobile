import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
  deleteKeyword,
  deleteParameterProduct,
} from '../../../actions/ProductAction';
import {colors} from '../../../utils';
import TabItem from '../TabItem';

const BottomNavigator = ({state, descriptors, navigation, dispatch}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }

          if (route.name !== 'ListProduct') {
            dispatch(deleteParameterProduct());
            dispatch(deleteKeyword());
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default connect()(BottomNavigator);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.mainColor,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginBottom: 30,
    marginHorizontal: 30,
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
