import React from 'react';
import ReacDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { addItem } from './actions/cartActions';
import cart from './reducers/cartReducer';
import Wrapper from './components/Wrapper';
import './index.css';

const store = createStore(cart);

ReacDOM.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>,
    document.getElementById('root')
);