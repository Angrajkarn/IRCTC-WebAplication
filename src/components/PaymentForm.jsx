// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { QRCodeSVG } from 'qrcode.react';
// import { setPaymentMethod, setQrVisible, setQrValue, setTimeRemaining, setSelectedBank } from './redux/actions/paymentActions';
// import { FaCreditCard, FaMobileAlt, FaWallet, FaQrcode, FaStar,FaTrain, FaInfoCircle, FaRegCheckCircle } from 'react-icons/fa';
// import './PaymentsForm.scss';
// import pay from "../assets/images/1.png";
// import k1 from "../assets/images/k1.png";
// import k2 from "../assets/images/k2.svg";

// const PaymentForm = () => {
//   const dispatch = useDispatch();
//   const { selectedMethod, qrVisible, qrValue, timeRemaining, selectedBank } = useSelector(state => state.payment);
//   const trainDetails = useSelector(state => state.booking.trainDetails);
//   // const travelers = useSelector(state => state.booking.travelers);

//   useEffect(() => {
//     if (qrVisible) {
//       const timer = setInterval(() => {
//         dispatch(setTimeRemaining(timeRemaining - 1));
//         if (timeRemaining <= 1) {
//           dispatch(setQrValue(generateQrValue()));
//           dispatch(setTimeRemaining(360));
//         }
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [qrVisible, timeRemaining, dispatch]);

//   const generateQrValue = () => Math.random().toString(36).substring(7);

//   const handleGenerateClick = () => {
//     dispatch(setQrValue(generateQrValue()));
//     dispatch(setQrVisible(true));
//     dispatch(setTimeRemaining(360));
//   };

//   const handlePaymentMethodSelect = (method) => {
//     dispatch(setPaymentMethod(method));
//     if (method !== 'pay-via-upi') {
//       dispatch(setQrVisible(false));
//     }
//   };

//   const handleBankSelect = (event) => {
//     dispatch(setSelectedBank(event.target.value));
//   };

//   const handleRedirectToBank = () => {
//     const bankUrls = {
//       'bank1': 'https://netbanking.bank1.com',
//       'bank2': 'https://netbanking.bank2.com',
//     };
//     window.location.href = bankUrls[selectedBank];
//   };

//   return (
//     <div className="payment-form">
//       {/* Fare Summary */}
//       {/* Display details from trainDetails */}
//       <div 
//         className="fare-summary"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
// >
//         <h2>Fare Summary</h2>
//         <div className="fare-details">
//           <div className="fare-item">
//             <span>Ticket Fare</span>
//             <span>₹{trainDetails.fair}</span>
//           </div>
//           <div className="fare-item">
//             <span>Convenience Fee (Incl. of GST)</span>
//             <span>₹17.7</span>
//           </div>
//           <div className="fare-item">
//             <span>Agent Service Charge</span>
//             <span>₹20</span>
//           </div>
//           <div className="fare-item">
//             <span>Payment Gateway Charges (Incl. of GST)</span>
//             <span>₹21.91</span>
//           </div>
//           <div className="fare-total">
//             <span>Amount To Be Paid</span>
//             <span>₹{trainDetails.fair}</span>
//           </div>
//         </div>
//         <div className="ticket-card">
//       <div className="ticket-header">
//         <div className="train-info">
//           <div className="train-number">
//             <FaTrain className="icon-train" /> {trainDetails.trainNumber}{trainDetails.trainName}
//           </div>
//           <div className="pnr-status">
//             <span>GNWL95/WL48</span>
//           </div>
//         </div>
//       </div>

//       <div className="timing-info">
//         <h3>{trainDetails.fromStation}  {trainDetails.departureTime} -{trainDetails.toStation}  {trainDetails.arrivalTime} </h3>
//         <p>  {trainDetails.departureTime}• {trainDetails.class} • General</p>
//         <p className="berth-info">
//           <FaInfoCircle className="icon-info" /> Berth/coach numbers are assigned by the Indian Railways
//         </p>
//       </div>
//       {/* <div className="ticket-body"> */}
//       {/* <h4>Travellers</h4>
//       <ul className="travellers-list">
//         {travelers && travelers.length > 0 ? (
//           travelers.map((traveler, index) => (
//             <li key={index}>
//               <p>Name: {traveler.passengerName}</p>
//               <p>Age: {traveler.age}</p>
//               <p>Gender: {traveler.gender}</p>
//               <p>Berth Preference: {traveler.berthPreference}</p>
//             </li>
//           ))
//         ) : (
//           <li>No travelers listed.</li>
//         )}
//       </ul>
//     </div> */}

//       <div className="ticket-footer">
//         <p><FaRegCheckCircle className="icon-partner" /> Authorised IRCTC Partner</p>
//       </div>
//     </div>
//       </div>
//       <div className="payment-options">
//         <h2>Payment Methods</h2>
//         <div
//           className={`payment-method ${selectedMethod === 'recommended' ? 'active' : ''}`}
//           onClick={() => handlePaymentMethodSelect('recommended')}
//         >
//           <FaStar className='icon'/>
//           <div className='deo'>
//             <span>Recommended</span>
//             <p>Recently used method</p>
//           </div>
//         </div>
//         <div
//           className={`payment-method ${selectedMethod === 'pay-via-upi' ? 'active' : ''}`}
//           onClick={() => handlePaymentMethodSelect('pay-via-upi')}
//         >
//           <FaWallet className="icon" />
//           <div className='deo'>
//             <span>Pay via any UPI app</span>
//             <p>Scan and pay with UPI</p>
//           </div>
//         </div>
//         <div
//           className={`payment-method ${selectedMethod === 'card' ? 'active' : ''}`}
//           onClick={() => handlePaymentMethodSelect('card')}
//         >
//           <FaCreditCard className="icon" />
//           <div className='deo'>
//             <span>Credit/Debit/ATM Card</span>
//             <p>VISA, Mastercard, Amex, RuPay & more</p>
//           </div>
//         </div>
//         <div
//           className={`payment-method ${selectedMethod === 'emi' ? 'active' : ''}`}
//           onClick={() => handlePaymentMethodSelect('emi')}
//         >
//           <FaMobileAlt className="icon" />
//           <div className='deo'>
//             <span>Pay Later & Easy EMI</span>
//             <p>Simpl, Bajaj EMI & more</p>
//           </div>
//         </div>
//         <div
//           className={`payment-method ${selectedMethod === 'netbanking' ? 'active' : ''}`}
//           onClick={() => handlePaymentMethodSelect('netbanking')}
//         >
//           <FaQrcode className="icon" />
//           <div className='deo'>
//             <span>Net Banking</span>
//             <p>Select from list of banks</p>
//           </div>
//         </div>
//       </div>

//       {/* UPI Payment Section */}
//       {selectedMethod === 'recommended' && (
//         <div 
//           className="upi-section"
//           initial={{ opacity: 0, x: 10 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="scan-pay">
//             <h3>Scan & Pay with UPI</h3>
//             <ol>
//               <li>Open any UPI or banking app on your phone</li>
//               <li>Scan the QR code to pay</li>
//             </ol>
//             <div className="img-container">
//               <div className="img-scan">
//                 <img src={pay} alt='pay'/>
//               </div>
//             </div>
//             <div className="generate-qr-container">
//               <div className="img-upi">
//                 <img src={k1} alt='k2'/>
//               </div>
//               <div className="qr-container">
//                 <QRCodeSVG value={qrValue} className={`qr-code ${qrVisible ? 'visible' : ''}`} />
//                 {!qrVisible && (
//                   <button className="generate-qr" onClick={handleGenerateClick}>
//                     Generate QR
//                   </button>
//                 )}
//                 {qrVisible && (
//             <div className="timer">
//            Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
//          </div>
//        )}
//               </div>
//             </div>
//             <div className='int'>
//             <p><img src={k2} alt='deo'/>Pay Only ₹{trainDetails.fair} Via UPI </p>
//              </div>
//           </div>
//         </div>
//       )}

//       {selectedMethod === 'pay-via-upi' && (
//         <div 
//           className="upi-section"
//           initial={{ opacity: 0, x: 10 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="scan-pay">
//             <h3>Scan & Pay with UPI</h3>
//             <ol>
//               <li>Open any UPI or banking app on your phone</li>
//               <li>Scan the QR code to pay</li>
//             </ol>
//             <div className="img-container">
//               <div className="img-scan">
//                 <img src={pay} alt='pay'/>
//               </div>
//             </div>
//             <div className="generate-qr-container">
//               <div className="img-upi">
//                 <img src={k1} alt='k2'/>
//               </div>
//               <div className="qr-container">
//                 <QRCodeSVG value={qrValue} className={`qr-code ${qrVisible ? 'visible' : ''}`} />
//                 {!qrVisible && (
//                   <button className="generate-qr" onClick={handleGenerateClick}>
//                     Generate QR
//                   </button>
//                 )}
//                 {qrVisible && (
//             <div className="timer">
//            Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
//          </div>
//        )}
//               </div>
//             </div>
//             <div className='int'>
//             <p><img src={k2} alt='deo'/>Pay Only ₹{trainDetails.fair} Via UPI </p>
//              </div>
//           </div>
//           <div className="manual-upi">
//            <hr style={{ border: "1px solid black", width: "100%" }} />
//              <h3>Enter UPI ID Manually</h3>
//              <input type="text" placeholder="Enter UPI ID" />
//              <button className="pay-button">Pay ₹{trainDetails.fair}</button>
//            </div>
//            <div className='int'>
//              <p><img src={k2} alt='deo'/>Pay Only {trainDetails.fair} Via UPI </p>
//            </div>
//         </div>
//       )}

//        {selectedMethod === 'card' && (
//          <div 
//            className="card-form"
//            initial={{ opacity: 0, x: 10 }}
//            animate={{ opacity: 1, x: 0 }}
//            transition={{ duration: 0.5, delay: 0.4 }}
//          >
//            <h3>Enter Card Details</h3>
//            <form>
//              <div className="form-group">
//                <input type="text" id="cardNumber" placeholder="Enter card number" />
//              </div>
//              <div className="form-group">
//                <input type="text" id="cardName" placeholder="Enter cardholder name" />
//              </div>
//              <div className="form-group">
//                <input type="text" id="expiryDate" placeholder="MM/YY" />
//              </div>
//              <div className="form-group">
//                <input type="text" id="cvv" placeholder="CVV" />
//              </div>
//              <button className="pay-button">Pay ₹{trainDetails.fair}</button>
//            </form>
//          </div>
//        )}
        
//        {selectedMethod === 'emi' && (
//          <div 
//            className="emi-form"
//            initial={{ opacity: 0, x: 10 }}
//            animate={{ opacity: 1, x: 0 }}
//            transition={{ duration: 0.5, delay: 0.4 }}
//          >
//            <h3>Choose EMI Option</h3>
//            <form>
//              <div className="form-group">
//                <label htmlFor="emiTenure">Tenure</label>
//                <select id="emiTenure">
//                  <option value="3">3 Months</option>
//                  <option value="6">6 Months</option>
//                  <option value="9">9 Months</option>
//                  <option value="12">12 Months</option>
//                </select>
//              </div>
//              <button className="pay-button">Pay ₹{trainDetails.fair}</button>
//            </form>
//          </div>
//        )}
//               {/* Net Banking Section */}
//        {selectedMethod === 'netbanking' && (
//          <div 
//            className="netbanking-form"
//            initial={{ opacity: 0, x: 10 }}
//            animate={{ opacity: 1, x: 0 }}
//            transition={{ duration: 0.5, delay: 0.4 }}
//          >
//            <h3>Select Your Bank</h3>
//            <form>
//              <div className="form-group">
//                <label htmlFor="bankSelect">Bank</label>
//                <select id="bankSelect" onChange={handleBankSelect}>
//                  <option value="">Select Bank</option>
//                  <option value="bank1">Bank 1</option>
//                  <option value="bank2">Bank 2</option>
//                  {/* Add other banks as needed */}
//                </select>
//              </div>
//              <button type="button" onClick={handleRedirectToBank} className="pay-button">Proceed to Payment</button>
//            </form>
//          </div>
//       )}
//      </div>
//   );
// };

// export default PaymentForm;


import React, { useEffect ,useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QRCodeSVG } from 'qrcode.react';
import { setPaymentMethod, setQrVisible, setQrValue, setTimeRemaining, setSelectedBank } from './redux/actions/paymentActions';
import { FaCreditCard, FaMobileAlt, FaWallet, FaQrcode, FaStar,FaTrain, FaInfoCircle, FaRegCheckCircle } from 'react-icons/fa';
import './PaymentsForm.scss';
import pay from "../assets/images/1.png";
import k1 from "../assets/images/k1.png";
import k2 from "../assets/images/k2.svg";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const { selectedMethod, qrVisible, qrValue, timeRemaining, selectedBank } = useSelector(state => state.payment);
  const trainDetails = useSelector(state => state.booking.trainDetails);
  const travelers = useSelector(state => state.booking.travelers);

  const fairAmount = useMemo(() => trainDetails?.fare || '0', [trainDetails]);

  useEffect(() => {
    if (qrVisible) {
      const timer = setInterval(() => {
        dispatch(setTimeRemaining(timeRemaining - 1));
        if (timeRemaining <= 1) {
          dispatch(setQrValue(generateQrValue()));
          dispatch(setTimeRemaining(360));
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [qrVisible, timeRemaining, dispatch]);

  const generateQrValue = () => Math.random().toString(36).substring(7);

  const handleGenerateClick = () => {
    dispatch(setQrValue(generateQrValue()));
    dispatch(setQrVisible(true));
    dispatch(setTimeRemaining(360));
  };

  const handlePaymentMethodSelect = (method) => {
    dispatch(setPaymentMethod(method));
    if (method !== 'pay-via-upi') {
      dispatch(setQrVisible(false));
    }
  };
  

  const handleBankSelect = (event) => {
    dispatch(setSelectedBank(event.target.value));
  };

  const handleRedirectToBank = () => {
    const bankUrls = {
      'bank1': 'https://netbanking.bank1.com',
      'bank2': 'https://netbanking.bank2.com',
    };
    window.location.href = bankUrls[selectedBank];
  };
  // const fairAmount = trainDetails?.fair || '0';
  return (
    <div className="payment-form">
      {/* Fare Summary */}
      {/* Display details from trainDetails */}
      <div 
        className="fare-summary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
>
        <h2>Fare Summary</h2>
        <div className="fare-details">
          <div className="fare-item">
            <span>Ticket Fare</span>
            <span>₹{fairAmount}</span>
          </div>
          <div className="fare-item">
            <span>Convenience Fee (Incl. of GST)</span>
            <span>₹17.7</span>
          </div>
          <div className="fare-item">
            <span>Agent Service Charge</span>
            <span>₹20</span>
          </div>
          <div className="fare-item">
            <span>Payment Gateway Charges (Incl. of GST)</span>
            <span>₹21.91</span>
          </div>
          <div className="fare-total">
            <span>Amount To Be Paid</span>
            <span>₹{fairAmount}</span>
          </div>
        </div>
        <div className="ticket-card">
      <div className="ticket-header">
        <div className="train-info">
          <div className="train-number">
            <FaTrain className="icon-train" /> {trainDetails.trainNumber}{trainDetails.trainName}
          </div>
          <div className="pnr-status">
            <span>GNWL95/WL48</span>
          </div>
        </div>
      </div>

      <div className="timing-info">
        <h3>{trainDetails.fromStation}  {trainDetails.departureTime} -{trainDetails.toStation}  {trainDetails.arrivalTime} </h3>
        <p>  {trainDetails.departureTime}• {trainDetails.class} • General</p>
        <p className="berth-info">
          <FaInfoCircle className="icon-info" /> Berth/coach numbers are assigned by the Indian Railways
        </p>
      </div>
      <div className="ticket-body"> 
       <h4>Travellers</h4>
      <ul className="travellers-list">
        {travelers && travelers.length >0 ? (
          travelers.map((traveler, index) => (
            <li key={index}>
              <p>Name:karn kumar</p>
              <p>Age: 24</p>
              <p>Gender:M</p>
              <p>Berth Preference:SL</p>
            </li>
          ))
        ) : (
          <li>No travelers listed.</li>
        )}
      </ul>
    </div> 

      <div className="ticket-footer">
        <p><FaRegCheckCircle className="icon-partner" /> Authorised IRCTC Partner</p>
      </div>
    </div>
      </div>
      <div className="payment-options">
        <h2>Payment Methods</h2>
        <div
          className={`payment-method ${selectedMethod === 'recommended' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodSelect('recommended')}
        >
          <FaStar className='icon'/>
          <div className='deo'>
            <span>Recommended</span>
            <p>Recently used method</p>
          </div>
        </div>
        <div
          className={`payment-method ${selectedMethod === 'pay-via-upi' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodSelect('pay-via-upi')}
        >
          <FaWallet className="icon" />
          <div className='deo'>
            <span>Pay via any UPI app</span>
            <p>Scan and pay with UPI</p>
          </div>
        </div>
        <div
          className={`payment-method ${selectedMethod === 'card' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodSelect('card')}
        >
          <FaCreditCard className="icon" />
          <div className='deo'>
            <span>Credit/Debit/ATM Card</span>
            <p>VISA, Mastercard, Amex, RuPay & more</p>
          </div>
        </div>
        <div
          className={`payment-method ${selectedMethod === 'emi' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodSelect('emi')}
        >
          <FaMobileAlt className="icon" />
          <div className='deo'>
            <span>Pay Later & Easy EMI</span>
            <p>Simpl, Bajaj EMI & more</p>
          </div>
        </div>
        <div
          className={`payment-method ${selectedMethod === 'netbanking' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodSelect('netbanking')}
        >
          <FaQrcode className="icon" />
          <div className='deo'>
            <span>Net Banking</span>
            <p>Select from list of banks</p>
          </div>
        </div>
      </div>

      {/* UPI Payment Section */}
      {selectedMethod === 'recommended' && (
        <div 
          className="upi-section"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="scan-pay">
            <h3>Scan & Pay with UPI</h3>
            <ol>
              <li>Open any UPI or banking app on your phone</li>
              <li>Scan the QR code to pay</li>
            </ol>
            <div className="img-container">
              <div className="img-scan">
                <img src={pay} alt='pay'/>
              </div>
            </div>
            <div className="generate-qr-container">
              <div className="img-upi">
                <img src={k1} alt='k2'/>
              </div>
              <div className="qr-container">
                <QRCodeSVG value={qrValue} className={`qr-code ${qrVisible ? 'visible' : ''}`} />
                {!qrVisible && (
                  <button className="generate-qr" onClick={handleGenerateClick}>
                    Generate QR
                  </button>
                )}
                {qrVisible && (
            <div className="timer">
           Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
         </div>
       )}
              </div>
            </div>
            <div className='int'>
            <p><img src={k2} alt='deo'/>Pay Only ₹{fairAmount} Via UPI </p>
             </div>
          </div>
        </div>
      )}

      {selectedMethod === 'pay-via-upi' && (
        <div 
          className="upi-section"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="scan-pay">
            <h3>Scan & Pay with UPI</h3>
            <ol>
              <li>Open any UPI or banking app on your phone</li>
              <li>Scan the QR code to pay</li>
            </ol>
            <div className="img-container">
              <div className="img-scan">
                <img src={pay} alt='pay'/>
              </div>
            </div>
            <div className="generate-qr-container">
              <div className="img-upi">
                <img src={k1} alt='k2'/>
              </div>
              <div className="qr-container">
                <QRCodeSVG value={qrValue} className={`qr-code ${qrVisible ? 'visible' : ''}`} />
                {!qrVisible && (
                  <button className="generate-qr" onClick={handleGenerateClick}>
                    Generate QR
                  </button>
                )}
                {qrVisible && (
            <div className="timer">
           Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
         </div>
       )}
              </div>
            </div>
            <div className='int'>
            <p><img src={k2} alt='deo'/>Pay Only ₹{fairAmount} Via UPI </p>
             </div>
          </div>
          <div className="manual-upi">
           <hr style={{ border: "1px solid black", width: "100%" }} />
             <h3>Enter UPI ID Manually</h3>
             <input type="text" placeholder="Enter UPI ID" />
             <button className="pay-button">Pay ₹{fairAmount}</button>
           </div>
           <div className='int'>
             <p><img src={k2} alt='deo'/>Pay Only {fairAmount} Via UPI </p>
           </div>
        </div>
      )}

       {selectedMethod === 'card' && (
         <div 
           className="card-form"
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
         >
           <h3>Enter Card Details</h3>
           <form>
             <div className="form-group">
               <input type="text" id="cardNumber" placeholder="Enter card number" />
             </div>
             <div className="form-group">
               <input type="text" id="cardName" placeholder="Enter cardholder name" />
             </div>
             <div className="form-group">
               <input type="text" id="expiryDate" placeholder="MM/YY" />
             </div>
             <div className="form-group">
               <input type="text" id="cvv" placeholder="CVV" />
             </div>
             <button className="pay-button">Pay ₹{trainDetails.fair}</button>
           </form>
         </div>
       )}
        
       {selectedMethod === 'emi' && (
         <div 
           className="emi-form"
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
         >
           <h3>Choose EMI Option</h3>
           <form>
             <div className="form-group">
               <label htmlFor="emiTenure">Tenure</label>
               <select id="emiTenure">
                 <option value="3">3 Months</option>
                 <option value="6">6 Months</option>
                 <option value="9">9 Months</option>
                 <option value="12">12 Months</option>
               </select>
             </div>
             <button className="pay-button">Pay ₹{fairAmount}</button>
           </form>
         </div>
       )}
              {/* Net Banking Section */}
       {selectedMethod === 'netbanking' && (
         <div 
           className="netbanking-form"
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
         >
           <h3>Select Your Bank</h3>
           <form>
             <div className="form-group">
               <label htmlFor="bankSelect">Bank</label>
               <select id="bankSelect" onChange={handleBankSelect}>
                 <option value="">Select Bank</option>
                 <option value="bank1">Bank 1</option>
                 <option value="bank2">Bank 2</option>
                 {/* Add other banks as needed */}
               </select>
             </div>
             <button type="button" onClick={handleRedirectToBank} className="pay-button">Proceed to Payment</button>
           </form>
         </div>
      )}
     </div>
  );
};

export default PaymentForm;

