import {Alert} from 'react-native';
import FIREBASE from '../config/FIREBASE';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError,
  storeData,
} from '../utils';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfile = data => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, UPDATE_PROFILE);

    const dataBaru = {
      uid: data.uid,
      nama: data.nama,
      alamat: data.alamat,
      noHp: data.noHp,
      kota: data.kota,
      provinsi: data.provinsi,
      email: data.email,
      status: 'USER',
      avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama,
    };

    FIREBASE.database()
      .ref('users/' + dataBaru.uid)
      .update(dataBaru)
      .then(res => {
        // SUCCESS
        dispatchSuccess(dispatch, UPDATE_PROFILE, res ? res : []);

        // Simpan ke Local Storage (Async)
        storeData('user', dataBaru);
      })
      .catch(error => {
        //ERROR
        dispatchError(dispatch, UPDATE_PROFILE, error.message);

        alert(error.message);
      });
  };
};

export const changePassword = data => {
  return dispatch => {
    dispatchLoading(dispatch, CHANGE_PASSWORD);

    // cek apakah email dan password lama benar
    FIREBASE.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        // jika sukses update password
        const user = FIREBASE.auth().currentUser;

        user
          .updatePassword(data.newPassword)
          .then(() => {
            // Update successful.
            dispatchSuccess(
              dispatch,
              CHANGE_PASSWORD,
              'Success Update Password',
            );
          })
          .catch(error => {
            // An error ocurred
            dispatchError(dispatch, UPDATE_PROFILE, error);

            alert(error);
          });
      })
      .catch(error => {
        //ERROR
        dispatchError(dispatch, UPDATE_PROFILE, error.message);

        alert(error.message);
      });
  };
};
