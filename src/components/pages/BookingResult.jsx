
// import React, { useState } from 'react';
// import './BookingResult.scss';
// import { FaSyncAlt, FaClock, FaRupeeSign, FaTrain } from 'react-icons/fa';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'; // Removed useSelector as it's not used
// import { setTrainResults, setBookingDetails } from '../redux/actions';

// // TrainItem Component
// const TrainItem = ({ train, onSelectClass, isClassSelected }) => {
//     const [selectedSeats, setSelectedSeats] = useState(new Set());

//     const handleSeatSelection = (classCode) => {
//         setSelectedSeats((prev) => {
//             const newSelection = new Set(prev);
//             if (newSelection.has(classCode)) {
//                 newSelection.delete(classCode);
//             } else {
//                 newSelection.add(classCode);
//             }
//             return newSelection;
//         });
//     };

//     const isSeatSelected = (classCode) => selectedSeats.has(classCode);

//     const anySeatSelected = selectedSeats.size > 0;

//     const handleBookNowClick = () => {
//         if (!anySeatSelected) {
//             alert('Please select a seat before proceeding to book.');
//         } else {
//             onSelectClass(train, Array.from(selectedSeats));
//         }
//     };

//     return (
//         <div className="train-item" key={train.trainNo}>
//             <div className="train-header">
//                 <div className="train-name">
//                     <FaTrain /> {train.trainName} <span>({train.trainNo})</span>
//                 </div>
//                 <div className="train-days">
//                     Runs On: {train.runningDays && Array.isArray(train.runningDays) ? train.runningDays.join(', ') : 'N/A'}
//                 </div>
//             </div>
//             <div className="train-details">
//                 <div className="train-timing">
//                     <div className="from-to-time">
//                         <div className='departure-arrival-time'>
//                             <span><FaClock /> {train.departureTime} |</span>
//                             <div className="from-station">
//                                 {train.fromStation}
//                                 <span> | {train.date} </span>
//                             </div>
//                         </div>
//                         <div className="departure-arrival-time">
//                             <span><FaClock /> {train.arrivalTime} |</span>
//                             <div className="to-station">
//                                 {train.toStation}
//                                 <span> | {train.arrivalDate}</span>
//                             </div>
//                         </div>
//                         <div className="train-duration">
//                             - {train.duration} -
//                         </div>
//                     </div>
//                 </div>
//                 <div className="train-classes">
//                     {train.classes.map((trainClass) => (
//                         <div
//                             className={`train-class ${isSeatSelected(trainClass.classCode) ? 'selected' : ''}`}
//                             key={trainClass.classCode}
//                             onClick={() => handleSeatSelection(trainClass.classCode)}
//                         >
//                             <span>{trainClass.className}</span>
//                             <span className="seats-available">CURR_AVBL-{trainClass.seatsAvailable}</span>
//                             <span className="fare"><FaRupeeSign /> {trainClass.fair}</span>
//                             <FaSyncAlt />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="book-now">
//                 <button
//                     className={anySeatSelected ? 'enabled' : 'disabled'}
//                     onClick={handleBookNowClick}
//                     disabled={!anySeatSelected}
//                 >
//                     Book Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// // BookingResult Component
// const BookingResult = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const results = location.state?.results || [];
//     const [selectedClass, setSelectedClass] = useState(null);
//     const [searchCriteria, setSearchCriteria] = useState({
//         from: '',
//         to: '',
//         date: ''
//     });

//     const handleSearch = () => {
//         dispatch(setTrainResults(results)); // Save results to Redux
//         navigate('/BookingResult', { state: { results, ...searchCriteria } });
//     };

//     const handleSelectClass = (train, selectedSeats) => {
//         const selectedClass = train.classes.find(cls => selectedSeats.includes(cls.classCode));
        
//         if (selectedClass) {
//             dispatch(setBookingDetails({ selectedClass, trainDetails: train }));
//             navigate('/BookingForm');
//         }
//     };

//     const isClassSelected = (classCode) => selectedClass && selectedClass.classCode === classCode;

//     console.log('Train Results:', results);

//     return (
//         <div className="train-search-container">
//             <div className="search-header">
//                 <div className="station-inputs">
//                     <input
//                         type="text"
//                         placeholder="FROM*"
//                         value={searchCriteria.from}
//                         onChange={(e) => setSearchCriteria({ ...searchCriteria, from: e.target.value })}
//                         className="station-input"
//                     />
//                     <span className="arrow">➔</span>
//                     <input
//                         type="text"
//                         placeholder="TO*"
//                         value={searchCriteria.to}
//                         onChange={(e) => setSearchCriteria({ ...searchCriteria, to: e.target.value })}
//                         className="station-input"
//                     />
//                 </div>
//                 <div className="date-picker">
//                     <input
//                         type="date"
//                         value={searchCriteria.date}
//                         onChange={(e) => setSearchCriteria({ ...searchCriteria, date: e.target.value })}
//                     />
//                 </div>
//                 <div className="class-selection">
//                     <select>
//                         <option value="all-classes">All Classes</option>
//                         <option value="1A">AC First Class</option>
//                         <option value="2A">AC 2 Tier</option>
//                         <option value="3A">AC 3 Tier</option>
//                         <option value="3E">AC 3 Economy</option>
//                         <option value="SL">Sleeper</option>
//                     </select>
//                 </div>
//                 <div className="modify-search">
//                     <button onClick={handleSearch}>Modify Search</button>
//                 </div>
//                 <div className="flexible-date">
//                     <label>
//                         <input type="checkbox" />
//                         Flexible With Dates
//                     </label>
//                     <label>
//                         <input type="checkbox" />
//                         Train With Available Date
//                     </label>
//                     <label>
//                         <input type="checkbox" />
//                         Person with Disability concession
//                     </label>
//                     <label>
//                         <input type="checkbox" />
//                         Railway Pass Concession
//                     </label>
//                 </div>
//             </div>
//             <div className="results-header">
//                 <h2>
//                     {results.length} Results for {results[0]?.fromStation || 'N/A'} to {results[0]?.toStation || 'N/A'} | {results[0]?.date || 'N/A'}
//                 </h2>
//             </div>
//             <div className="button-container">
//                 <div className="left-buttons">
//                     <button className="sort-duration">Sort by | Duration</button>
//                     <button className="show-available-trains">Show Available Trains</button>
//                 </div>
//                 <div className="right-buttons">
//                     <button className="previous-day">
//                         <span className="icon">&lt;</span> Previous Day
//                     </button>
//                     <button className="last-day">
//                         Last Day <span className="icon">&gt;</span>
//                     </button>
//                 </div>
//             </div>
//             <div className="train-list">
//                 {results.map((train) => (
//                     <TrainItem key={train.trainNo} train={train} onSelectClass={handleSelectClass} isClassSelected={isClassSelected} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookingResult;
import React, { useState, useEffect } from 'react';
import './BookingResult.scss';
import { FaSyncAlt, FaClock, FaRupeeSign, FaTrain, FaSpinner } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrainResults, setBookingDetails } from '../redux/actions';

// TrainItem Component
const TrainItem = ({ train, onSelectClass, isClassSelected }) => {
    const [selectedSeats, setSelectedSeats] = useState(new Set());

    const handleSeatSelection = (classCode) => {
        setSelectedSeats((prev) => {
            const newSelection = new Set(prev);
            if (newSelection.has(classCode)) {
                newSelection.delete(classCode);
            } else {
                newSelection.add(classCode);
            }
            return newSelection;
        });
    };

    const isSeatSelected = (classCode) => selectedSeats.has(classCode);

    const anySeatSelected = selectedSeats.size > 0;

    const handleBookNowClick = () => {
        if (!anySeatSelected) {
            alert('Please select a seat before proceeding to book.');
        } else {
            onSelectClass(train, Array.from(selectedSeats));
        }
    };

    return (
        <div className="train-item">
            <div className="train-header">
                <div className="train-name">
                    <FaTrain /> {train.trainName} <span>({train.trainNo})</span>
                </div>
                <div className="train-days">
                    Runs On: {train.runningDays && Array.isArray(train.runningDays) ? train.runningDays.join(', ') : 'N/A'}
                </div>
            </div>
            <div className="train-details">
                <div className="train-timing">
                    <div className="from-to-time">
                        <div className='departure-arrival-time'>
                            <span><FaClock /> {train.departureTime} |</span>
                            <div className="from-station">
                                {train.fromStation}
                                <span> | {train.date} </span>
                            </div>
                        </div>
                        <div className="departure-arrival-time">
                            <span><FaClock /> {train.arrivalTime} |</span>
                            <div className="to-station">
                                {train.toStation}
                                <span> | {train.arrivalDate}</span>
                            </div>
                        </div>
                        <div className="train-duration">
                            - {train.duration} -
                        </div>
                    </div>
                </div>
                <div className="train-classes">
                    {train.classes.map((trainClass) => (
                        <div
                            className={`train-class ${isSeatSelected(trainClass.classCode) ? 'selected' : ''}`}
                            key={trainClass.classCode}
                            onClick={() => handleSeatSelection(trainClass.classCode)}
                        >
                            <span>{trainClass.className}</span>
                            <span className="seats-available">CURR_AVBL-{trainClass.seatsAvailable}</span>
                            <span className="fare"><FaRupeeSign /> {trainClass.fair}</span>
                            <FaSyncAlt />
                        </div>
                    ))}
                </div>
            </div>
            <div className="book-now">
                <button
                    className={anySeatSelected ? 'enabled' : 'disabled'}
                    onClick={handleBookNowClick}
                    disabled={!anySeatSelected}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

// BookingResult Component
const BookingResult = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const results = location.state?.results || [];
    const [selectedClass, setSelectedClass] = useState(null);
    const [searchCriteria, setSearchCriteria] = useState({
        from: '',
        to: '',
        date: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            // Simulate loading time
            setTimeout(() => {
                setLoading(false);
                dispatch(setTrainResults(results)); // Save results to Redux
            }, 2000);
        };
        fetchData();
    }, [dispatch, results]);

    const handleSearch = () => {
        dispatch(setTrainResults(results)); // Save results to Redux
        navigate('/BookingResult', { state: { results, ...searchCriteria } });
    };

    const handleSelectClass = (train, selectedSeats) => {
        const selectedClass = train.classes.find(cls => selectedSeats.includes(cls.classCode));
        
        if (selectedClass) {
            dispatch(setBookingDetails({ selectedClass, trainDetails: train }));
            navigate('/BookingForm');
        }
    };

    const isClassSelected = (classCode) => selectedClass && selectedClass.classCode === classCode;

    return (
        <div className="train-search-container">
            {loading ? (
                <div className="loading">
                    <FaSpinner className="spinner" />
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <div className="search-header">
                        <div className="station-inputs">
                            <input
                                type="text"
                                placeholder="FROM*"
                                value={searchCriteria.from}
                                onChange={(e) => setSearchCriteria({ ...searchCriteria, from: e.target.value })}
                                className="station-input"
                            />
                            <span className="arrow">➔</span>
                            <input
                                type="text"
                                placeholder="TO*"
                                value={searchCriteria.to}
                                onChange={(e) => setSearchCriteria({ ...searchCriteria, to: e.target.value })}
                                className="station-input"
                            />
                        </div>
                        <div className="date-picker">
                            <input
                                type="date"
                                value={searchCriteria.date}
                                onChange={(e) => setSearchCriteria({ ...searchCriteria, date: e.target.value })}
                            />
                        </div>
                        <div className="class-selection">
                            <select>
                                <option value="all-classes">All Classes</option>
                                <option value="1A">AC First Class</option>
                                <option value="2A">AC 2 Tier</option>
                                <option value="3A">AC 3 Tier</option>
                                <option value="3E">AC 3 Economy</option>
                                <option value="SL">Sleeper</option>
                            </select>
                        </div>
                        <div className="modify-search">
                            <button onClick={handleSearch}>Modify Search</button>
                        </div>
                        <div className="flexible-date">
                            <label>
                                <input type="checkbox" />
                                Flexible With Dates
                            </label>
                            <label>
                                <input type="checkbox" />
                                Train With Available Date
                            </label>
                            <label>
                                <input type="checkbox" />
                                Person with Disability concession
                            </label>
                            <label>
                                <input type="checkbox" />
                                Railway Pass Concession
                            </label>
                        </div>
                    </div>
                    <div className="results-header">
                        <h2>
                            {results.length} Results for {results[0]?.fromStation || 'N/A'} to {results[0]?.toStation || 'N/A'} | {results[0]?.date || 'N/A'}
                        </h2>
                    </div>
                    <div className="button-container">
                        <div className="left-buttons">
                            <button className="sort-duration">Sort by | Duration</button>
                            <button className="show-available-trains">Show Available Trains</button>
                        </div>
                        <div className="right-buttons">
                            <button className="previous-day">
                                <span className="icon">&lt;</span> Previous Day
                            </button>
                            <button className="last-day">
                                Last Day <span className="icon">&gt;</span>
                            </button>
                        </div>
                    </div>
                    <div className="train-list">
                        {results.map((train) => (
                            <TrainItem key={train.trainNo} train={train} onSelectClass={handleSelectClass} isClassSelected={isClassSelected} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BookingResult;
