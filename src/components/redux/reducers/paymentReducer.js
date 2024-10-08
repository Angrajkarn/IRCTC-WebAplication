// reducers/paymentReducer.js
const initialState = {
    selectedMethod: 'recommended',
    qrVisible: false,
    qrValue: '',
    timeRemaining: 360,
    selectedBank: '',
  };
  
  export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PAYMENT_METHOD':
        return { ...state, selectedMethod: action.payload };
      case 'SET_QR_VISIBLE':
        return { ...state, qrVisible: action.payload };
      case 'SET_QR_VALUE':
        return { ...state, qrValue: action.payload };
      case 'SET_TIME_REMAINING':
        return { ...state, timeRemaining: action.payload };
      case 'SET_SELECTED_BANK':
        return { ...state, selectedBank: action.payload };
      default:
        return state;
    }
  };
  