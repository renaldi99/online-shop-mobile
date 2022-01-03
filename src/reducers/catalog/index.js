import {GET_LIST_CATALOG} from '../../actions/CatalogAction';

const initialState = {
  getListCatalogLoading: false,
  getListCatalogResult: false,
  getListCatalogError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_CATALOG:
      return {
        ...state,
        getListCatalogLoading: action.payload.loading,
        getListCatalogResult: action.payload.data,
        getListCatalogError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
