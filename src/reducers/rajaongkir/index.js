import {
  GET_PROVINCE,
  GET_CITY,
  GET_CITY_DETAIL,
} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvinceLoading: false,
  getProvinceResult: false,
  getProvinceError: false,

  getCityLoading: false,
  getCityResult: false,
  getCityError: false,

  getCityDetailLoading: false,
  getCityDetailResult: false,
  getCityDetailError: false,
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
    case GET_CITY:
      return {
        ...state,
        getCityLoading: action.payload.loading,
        getCityResult: action.payload.data,
        getCityError: action.payload.errorMessage,
      };
    case GET_CITY_DETAIL:
      return {
        ...state,
        getCityDetailLoading: action.payload.loading,
        getCityDetailResult: action.payload.data,
        getCityDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
