import React, { useEffect, useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Buy from './Buy';
import ContactPage from './ContactPage'; 
import Wallet from './Wallet.js';
import Dashboard from './Dashboard.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import index from './index.js';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import axios, { Axios } from 'axios';

// import './Styles.css';
// import ContactForm from './ContactForm';

// import SellCarPage from './SellCarPage';


// function ContactForm() {
//   return (
//     <div className="Form">
//       <ContactForm />
//     </div>
//   );
// }
const App = () => {

// connecting front end and back end using axios 
const [data,setData]=useState();

const getData=async()=>{
  const response=await Axios.get("http://localhost:3000/getData");
  setData(response.data);
}
useEffect(()=>{
  getData()

},[]);

  const [jwt, setJwt] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    numberOfPurchases: 0,
    totalAmountNeeded: 0,
  });

  // 

  const handleLogin = () => {
    // Perform login logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  const PrivateRoute = ({ path, element }) => {
    return isAuthenticated ? element : <Navigate to="/buy" />;
  };

  console.log('Dashboard Data:', window.dashboardData);
  // Access the embedded data from the HTML view
const { numberOfPurchases, totalAmountNeeded } = window.dashboardData ?? {};
  // const Home = ({ carData }) => {
  //   return (
  //     <section id="home">
  //       <h1>Gates Car Marketplace</h1>
  //       {/* Display car information on the home page */}
  //       {carData.map((group) => (
  //         <div key={group.class}>
  //           <h2>{group.class}</h2>
  //           {group.cars.map((car) => (
  //             <div key={car.id}>
  //               <h3>{car.make} {car.model}</h3>
  //               <p>Year: {car.year}</p>
  //               <p>Engine Modification: {car.engineModification}</p>
  //               {/* Add more car information as needed */}
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </section>
  //   );
  // };

  
  const About = () => {
    return (
      <section id="about" style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flexBasis: "100%" }}>
          <h1>G store</h1>
        </div>
  
        <div style={{ flexBasis: "50%", padding: "1rem" }}>
          <h2>Our Story</h2>
          <p>At G store, our journey began with a simple idea: to make online shopping and payments more convenient and secure.</p>
        </div>
  
        <div style={{ flexBasis: "50%", padding: "1rem" }}>
          <h2>Our Mission and Values</h2>
          <p>Our mission is clear: to offer you a wide range of gift cards and PayPal solutions that meet your needs and exceed your expectations. We're driven by a commitment to honesty, security, and exceptional customer service. Your satisfaction is our top priority.</p>
        </div>
  
       <div style={{ flexBasis: "50%", padding: "1rem" }}>
       <h2>What We Offer</h2>
         <p>At g store you'll find a comprehensive selection of gift cards for popular retailers, as well as a variety of PayPal account options tailored to your specific requirements. We take pride in offering discounted rates, secure transactions, and reliable customer support to ensure your peace of mind.</p>
       </div>
       <div style={{ flexBasis: "50%", padding: "1rem"}}>
       <h2>Contact Us</h2>
          <p>Head on to the contact page for any queries and questions on how we may be of your service</p>
        </div>
    
      

      </section>
    );
  };
  

  // const Dashboard = () => {
  //   return (
  //     <section id="contact">
  //       <h1>Dashboard</h1>
  //       {/* Dashboard content */}
  //     </section>
  //   );
  // };

  // // Fetch dashboard data when the component mounts
  // useEffect(() => {
  //   // Assuming you have an API endpoint that provides dashboard data
  //   axios.get('/api/dashboard.json')
  //     .then(response => {
  //       setDashboardData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching dashboard data:', error);
  //     });
  // }, []); // Empty dependency array to run the effect only once


  return (
    <BrowserRouter>
      <div>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />""
        <Routes>
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/Dashboard" element={
          <ErrorBoundary fallback={<p>Something went wrong with the Dashboard</p>}>
          <Dashboard
          numberOfPurchases={dashboardData.numberOfPurchases}
          totalAmountNeeded={dashboardData.totalAmountNeeded}/>
          </ErrorBoundary>}/>
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} isAuthenticated={isAuthenticated} />}
          />
          {/* {isAuthenticated ? (
            <Route path="/dashboard/*" element={<AuthenticatedRoutes />} />
          ) : (
            <Navigate to="/login" />
          )} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


