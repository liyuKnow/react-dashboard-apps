import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../SampleData';
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

            <div className="product-top">
                <div className="product-top-left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-top-right-info-top">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-info-img" />
                        <span className="product-name">Apple Airpods</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">Sales:</span>
                            <span className="product-info-value">5123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">active:</span>
                            <span className="product-info-value">Yes</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">In Stock:</span>
                            <span className="product-info-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" className='product-form-left-input' />
                        <label>In Stock</label>
                        <select className='product-form-left-select' name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select className='product-form-left-select' name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-upload-img" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="product-button">Update</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Product;
