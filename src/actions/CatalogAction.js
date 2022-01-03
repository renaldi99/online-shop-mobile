import FIREBASE from '../config/FIREBASE';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_LIST_CATALOG = 'GET_LIST_CATALOG';

export const getListCatalog = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_CATALOG);

    FIREBASE.database()
      .ref('catalogs')
      .once('value', querySnapshot => {
        //result
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_CATALOG, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_CATALOG, error);
        alert(error);
      });
  };
};
