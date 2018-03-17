import { ADD_ITEM, REMOVE_ITEM } from '../actions/cartActions';

const updateLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const getState = (data) => {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]');
    }

    return JSON.parse(localStorage.getItem('cart'));
}

const cart = (state, action) => {
    let data = getState(state);

    switch (action.type) {
        case ADD_ITEM:
            data = [...data, action.id];
            updateLocalStorage(data);
            return data;
        case REMOVE_ITEM:
            data = data.filter(obj => {
                return obj.id !== action.obj.id;
            });
            updateLocalStorage(data);
            return data;
        default:
            return data;
    }
}

export default cart;