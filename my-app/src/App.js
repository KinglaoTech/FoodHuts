import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import OfferPage from './components/OfferPage';
import ServicesPage from './components/ServicesPage';
import OrderPage from './components/OrderPage';
import DownloadPage from './components/DownloadPage';
import Footer from './components/Footer';


function App() {
  return (
   <div className='page1'>
      <Navbar />
      <WelcomePage />
      <OfferPage />
      <ServicesPage />
      <OrderPage />
      <DownloadPage /> 
      <Footer />
   </div>
 
  );
}

export default App;