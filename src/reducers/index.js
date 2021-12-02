import {combineReducers} from 'redux';
import UserReducer from './user';
import RajaOngkirReducer from './rajaongkir';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
});

export default rootReducer;
