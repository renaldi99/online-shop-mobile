import React from 'react';
import {View} from 'react-native';
import {CardMenu} from '../../kecil';

const ListMenu = ({menus}) => {
  return (
    <View>
      {menus.map(menu => {
        return <CardMenu menu={menu} key={menu.id} />;
      })}
    </View>
  );
};

export default ListMenu;
