import {combineReducers} from 'redux';
import UserReducer from './user';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import CatalogReducer from './catalog';
import ProductReducer from './product';
import CartReducer from './cart';
import PaymentReducer from './payment'; // midtrans
import OrderReducer from './order'; // melanjutkan checkout dari midtrans
import HistoryReducer from './history'; // history order

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  CatalogReducer,
  ProductReducer,
  CartReducer,
  PaymentReducer,
  OrderReducer,
  HistoryReducer,
});

export default rootReducer;
