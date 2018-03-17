export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const GET_CART_LENGTH = 'GET_CART_LENGTH';

export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

export const removeItem = (obj) => {
    return {
        type: REMOVE_ITEM,
        obj
    }
}

export const getCartLength = () => {
    return {
        type: GET_CART_LENGTH
    }
}