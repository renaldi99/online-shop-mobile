import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = data => {
  return dispatch => {
    // LOADING
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

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
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: res ? res : [],
            errorMessage: false,
          },
        });

        // Simpan ke Local Storage (Async)
        storeData('user', dataBaru);
      })
      .catch(error => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });

        alert(error.message);
      });
  };
};
