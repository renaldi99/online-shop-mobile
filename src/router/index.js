import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  ListProduct,
  Profile,
  ProductDetail,
  OnBoarding,
  Keranjang,
  Checkout,
  EditProfile,
  ChangePassword,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="ListProduct"
        component={ListProduct}
        options={{headerShown: false, title: 'Product'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          title: 'Cart',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: 'Checkout',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Change Password',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
