import * as actionTypes from './reducer-type'
export const addItem = (itemID) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        id: itemID,
      },
    };
  };


export const adjustItemQty = (itemID, qty) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};