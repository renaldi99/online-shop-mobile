import {
  GET_IN_CART,
  GET_LIST_CART,
  DELETE_CART,
} from '../../actions/CartAction';

const initialState = {
  saveCartLoading: false,
  saveCartResult: false,
  saveCartError: false,

  getListCartLoading: false,
  getListCartResult: false,
  getListCartError: false,

  deleteCartLoading: false,
  deleteCartResult: false,
  deleteCartError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_IN_CART:
      return {
        ...state,
        saveCartLoading: action.payload.loading,
        saveCartResult: action.payload.data,
        saveCartError: action.payload.errorMessage,
      };
    case GET_LIST_CART:
      return {
        ...state,
        getListCartLoading: action.payload.loading,
        getListCartResult: action.payload.data,
        getListCartError: action.payload.errorMessage,
      };
    case DELETE_CART:
      return {
        ...state,
        deleteCartLoading: action.payload.loading,
        deleteCartResult: action.payload.data,
        deleteCartError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
