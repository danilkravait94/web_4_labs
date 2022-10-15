import './App.css';
import Home from './components/Home';
import Authorization from './components/Authorization';
import Profile from './components/Profile';
import Products from './components/Products'
import Singup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {
  const [username, setData] = useState(['-']);
  useEffect(() => {
    const getLogin = async () => {
      fetch('http://localhost:3001', {
        withCredentials: true,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }

      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.user.name);
        });

    };
    getLogin();
  });
  return (<Router>
    <div className='content'>
      {username ? (
        <div className="header">
          <Link className="links" to="/profile" >User <u>{username}</u></Link>
          <Link className="links" to="/" >Home</Link>
          <Link className="links" to="/products" >Products</Link>
          <button className="log-out" onClick={() => {
            fetch('http://localhost:3001/logout',{
              withCredentials: true,
              credentials: 'include',});
            window.location.pathname = '/'
          }}>Log Out</button>
        </div>
      ) : (
        ''
      )}
      <Routes>
        {username ? (

          <Route index path="/" element={<Home />} />

        ) : (
          <Route path="/" element={<Authorization />} />
        )}
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Singup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  </Router>
  );

}

export default App;
