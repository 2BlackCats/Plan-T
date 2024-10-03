import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, IndexRoute, BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login.js';
import User from './Components/User.js';
import Selection from './Components/UserPage/Selection.js';
import Settings from './Components/UserPage/Settings.js';
import CreateAccount from './Components/CreateAccount.js';
import PlantPage from './Components/UserPage/PlantPage.js';
import { UserContext } from './Components/UserContext.js';

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="user/:username" element={<User />} >
              <Route index element={<Selection />} />
              <Route path="settings" element={<Settings />} />
              <Route path="plant/:plantID" element={<PlantPage />} />
          </Route>
          <Route path="*" element={<h1 className='custome-container'>Page Not Found</h1>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
