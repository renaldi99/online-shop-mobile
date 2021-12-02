import {GET_PROVINCE} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvinceLoading: false,
  getProvinceResult: false,
  getProvinceError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINCE:
      return {
        ...state,
        getProvinceLoading: action.payload.loading,
        getProvinceResult: action.payload.data,
        getProvinceError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
