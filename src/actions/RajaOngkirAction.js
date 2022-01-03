import axios from 'axios';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
} from '../utils/constant';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_PROVINCE = 'GET_PROVINCE';
export const GET_CITY = 'GET_CITY';

export const getProvinceList = () => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, GET_PROVINCE);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          //ERROR GET
          dispatchError(dispatch, GET_PROVINCE, res);
        } else {
          //SUCCESS GET
          dispatchSuccess(
            dispatch,
            GET_PROVINCE,
            res.data ? res.data.rajaongkir.results : [],
          );
        }
      })
      .catch(err => {
        //ERROR
        dispatchError(dispatch, GET_PROVINCE, err.message);

        alert(err);
      });
  };
};

export const getCityList = provinsi_id => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, GET_CITY);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + `city?province=${provinsi_id}`,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          //ERROR GET
          dispatchError(dispatch, GET_CITY, res);
        } else {
          //SUCCESS GET
          dispatchSuccess(
            dispatch,
            GET_CITY,
            res.data ? res.data.rajaongkir.results : [],
          );
        }
      })
      .catch(err => {
        //ERROR
        dispatchError(dispatch, GET_CITY, err);

        alert(err);
      });
  };
};
