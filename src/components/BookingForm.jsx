import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { updateFormData } from './redux/actions';
import './BookingForm.scss';
import { MdTrain, MdAdd, MdRemoveCircle, MdArrowBack } from 'react-icons/md';

const validationSchema = yup.object({
  travelers: yup.array().of(
    yup.object({
      passengerName: yup.string().required('Passenger name is required'),
      age: yup.number().required('Age is required').min(1, 'Age must be at least 1'),
      gender: yup.string().required('Gender is required'),
      berthPreference: yup.string().required('Berth preference is required'),
    })
  ),
  contactNumber: yup.string().matches(/^[0-9]{10}$/, 'Invalid contact number'),
  email: yup.string().email('Invalid email address'),
});

const BookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { trainDetails, formData } = useSelector(state => ({
    trainDetails: state.booking.trainDetails,
    formData: state.booking.formData,
  }));

  // Redirect to home if no train details are found
  React.useEffect(() => {
    if (!trainDetails) {
      navigate('/');
    }
  }, [trainDetails, navigate]);

  // Initialize formik with formData
  const formik = useFormik({
    initialValues: {
      ...formData,
      travelers: formData.travelers || [], // Provide default empty array if not defined
      selectedClass: formData.selectedClass || { className: '', fare: 0 }, // Ensure default values
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updateFormData(values));
      navigate('/paymentForm');
    },
  });
  // Handle adding a new traveler
  const handleAddTraveler = () => {
    formik.setFieldValue('travelers', [
      ...formik.values.travelers,
      { passengerName: '', age: '', gender: '', berthPreference: 'No Preference' },
    ]);
  };

  // Handle removing a traveler
  const handleRemoveTraveler = (index) => {
    const updatedTravelers = formik.values.travelers.filter((_, i) => i !== index);
    formik.setFieldValue('travelers', updatedTravelers);
  };

  return (
    <div className="booking-form-container">
      <div className="train-details-container">
        {trainDetails && (
          <div className="train-details">
            <div className="train-header">
              <h3>
                <MdTrain />
                <strong>
                  {trainDetails.trainName} ({trainDetails.trainNo})
                </strong>
              </h3>
            </div>
            <div className="train-info">
              <div className="station-details">
                <div className="trainstation">
                  <p>
                    {trainDetails.departureTime} <span>|</span> {trainDetails.fromStation}
                  </p>
                  <p className="departure-date">{trainDetails.date}</p>
                </div>
                <div className="duration">
                  <p>-{trainDetails.duration}-</p>
                </div>
                <div className="tostation">
                  <p>
                    {trainDetails.arrivalTime} <span>|</span> {trainDetails.toStation}
                  </p>
                  <p className="arrival-date">{trainDetails.arrivalDate}</p>
                </div>
              </div>
              <div className="class-name">
                <p>Class: {formik.values.selectedClass.className}</p>
                <p>Fare: ₹{formik.values.selectedClass.fare}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={formik.handleSubmit} className="booking-form">
        <div className="personal-details">
          <h2>Passenger Details</h2>
          {formik.values.travelers.map((traveler, index) => (
            <div key={index} className="traveler-form-group">
              <div className="form-group">
                <input
                  type="text"
                  id={`passengerName-${index}`}
                  name={`travelers[${index}].passengerName`}
                  value={traveler.passengerName}
                  onChange={formik.handleChange}
                  placeholder="Passenger Name*"
                  required
                  aria-label="Passenger Name"
                />
                {formik.errors.travelers && formik.errors.travelers[index]?.passengerName && (
                  <div className="error">{formik.errors.travelers[index].passengerName}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id={`age-${index}`}
                  name={`travelers[${index}].age`}
                  value={traveler.age}
                  onChange={formik.handleChange}
                  placeholder="Age*"
                  required
                  aria-label="Age"
                />
                {formik.errors.travelers && formik.errors.travelers[index]?.age && (
                  <div className="error">{formik.errors.travelers[index].age}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  id={`gender-${index}`}
                  name={`travelers[${index}].gender`}
                  value={traveler.gender}
                  onChange={formik.handleChange}
                  aria-label="Gender"
                >
                  <option value="" disabled hidden>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formik.errors.travelers && formik.errors.travelers[index]?.gender && (
                  <div className="error">{formik.errors.travelers[index].gender}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  id={`berthPreference-${index}`}
                  name={`travelers[${index}].berthPreference`}
                  value={traveler.berthPreference}
                  onChange={formik.handleChange}
                  aria-label="Berth Preference"
                >
                  <option value="No Preference">No Preference</option>
                  <option value="Upper">Upper</option>
                  <option value="Middle">Middle</option>
                  <option value="Lower">Lower</option>
                </select>
                {formik.errors.travelers && formik.errors.travelers[index]?.berthPreference && (
                  <div className="error">{formik.errors.travelers[index].berthPreference}</div>
                )}
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="remove-traveler-button"
                  onClick={() => handleRemoveTraveler(index)}
                  aria-label="Remove Traveler"
                >
                  <MdRemoveCircle />
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddTraveler} className="add-traveler-button" aria-label="Add Traveler">
            <MdAdd /> Add New Traveler
          </button>
        </div>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="form-group">
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              placeholder="Contact Number*"
              required
              aria-label="Contact Number"
            />
            {formik.errors.contactNumber && <div className="error">{formik.errors.contactNumber}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email*"
              required
              aria-label="Email"
            />
            {formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>
        </div>
        <div className="insurance-details">
          <h2>Travel Insurance</h2>
          <p>Do you want to take Travel Insurance (₹0.45/person)?</p>
          <div className="form-group">
            <label>
              <input
                type="radio"
                name="travelInsurance"
                value="Yes"
                checked={formik.values.travelInsurance === 'Yes'}
                onChange={formik.handleChange}
                aria-label="Yes, and I accept the terms & conditions"
              />
              Yes, and I accept the terms & conditions
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="radio"
                name="travelInsurance"
                value="No"
                checked={formik.values.travelInsurance === 'No'}
                onChange={formik.handleChange}
                aria-label="No, I don't want travel insurance"
              />
              No, I don't want travel insurance
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="back-button" onClick={() => navigate(-1)} aria-label="Back">
            <MdArrowBack /> Back
          </button>
          <button type="submit" className="book-ticket-button" aria-label="Proceed to Payment">
            Book Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
