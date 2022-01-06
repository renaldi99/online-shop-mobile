import {combineReducers} from 'redux';
import UserReducer from './user';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import CatalogReducer from './catalog';
import ProductReducer from './product';
import CartReducer from './cart';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  CatalogReducer,
  ProductReducer,
  CartReducer,
});

export default rootReducer;
