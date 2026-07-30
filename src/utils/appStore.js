import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartslice.js';


//creating store
const appStore = configureStore({

    //Creating reducer for Store
    reducer:{
        cart: cartReducer,
    },
});

export default appStore;