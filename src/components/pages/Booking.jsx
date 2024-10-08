import React, { useState } from 'react';
import { FaTrain, FaCalendarAlt } from 'react-icons/fa';
import { DatePicker, message } from 'antd';
import './Booking.scss';
import InputField from '../common/InputField';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Booking = ({ train }) => {
  const [departureDate, setDepartureDate] = useState(null);
  const [fromStationCode, setFromStationCode] = useState('');
  const [toStationCode, setToStationCode] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const searchTrains = () => {
    if (!fromStationCode || !toStationCode || !trainNo || !departureDate) {
      message.error('Please fill in all the fields');
      return;
    }
  
    const formattedDate = moment(departureDate).format('ddd, DD MMM');
  
    setLoading(true);
  
    const filteredTrains = train.filter((train) => {
      const matchesTrainNo = train.trainNo.includes(trainNo);
      const matchesFromStation = train.fromStation.toLowerCase().includes(fromStationCode.toLowerCase());
      const matchesToStation = train.toStation.toLowerCase().includes(toStationCode.toLowerCase());
      const matchesDate = train.date === formattedDate;

      return matchesTrainNo && matchesFromStation && matchesToStation && matchesDate;
    });
  
    setLoading(false);
  
    if (filteredTrains.length > 0) {
      navigate('/BookingPath', { state: { results: filteredTrains } });
    } else {
      message.error('No train found for the given criteria.');
    }
  };

  return (
    <div className="booking">
      <h1 className="booking__title">Book Your Train Tickets</h1>

      <form className="booking__form">
        <InputField
          label="From Station Code"
          icon={FaTrain}
          value={fromStationCode}
          onChange={(e) => setFromStationCode(e.target.value)}
          name="fromStationCode"
        />

        <InputField
          label="To Station Code"
          icon={FaTrain}
          value={toStationCode}
          onChange={(e) => setToStationCode(e.target.value)}
          name="toStationCode"
        />

        <div className="booking__datepicker-container">
          <label htmlFor="departureDate" className="booking__label">
            <FaCalendarAlt className="booking__icon" />
            Departure Date
          </label>
          <DatePicker
            id="departureDate"
            className="booking__datepicker"
            placeholder="Select Date"
            format="DD-MM-YYYY"
            value={departureDate}
            onChange={(date) => setDepartureDate(date)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px' }}
            popupClassName="booking__datepicker-dropdown"
          />
        </div>

        <InputField
          label="Train Number"
          icon={FaTrain}
          value={trainNo}
          onChange={(e) => setTrainNo(e.target.value)}
          name="trainNo"
        />

        <button
          className="booking__button"
          type="button"
          onClick={searchTrains}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search train'}
        </button>
      </form>
    </div>
  );
};

export default Booking;
