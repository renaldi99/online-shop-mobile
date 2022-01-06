import FIREBASE from '../config/FIREBASE';
import {dispatchLoading, dispatchSuccess, dispatchError} from '../utils';

export const GET_IN_CART = 'GET_IN_CART';
export const GET_LIST_CART = 'GET_LIST_CART';
export const DELETE_CART = 'DELETE_CART';

export const getInCart = data => {
  return dispatch => {
    dispatchLoading(dispatch, GET_IN_CART);

    // check cart from uid user
    FIREBASE.database()
      .ref('carts/' + data.uid)
      .once('value', querySnapshot => {
        if (querySnapshot.val()) {
          // update main cart
          const mainCart = querySnapshot.val();
          const newWeightProduct =
            parseInt(data.quantity) * parseFloat(data.product.berat);
          const newPriceProduct =
            parseInt(data.quantity) * parseInt(data.product.harga);

          FIREBASE.database()
            .ref('carts/')
            .child(data.uid)
            .update({
              totalPrice: mainCart.totalPrice + newPriceProduct,
              totalWeight: mainCart.totalWeight + newWeightProduct,
            })
            .then(response => {
              // save to cart detail
              dispatch(getInCartDetail(data));
            })
            .catch(error => {
              dispatchError(dispatch, GET_IN_CART, error);
              alert(error);
            });
        } else {
          // save main cart
          const mainCart = {
            user: data.uid,
            date: new Date().toDateString(),
            totalPrice: parseInt(data.quantity) * parseInt(data.product.harga),
            totalWeight:
              parseInt(data.quantity) * parseFloat(data.product.berat),
          };

          FIREBASE.database()
            .ref('carts/')
            .child(data.uid)
            .set(mainCart)
            .then(response => {
              // save to cart detail
              dispatch(getInCartDetail(data));
            })
            .catch(error => {
              dispatchError(dispatch, GET_IN_CART, error);
              alert(error);
            });
        }
      })
      .catch(error => {
        dispatchError(dispatch, GET_IN_CART, error);
        alert(error);
      });
  };
};

export const getInCartDetail = data => {
  return dispatch => {
    const orders = {
      product: data.product,
      totalOrder: data.quantity,
      totalPrice: parseInt(data.quantity) * parseInt(data.product.harga),
      totalWeight: parseInt(data.quantity) * parseFloat(data.product.berat),
      desc: data.desc,
      size: data.size,
    };

    FIREBASE.database()
      .ref('carts/' + data.uid)
      .child('orders')
      .push(orders)
      .then(response => {
        dispatchSuccess(dispatch, GET_IN_CART, response ? response : []);
      })
      .catch(error => {
        dispatchError(dispatch, GET_IN_CART, error);
        alert(error);
      });
  };
};

export const getListCart = id => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_CART);

    FIREBASE.database()
      .ref('carts/' + id)
      .once('value', querySnapshot => {
        //result
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_CART, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_CART, error);
        alert(error);
      });
  };
};

export const deleteCart = (id, mainCart, cart) => {
  return dispatch => {
    dispatchLoading(dispatch, DELETE_CART);

    const totalNewPrice = mainCart.totalPrice - cart.totalPrice;
    const totalNewWeight = mainCart.totalWeight - cart.totalWeight;

    if (totalNewPrice === 0) {
      // delete main cart & detail
      FIREBASE.database()
        .ref('carts')
        .child(mainCart.user)
        .remove()
        .then(response => {
          dispatchSuccess(dispatch, DELETE_CART, 'Delete Success');
        })
        .catch(error => {
          dispatchError(dispatch, DELETE_CART, error);
        });
    } else {
      // update total price and total weight main cart
      FIREBASE.database()
        .ref('carts')
        .child(mainCart.user)
        .update({
          totalPrice: totalNewPrice,
          totalWeight: totalNewWeight,
        })
        .then(response => {
          // delete cart/detail
          dispatch(deleteCartDetail(id, mainCart));
        })
        .catch(error => {
          dispatchError(dispatch, DELETE_CART, error);
        });
    }
  };
};

export const deleteCartDetail = (id, mainCart) => {
  return dispatch => {
    FIREBASE.database()
      .ref('carts/' + mainCart.user)
      .child('orders')
      .child(id)
      .remove()
      .then(response => {
        dispatchSuccess(dispatch, DELETE_CART, 'Delete Success');
      })
      .catch(error => {
        dispatchError(dispatch, DELETE_CART, error);
      });
  };
};
