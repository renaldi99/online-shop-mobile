import FIREBASE from '../config/FIREBASE';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
export const GET_LIST_PRODUCT_BY_CATALOG = 'GET_LIST_PRODUCT_BY_CATALOG';
export const DELETE_PARAMETER_PRODUCT = 'DELETE_PARAMETER_PRODUCT';
export const SAVE_KEYWORD_SEARCH = 'SAVE_KEYWORD_SEARCH';
export const DELETE_KEYWORD_SEARCH = 'DELETE_KEYWORD_SEARCH';

export const getListProduct = (idProduct, keyword) => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    if (idProduct) {
      FIREBASE.database()
        .ref('products')
        .orderByChild('log') // berisi string key yang sama dengan id/key catalog di realtime database
        .equalTo(idProduct)
        .once('value', querySnapshot => {
          //result
          let data = querySnapshot.val();
          // console.log('data: ', data);

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('products')
        .orderByChild('nama')
        .equalTo(keyword.toUpperCase())
        .once('value', querySnapshot => {
          //result
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('products')
        .once('value', querySnapshot => {
          //result
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    }
  };
};

export const getSomeProduct = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    FIREBASE.database()
      .ref('products')
      .limitToLast(4)
      .once('value', querySnapshot => {
        //result
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_PRODUCT, error);
        alert(error);
      });
  };
};

export const getProductByCatalog = (id, namaKatalog) => ({
  type: GET_LIST_PRODUCT_BY_CATALOG,
  payload: {
    idProduct: id,
    namaKatalog: namaKatalog,
  },
});

export const deleteParameterProduct = () => ({
  type: DELETE_PARAMETER_PRODUCT,
});

export const saveKeyword = search => ({
  type: SAVE_KEYWORD_SEARCH,
  payload: {
    data: search,
  },
});

export const deleteKeyword = () => ({
  type: DELETE_KEYWORD_SEARCH,
});
