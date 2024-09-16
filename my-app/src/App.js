import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, IndexRoute, BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login.js';
import CreateAccount from './Components/CreateAccount.js';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
