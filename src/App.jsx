import React from 'react';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserList } from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct'

const App = () => {
    return (

        <Router >
            <TopBar />
            <div className="container">
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="users/*" element={<UserList />} />
                    <Route path="user/:userId" element={<User />} />
                    <Route path="/addNewUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/NewProduct" element={<NewProduct />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
