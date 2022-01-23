import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className="product-title-container">
                <h1 className="product-title">Product</h1>
                <Link to="/newProduct" className='link'>
                    <button className="add-product-btn">Add Product</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;
