// App.jsx
import {React,useState}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import ErrorBoundary from './components/common/ErrorBoundary';
import Booking from './components/pages/Booking';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import TrainSearch from './components/TrainSearch'; // Default import
import ResultsPage from './components/ResultsPage';
import BookingResult from './components/pages/BookingResult';
import BookingForm from './components/BookingForm';
import PaymentForm from './components/PaymentForm';
import ForgotPass from './components/pages/Forgetpass';

const train = [
  {
      trainNo: '12345',
      trainName: 'LKU HWH SPL',
      departureTime: '10:10',
      arrivalTime: '21:30',
      duration: '11:20',
      fromStation: 'MUZAFFARPUR JN',
      toStation: 'HOWRAH JN',
      date: 'Mon, 16 Sep',
      runningDays: ['Sun', 'Tue', 'Thu'],
      arrivalDate:"Tues, 17 Sep",
      classes: [
          { classCode: 'SL', className: 'Sleeper (SL)', seatsAvailable:"0035",fair:"330"},
          { classCode: '3E', className: 'AC 3 Economy (3E)',seatsAvailable:"0030",fair:"900" },
          { classCode: '2A', className: 'AC 2 Tier (2A)',seatsAvailable:"0058",fair:"1599" },
          { classCode: '1A', className: 'AC First Class (1A)',seatsAvailable:"0094",fair:"3999" },
          { classCode: '3A', className: 'AC 3 Tier (3A)',seatsAvailable:"0100",fair:"2000" },
          
      ]
  },
  {
    trainNo: '12345',
    trainName: 'BGP LTT EXPRESS',
    departureTime: '08:00',
    arrivalTime: '18:30',
    duration: '10:30',
    fromStation: 'MUZAFFARPUR JN',
    toStation: 'HOWRAH JN',
    date: 'Fri, 24 Aug',
    runningDays: ['Mon', 'Tue', 'Thu', 'Sat'],
    arrivalDate:"Sat, 24 Aug",
    classes: [
        { classCode: 'SL', className: 'Sleeper (SL)', seatsAvailable:"0020", fair:"320" },
        { classCode: '3A', className: 'AC 3 Tier (3A)', seatsAvailable:"0080", fair:"1950" },
        { classCode: '2A', className: 'AC 2 Tier (2A)', seatsAvailable:"0065", fair:"1550" },
        { classCode: '1A', className: 'AC First Class (1A)', seatsAvailable:"0090", fair:"3900" },
    ]
},
{
    trainNo: '12141',
    trainName: 'LTT PATLIPUTRA EXP',
    departureTime: '15:15',
    arrivalTime: '02:45',
    duration: '11:30',
    fromStation: 'MUZAFFARPUR JN',
    toStation: 'HOWRAH JN',
    date: 'Fri, 23 Aug',
    runningDays: ['Mon', 'Wed', 'Fri'],
    arrivalDate:"Sat, 24 Aug",
    classes: [
        { classCode: 'SL', className: 'Sleeper (SL)', seatsAvailable:"0040", fair:"350" },
        { classCode: '2A', className: 'AC 2 Tier (2A)', seatsAvailable:"0075", fair:"1650" },
        { classCode: '3A', className: 'AC 3 Tier (3A)', seatsAvailable:"0060", fair:"2050" },
        { classCode: '1A', className: 'AC First Class (1A)', seatsAvailable:"0085", fair:"3999" },
    ]
},
{
    trainNo: '15610',
    trainName: 'AVADH ASSAM EXP',
    departureTime: '20:00',
    arrivalTime: '06:00',
    duration: '10:00',
    fromStation: 'MUZAFFARPUR JN',
    toStation: 'HOWRAH JN',
    date: 'Fri, 23 Aug',
    arrivalDate:"Sat, 24 Aug",
    runningDays: ['Tue', 'Thu', 'Sat'],
    classes: [
        { classCode: 'SL', className: 'Sleeper (SL)', seatsAvailable:"0032", fair:"340" },
        { classCode: '2A', className: 'AC 2 Tier (2A)', seatsAvailable:"0060", fair:"1600" },
        { classCode: '3E', className: 'AC 3 Economy (3E)', seatsAvailable:"0045", fair:"950" },
        { classCode: '3A', className: 'AC 3 Tier (3A)', seatsAvailable:"0070", fair:"2100" },
    ]
},
{
    trainNo: '13022',
    trainName: 'MITHILA EXPRESS',
    departureTime: '22:00',
    arrivalTime: '08:00',
    duration: '10:00',
    fromStation: 'MUZAFFARPUR JN',
    toStation: 'HOWRAH JN',
    date: 'Fri, 23 Aug',
    arrivalDate:"Sat, 24 Aug",
    runningDays: ['Mon', 'Wed', 'Fri'],
    classes: [
        { classCode: 'SL', className: 'Sleeper (SL)', seatsAvailable:"0038", fair:"360" },
        { classCode: '2A', className: 'AC 2 Tier (2A)', seatsAvailable:"0070", fair:"1700" },
        { classCode: '3A', className: 'AC 3 Tier (3A)', seatsAvailable:"0050", fair:"2200" },
        { classCode: '1A', className: 'AC First Class (1A)', seatsAvailable:"0099", fair:"4099" },
    ]
},
  // Add more trains here
];


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <ErrorBoundary>
      <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Booking' element={<Booking  train={train}/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/TrainSearch' element={<TrainSearch />} />
          <Route path='/ResultPage' element={<ResultsPage/>}/>
          <Route path='/BookingPath' element={<BookingResult train={train}/>}/>
          <Route path='/BookingForm' element={<BookingForm/>}/>
          <Route path='/paymentForm' element={<PaymentForm/>}/>
          <Route path='/Forget' element={<ForgotPass/>}/>
        </Routes>
        {isSidebarOpen && <Profile toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
