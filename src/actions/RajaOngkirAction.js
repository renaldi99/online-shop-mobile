import axios from 'axios';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
} from '../utils/constant';

export const GET_PROVINCE = 'GET_PROVINCE';
export const GET_CITY = 'GET_CITY';

export const getProvinceList = () => {
  return dispatch => {
    //LOADING
    dispatch({
      type: GET_PROVINCE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          //ERROR GET
          dispatch({
            type: GET_PROVINCE,
            payload: {
              loading: false,
              data: false,
              errorMessage: res,
            },
          });
        } else {
          //SUCCESS GET
          dispatch({
            type: GET_PROVINCE,
            payload: {
              loading: false,
              data: res.data ? res.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(err => {
        //ERROR
        dispatch({
          type: GET_PROVINCE,
          payload: {
            loading: false,
            data: false,
            errorMessage: err,
          },
        });

        alert(err);
      });
  };
};

export const getCityList = provinsi_id => {
  return dispatch => {
    //LOADING
    dispatch({
      type: GET_CITY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + `city?province=${provinsi_id}`,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          //ERROR GET
          dispatch({
            type: GET_CITY,
            payload: {
              loading: false,
              data: false,
              errorMessage: res,
            },
          });
        } else {
          //SUCCESS GET
          dispatch({
            type: GET_CITY,
            payload: {
              loading: false,
              data: res.data ? res.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(err => {
        //ERROR
        dispatch({
          type: GET_CITY,
          payload: {
            loading: false,
            data: false,
            errorMessage: err,
          },
        });

        alert(err);
      });
  };
};
