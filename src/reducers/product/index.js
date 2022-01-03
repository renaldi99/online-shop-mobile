import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_BY_CATALOG,
  DELETE_PARAMETER_PRODUCT,
  SAVE_KEYWORD_SEARCH,
  DELETE_KEYWORD_SEARCH,
} from '../../actions/ProductAction';

const initialState = {
  getListProductLoading: false,
  getListProductResult: false,
  getListProductError: false,

  idProduct: false,
  namaKatalog: false,
  keyword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      // console.log('Masuk');
      // console.log('data: ', action.payload.data);
      return {
        ...state,
        getListProductLoading: action.payload.loading,
        getListProductResult: action.payload.data,
        getListProductError: action.payload.errorMessage,
      };
    case GET_LIST_PRODUCT_BY_CATALOG:
      return {
        ...state,
        idProduct: action.payload.idProduct,
        namaKatalog: action.payload.namaKatalog,
      };
    case DELETE_PARAMETER_PRODUCT:
      return {
        ...state,
        idProduct: false,
        namaKatalog: false,
      };
    case SAVE_KEYWORD_SEARCH:
      return {
        ...state,
        keyword: action.payload.data,
      };
    case DELETE_KEYWORD_SEARCH:
      return {
        ...state,
        keyword: false,
      };
    default:
      return state;
  }
}
