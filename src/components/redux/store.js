// src/components/redux/store.js

import { legacy_createStore as createStore, combineReducers } from 'redux';
import trainReducer from './reducers/trainReducer';
import bookingReducer from './reducers/bookingReducer';
import { paymentReducer } from './reducers/paymentReducer';


const rootReducer = combineReducers({
  train: trainReducer,
  payment: paymentReducer,
  booking: bookingReducer
});

const store = createStore(rootReducer);

export default store;
