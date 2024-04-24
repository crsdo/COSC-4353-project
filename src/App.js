import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Comp/Login';
import Signup from './Comp/Signup';
import FuelQuote from './Comp/FuelQuote';
import FuelHistory from './Comp/FuelHistory';
import ViewProfile from './Comp/ViewProfile';
import AboutUs from './Comp/AboutUs';
import ContactUs from './Comp/ContactUs';
import ForgetPass from './Comp/ForgetPass';
import EditProfile from './Comp/EditProfile';
import Password from './Comp/Password';





function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/fuel_quote_form' element={<FuelQuote />} />
        <Route path='/fuel_history' element={<FuelHistory />} />
        <Route path='/view_profile' element={<ViewProfile />} />
        <Route path='/edit_profile' element={<EditProfile />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/forget_pass' element={<ForgetPass />} />
        <Route path='/edit_password' element={<Password />} />
        <Route path='/forget_pass' element={<ForgetPass />} />

      </Routes>
  );
}

export default App;
