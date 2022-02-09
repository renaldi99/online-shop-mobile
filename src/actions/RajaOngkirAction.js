import axios from 'axios';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
  API_HEADER_RAJAONGKIR_COST,
  ORIGIN_CITY,
} from '../utils/constant';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_PROVINCE = 'GET_PROVINCE';
export const GET_CITY = 'GET_CITY';
export const GET_CITY_DETAIL = 'GET_CITY_DETAIL';
export const POST_ONGKIR = 'POST_ONGKIR';

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

export const getCityDetail = city_id => {
  return dispatch => {
    //LOADING
    dispatchLoading(dispatch, GET_CITY_DETAIL);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + `city?id=${city_id}`,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          //ERROR GET
          dispatchError(dispatch, GET_CITY_DETAIL, res);
        } else {
          //SUCCESS GET
          dispatchSuccess(
            dispatch,
            GET_CITY_DETAIL,
            res.data ? res.data.rajaongkir.results : [],
          );
        }
      })
      .catch(err => {
        //ERROR
        dispatchError(dispatch, GET_CITY_DETAIL, err);

        alert(err);
      });
  };
};

export const postOngkir = (data, eskpedisi) => {
  return dispatch => {
    dispatchLoading(dispatch, POST_ONGKIR);

    const formData = new URLSearchParams();
    formData.append('origin', ORIGIN_CITY);
    formData.append('destination', data.dataUser.kota);
    formData.append(
      'weight',
      data.totalWeight < 1 ? 1000 : data.totalWeight * 1000,
    );
    formData.append('courier', eskpedisi.kurir);

    axios({
      method: 'post',
      url: API_RAJAONGKIR + 'cost',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR_COST,
      data: formData,
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR GET
          dispatchError(dispatch, POST_ONGKIR, response);
        } else {
          //SUCCESS GET

          const ongkirs = response.data.rajaongkir.results[0].costs;
          const ongkirSelected = ongkirs
            .filter(ongkir => ongkir.service === eskpedisi.service)
            .map(filterOngkir => {
              return filterOngkir;
            });

          dispatchSuccess(dispatch, POST_ONGKIR, ongkirSelected[0]);
        }
      })
      .catch(error => {
        dispatchError(dispatch, POST_ONGKIR, error);
        alert(error);
      });
  };
};
