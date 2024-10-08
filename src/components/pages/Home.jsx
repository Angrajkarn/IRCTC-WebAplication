import React from 'react';
import './Home.scss';
import { FaTrain, FaStar, FaTicketAlt, FaCrown, FaMapMarkedAlt } from 'react-icons/fa';
import  Delhi from "./Delhi.jpg";
import  kashi from "./kashi.jpg";
import taj from "./Taj.jpg";
import mumbai from "./Mumbai.jpg";
import { Link } from 'react-router-dom';
import TrainSearch from '../TrainSearch';
import ExploreMore from './ExploreMore';
import FAQ from "./FAQ"

const Home = () => {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-overlay">
          <div className="home__hero-content">
            <h1 className="home__hero-title">Experience Premium Travel Comfort</h1>
            <p className="home__hero-subtitle">Seamlessly book your train tickets and embark on unforgettable journeys.</p>
            <Link to="/search" className="home__hero-button">Start Your Journey</Link>
          </div>
        </div>
      </section>
      <TrainSearch/>
      <ExploreMore/>
{/* Featured Destinations */}
      <section className="home__destinations">
        <h2 className="home__section-title">Top Destinations</h2>
        <div className="home__destinations-grid">
          <div className="home__destination-card">
            <img src={Delhi} alt="Delhi" className="home__destination-image" />
            <h3 className="home__destination-name">Delhi</h3>
            <p className="home__destination-description">Explore the rich heritage and vibrant culture of India's capital.</p>
          </div>
          <div className="home__destination-card">
            <img src={kashi} alt="Kashi" className="home__destination-image" />
            <h3 className="home__destination-name">Kashi</h3>
            <p className="home__destination-description">Visit the spiritual heart of India, where history meets devotion.</p>
          </div>
          <div className="home__destination-card">
            <img src={taj} alt="Agra" className="home__destination-image" />
            <h3 className="home__destination-name">Agra</h3>
            <p className="home__destination-description">Witness the timeless beauty of the Taj Mahal and other Mughal wonders.</p>
          </div>
          <div className="home__destination-card">
            <img src={mumbai} alt="Mumbai" className="home__destination-image" />
            <h3 className="home__destination-name">Mumbai</h3>
            <p className="home__destination-description">Experience the dynamic and bustling life of India's financial hub.</p>
          </div>
        </div>
      </section>
      


      {/* Booking Options */}
      <section className="home__booking-options">
        <h2 className="home__section-title">How to Book</h2>
        <div className="home__booking-options-grid">
          <div className="home__booking-option">
            <FaTrain className="home__booking-icon" />
            <h3 className="home__booking-title">Book Train Tickets</h3>
            <p className="home__booking-description">Choose from various train routes and enjoy Link hassle-free booking process.</p>
          </div>
          <div className="home__booking-option">
            <FaTicketAlt className="home__booking-icon" />
            <h3 className="home__booking-title">Reserve Your Seat</h3>
            <p className="home__booking-description">Ensure your comfort by reserving seats well in advance.</p>
          </div>
          <div className="home__booking-option">
            <FaStar className="home__booking-icon" />
            <h3 className="home__booking-title">Exclusive Packages</h3>
            <p className="home__booking-description">Discover exclusive travel packages tailored for you.</p>
          </div>
          <div className="home__booking-option">
            <FaMapMarkedAlt className="home__booking-icon" />
            <h3 className="home__booking-title">Explore Destinations</h3>
            <p className="home__booking-description">Plan your trip with detailed information on top destinations.</p>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="home__promo">
        <div className="home__promo-content">
          <h2 className="home__promo-title">Special Offer Just for You!</h2>
          <p className="home__promo-text">Enjoy 20% off your first booking. Use code <strong>TRAVEL20</strong> at checkout.</p>
          <Link to="/search" className="home__promo-button">Grab the Deal</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home__testimonials">
        <h2 className="home__section-title">Our Travelers' Stories</h2>
        <div className="home__testimonials-grid">
          <div className="home__testimonial">
            <p className="home__testimonial-text">"The booking experience was seamless and the journey was luxurious. Highly recommended!"</p>
            <h4 className="home__testimonial-author">Aman Verma</h4>
          </div>
          <div className="home__testimonial">
            <p className="home__testimonial-text">"From start to finish, the service was exceptional. The website is user-friendly and efficient."</p>
            <h4 className="home__testimonial-author">Priya Sharma</h4>
          </div>
          <div className="home__testimonial">
            <p className="home__testimonial-text">"I saved time and money with their special offers. Link truly satisfying experience."</p>
            <h4 className="home__testimonial-author">Ravi Singh</h4>
          </div>
          <div className="home__testimonial">
            <p className="home__testimonial-text">"I was amazed by the convenience and speed of the booking process. Great job!"</p>
            <h4 className="home__testimonial-author">Sneha Kapoor</h4>
          </div>
        </div>
      </section>
      {/* Booking Features */}
      <section className="home__booking-features">
        <h2 className="home__section-title">Book IRCTC Tickets with Ease</h2>
        <div className="home__booking-features-grid">
          <div className="home__feature-card">
            <h3 className="home__feature-title">Easy & Fast IRCTC Login</h3>
            <p className="home__feature-description">Register, login, and manage your IRCTC account effortlessly.</p>
          </div>
          <div className="home__feature-card">
            <h3 className="home__feature-title">Zero Payment Gateway Fees</h3>
            <p className="home__feature-description">Book your tickets via UPI and avoid any extra charges.</p>
          </div>
          <div className="home__feature-card">
            <h3 className="home__feature-title">Tatkal Ticket Booking</h3>
            <p className="home__feature-description">Get your Tatkal tickets swiftly on our app and website.</p>
          </div>
          <div className="home__feature-card">
            <h3 className="home__feature-title">Special Trains Booking</h3>
            <p className="home__feature-description">Reserve seats on special trains effortlessly with our platform.</p>
          </div>
        </div>
      </section>

      {/* Train Status */}
      <section className="home__train-status">
        <h2 className="home__section-title">IRCTC Train Running Stats</h2>
        <p className="home__train-running-count">Number of Live Trains Running: 5254+</p>
        <p className="home__last-updated">Last Updated: 2024-08-23</p>
      </section>
      <section className="irctc-section py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Easy & Fast IRCTC Login and Ticket Booking</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Create IRCTC Login ID */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Create Your IRCTC Login ID and Password</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Open the RailBooking trains app.</li>
              <li>Tap on the profile icon at the bottom right of the page.</li>
              <li>Tap on 'Link your IRCTC Account'.</li>
              <li>Tap on 'IRCTC username' and click 'Register'.</li>
              <li>Fill in the required details and get an OTP.</li>
              <li>Enter the OTP and verify your email ID and mobile number.</li>
              <li>Your IRCTC account will be successfully created.</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Register Now
            </button>
          </div>

          {/* Recover IRCTC Login ID */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Recover Your IRCTC Login ID</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Open the RailBooking trains app.</li>
              <li>Tap on the profile icon at the bottom right of the page.</li>
              <li>Go to 'Link your IRCTC Account'.</li>
              <li>Click on 'Forgot your IRCTC User ID'.</li>
              <li>Enter your registered email ID or mobile number and proceed.</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Recover ID
            </button>
          </div>

          {/* Register as New User on IRCTC */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Register as a New User on IRCTC</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Open the RailBooking trains app.</li>
              <li>Tap on the profile icon at the bottom right of the page.</li>
              <li>Go to 'Link your IRCTC Account'.</li>
              <li>Click on 'Register on IRCTC'.</li>
              <li>Enter your details and proceed.</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Register
            </button>
          </div>

          {/* Indian Railways Ticket Reservation */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Indian Railways Ticket Reservation</h3>
            <p className="mb-4">
              Use our train seat availability feature to find out the seat or berth availability in your train and check ticket lowest prices. Make online train ticket reservations according to your preferred options - date of travel, train halt in minutes, and train route.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Reserve Now
            </button>
          </div>

          {/* IRCTC Train Ticket Booking Online */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">IRCTC Train Ticket Booking Online</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Open the RailBooking website or download the mobile app.</li>
              <li>Select source and destination Indian Railway stations.</li>
              <li>Pick a date of departure and search trains.</li>
              <li>Choose travel class and fill in passenger details.</li>
              <li>Log in using your IRCTC user ID and password.</li>
              <li>Complete the payment and reservation process.</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>

          {/* IRCTC Next Generation Ticket Booking */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Experience IRCTC Next Generation Ticket Booking</h3>
            <p className="mb-4">
              Enjoy the newest and hassle-free way to book train tickets with IRCTC’s next-generation ticket booking process. Book your seats using the RailBooking trains app and avail great deals. Seat availability, PNR status checking, and cancellation of tickets can also be done easily.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
     {/* IRCTC Train Ticket Prices/Fare Section */}
     <section className="fare-section">
        <div className="container">
          <h2>IRCTC Train Ticket Prices/Fare as per Travel Class</h2>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>Travel Class</th>
                  <th>Minimum Distance for Charge</th>
                  <th>Basic Fare at Min Dist</th>
                  <th>Res Fee</th>
                  <th>Supp Charge for Superfast Trains</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Second Class</td>
                  <td>50 Kms</td>
                  <td>₹30</td>
                  <td>₹15</td>
                  <td>₹15</td>
                </tr>
                <tr>
                  <td>Sleeper Class</td>
                  <td>200 Kms</td>
                  <td>₹124</td>
                  <td>₹20</td>
                  <td>₹30</td>
                </tr>
                <tr>
                  <td>AC Chair Car</td>
                  <td>150 Kms</td>
                  <td>₹211</td>
                  <td>₹40</td>
                  <td>₹45</td>
                </tr>
                <tr>
                  <td>AC 3 Tier</td>
                  <td>300 Kms</td>
                  <td>₹470</td>
                  <td>₹40</td>
                  <td>₹45</td>
                </tr>
                <tr>
                  <td>First Class</td>
                  <td>100 Kms</td>
                  <td>₹232</td>
                  <td>₹50</td>
                  <td>₹45</td>
                </tr>
                <tr>
                  <td>Executive Class</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>₹60</td>
                  <td>₹75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IRCTC Booking Information Section */}
      <section className="booking-info-section">
        <div className="container">
          <h2>IRCTC Authorised Partner - Train Ticket Booking Timings</h2>
          <div className="booking-info-table-container">
            <table className="booking-info-table">
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IRCTC Train Ticket Booking Timings</td>
                  <td>00:20 AM to 11:45 PM</td>
                </tr>
                <tr>
                  <td>IRCTC website's shut down timings for maintenance</td>
                  <td>11:45 PM to 12:20 AM</td>
                </tr>
                <tr>
                  <td>Tickets for how many passengers per PNR can be booked for IRCTC Tatkal e-tickets (including children)?</td>
                  <td>4 Passengers (max.)</td>
                </tr>
                <tr>
                  <td>Senior Citizen Quota in IRCTC</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Senior citizen concession in IRCTC Tatkal Quota</td>
                  <td>Not Allowed</td>
                </tr>
                <tr>
                  <td>IRCTC Tatkal Booking Timings For AC berth</td>
                  <td>10:00 to 10:10 AM</td>
                </tr>
                <tr>
                  <td>IRCTC Tatkal Booking Timings For Non AC berth</td>
                  <td>11:00 to 11:10 AM</td>
                </tr>
                <tr>
                  <td>Maximum ticket booking allowed per user in a month for Indian Railways Reservation</td>
                  <td>24 for users with Aadhaar number linked and 12 for others.</td>
                </tr>
                <tr>
                  <td>Maximum tickets that can be booked from one user ID in a day</td>
                  <td>Maximum two tickets can be booked from 1 user ID in a day.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="home__explore">
        <h2 className="home__section-title">Explore More</h2>
        <div className="home__explore-grid">
          <div className="home__explore-item">
            <FaCrown className="home__explore-icon" />
            <h3 className="home__explore-title">Luxury Trains</h3>
            <p className="home__explore-description">Discover the luxury train journeys that redefine travel comfort.</p>
            <Link to="/luxury" className="home__explore-link">Learn More</Link>
          </div>
          <div className="home__explore-item">
            <FaMapMarkedAlt className="home__explore-icon" />
            <h3 className="home__explore-title">Scenic Routes</h3>
            <p className="home__explore-description">Take Link journey through the most picturesque landscapes.</p>
            <Link to="/scenic" className="home__explore-link">Discover Now</Link>
          </div>
        </div>
      </section>
      <FAQ/>
    </main>
  );
};

export default Home;
