import FIREBASE from '../config/FIREBASE';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError,
  storeData,
} from '../utils';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, REGISTER_USER);

    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(success => {
        // Ambil UID, buat data baru (data+uid)
        const dataBaru = {
          ...data,
          uid: success.user.uid,
        };

        // Simpan ke Realtime Database Firebase
        FIREBASE.database()
          .ref('users/' + success.user.uid)
          .set(dataBaru);

        // SUCCESS
        dispatchSuccess(dispatch, REGISTER_USER, dataBaru);

        // Simpan ke Local Storage (Async)
        storeData('user', dataBaru);
      })
      .catch(error => {
        //ERROR
        dispatchError(dispatch, REGISTER_USER, error.message);

        alert(error.message);
      });
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    //Loading
    dispatchLoading(dispatch, LOGIN_USER);

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        // Signed in, read data once --docs from realtime firebase
        FIREBASE.database()
          .ref('/users/' + success.user.uid)
          .once('value')
          .then(resDB => {
            if (resDB) {
              // SUCCESS
              dispatchSuccess(dispatch, LOGIN_USER, resDB.val());

              // Simpan ke Local Storage (Async)
              storeData('user', resDB.val());
            } else {
              dispatchError(dispatch, LOGIN_USER, 'Data User is Empty');

              alert('Data User is Empty');
            }
          });
      })
      .catch(error => {
        //ERROR
        dispatchError(dispatch, LOGIN_USER, error.message);

        alert(error.message);
      });
  };
};
