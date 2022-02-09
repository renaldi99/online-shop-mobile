import {SNAP_TRANSACTIONS} from '../../actions/PaymentAction';

const initialState = {
  snapTransactionLoading: false,
  snapTransactionResult: false,
  snapTransactionError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SNAP_TRANSACTIONS:
      return {
        ...state,
        snapTransactionLoading: action.payload.loading,
        snapTransactionResult: action.payload.data,
        snapTransactionError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
