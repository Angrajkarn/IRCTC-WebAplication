// actions/paymentActions.js
export const setPaymentMethod = (method) => ({
    type: 'SET_PAYMENT_METHOD',
    payload: method,
  });
  
  export const setQrVisible = (visible) => ({
    type: 'SET_QR_VISIBLE',
    payload: visible,
  });
  
  export const setQrValue = (value) => ({
    type: 'SET_QR_VALUE',
    payload: value,
  });
  
  export const setTimeRemaining = (time) => ({
    type: 'SET_TIME_REMAINING',
    payload: time,
  });
  
  export const setSelectedBank = (bank) => ({
    type: 'SET_SELECTED_BANK',
    payload: bank,
  });
  