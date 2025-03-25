import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './component/Header';
// import Services from './component/Services'
// import Contact1 from './component/Contact1'
// import Footer from './component/Footer';
// import Team from './component/Team';
import About from './components/About';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Collection";
import Login from "./components/Login";
import Delete from './components/Delete';
// import Rform from './component/Rform';
// import Registration from './component/Registration';
// import Table1 from './component/Table1';
// import Loginpage from './component/Loginpage';
// import LoginFinal from './component/LoginFinal';
import Newregister from "./components/Newregister";
import Display from "./components/Display";
import Contactus from "./components/Contactus";
const App = () => {
  return (
    <>
      {/* <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Rform" element={<Rform/>}/>
    </Routes>
    <Footer/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Newregister" element={<Newregister />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </>
  );
};
export default App;
