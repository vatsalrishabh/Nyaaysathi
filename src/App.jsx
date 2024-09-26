import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContractForm from './Components/ContractForm';
import FirstPage from './Components/FirstPage'; // Your payment component
import ThankYou from './Components/Thankyou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContractForm />} />
        <Route path="/payment" element={<FirstPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
