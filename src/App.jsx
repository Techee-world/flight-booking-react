import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/navbar/Nav';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import DetailsPage from './page/DetailsPage';
import Booking from './component/bookingPage/Booking';
import Login from './component/login/Login';
import './App.css';

function App() {
  const [fromData, setFromData] = useState();
  const [whereData, setWhereData] = useState();
  const [whenData, setWhenData] = useState();
  const [email, setEmail] = useState();
  const [inputData , setInputData] = useState(false)

  function inputDataClickHandle(from, where,when) {
    setFromData(from)
    setWhereData(where)
    setWhenData(when)
    setInputData(true)
    if(from  ){
        return setInputData(true)
    }else{
        return setInputData(false) 
    }}
    function loginData(email){
      setEmail(email)
    }

  return (
    <>
      <Router>
        <Nav email={email} />
        <Routes>
          <Route exact path="/" element={<Home inputData={inputData} inputDataClickHandle={inputDataClickHandle} email={email} />}/>
          <Route  path="/searchDetails"element={<DetailsPage fromData={fromData} whereData={whereData} />}/>
          <Route  path="/booking"element={<Booking fromData={fromData} whereData={whereData} whenData={whenData} />}/>
          <Route  path='/login' element={<Login loginData={loginData} />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
