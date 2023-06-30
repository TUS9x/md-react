import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu1 from "./menu/menuLogin"
import Menu2 from "./menu/menuLogout";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Logout from './logout';
import Product from "./product"
import Abc from '../component4/abc';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
    const Menu = localStorage.getItem('user') ? Menu2 : Menu1 //toan tu 3 ngoi
    const Log = localStorage.getItem('user') ? Logout : Login
    return (
        <div className="container">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                   <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/sanpham" element={<Product />} />    
                    <Route path="/abc" element={<Abc />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;