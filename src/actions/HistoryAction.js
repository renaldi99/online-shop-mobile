import FIREBASE from '../config/FIREBASE';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_LIST_HISTORY = 'GET_LIST_HISTORY';

export const getListHistory = uid => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_HISTORY);

    FIREBASE.database()
      .ref('histories')
      .orderByChild('user')
      .equalTo(uid)
      .once('value')
      .then(querySnapshot => {
        const data = querySnapshot.val();
        dispatchSuccess(dispatch, GET_LIST_HISTORY, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_HISTORY, error);
        alert(error);
      });
  };
};
