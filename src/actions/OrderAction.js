import FIREBASE from '../config/FIREBASE';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const UPDATE_ORDER = 'UPDATE_ORDER';

export const updateOrder = params => {
  // get data from parameter from checkout page (snapTransactionResult)
  // and update to firebase
  return dispatch => {
    dispatchLoading(dispatch, UPDATE_ORDER);

    // GET UID User
    const uid = params.order_id.split('-')[2];

    // UID for get cart by UID user
    FIREBASE.database()
      .ref('carts/' + uid)
      .once('value')
      .then(querySnapshot => {
        if (querySnapshot.val()) {
          // get data cart
          const data = querySnapshot.val();
          // modif data cart / duplikasi atau modifikasi
          // newData ini akan menjadi data history
          const newData = {...data};
          // add some attribute data into newData (tambah beberapa data lagi didalam data baru yang sudah dimodif sebelumnya)
          newData.ongkir = params.ongkir;
          newData.estimasi = params.estimasi;
          newData.url = params.redirect_url;
          newData.order_id = params.order_id;
          newData.status = 'PENDING';

          // after modif data, delete data cart / hapus cart - karna sudah berubah jadi data baru (history)
          FIREBASE.database()
            .ref('carts/' + uid)
            .remove()
            .then(response => {
              // add data hisotry / cart sudah berubah jadi history untuk di firebase
              FIREBASE.database()
                .ref('histories')
                .child(newData.order_id)
                .set(newData)
                .then(res => {
                  // get response
                  dispatchSuccess(dispatch, UPDATE_ORDER, res ? res : []);
                })
                .catch(error => {
                  dispatchError(dispatch, UPDATE_ORDER, error);
                  alert(error);
                });
            })
            .catch(error => {
              dispatchError(dispatch, UPDATE_ORDER, error);
              alert(error);
            });
        } else {
        }
      })
      .catch(error => {
        dispatchError(dispatch, UPDATE_ORDER, error);
        alert(error);
      });
  };
};
