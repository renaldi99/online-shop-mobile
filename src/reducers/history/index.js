import {GET_LIST_HISTORY} from '../../actions/HistoryAction';

const initialState = {
  getListHistoryLoading: false,
  getListHistoryResult: false,
  getListHistoryError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_HISTORY:
      return {
        ...state,
        getListHistoryLoading: action.payload.loading,
        getListHistoryResult: action.payload.data,
        getListHistoryError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
