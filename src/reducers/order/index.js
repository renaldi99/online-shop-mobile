import {UPDATE_ORDER} from '../../actions/OrderAction';

const initialState = {
  updateOrderLoading: false,
  updateOrderResult: false,
  updateOrderError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      return {
        ...state,
        updateOrderLoading: action.payload.loading,
        updateOrderResult: action.payload.data,
        updateOrderError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
