import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
    return (
        <div className='user'>
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <Link to="/addNewUser" className='link'>
                    <button className="add-user-btn">Add User</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="https://i.pravatar.cc/150?img=5" alt="" className="user-show-avatar" />
                        <div className="user-show-info">
                            <span className="user-show-username">Alice Blue</span>
                            <span className="user-show-job">Software Developer</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="user-show-bottom-title">Account Details</span>
                        <div className="user-show-bottom-info">
                            <PermIdentity className="user-show-bottom-icon" />
                            <span className="user-show-bottom-text">aliceblue69</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <CalendarToday className="user-show-bottom-icon" />
                            <span className="user-show-bottom-text">10.12.1999</span>
                        </div>
                        <span className="user-show-bottom-title">Contact Details</span>
                        <div className="user-show-bottom-info">
                            <PhoneAndroid className="user-show-bottom-icon" />
                            <span className="user-show-bottom-text">+1 123 456 67</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <MailOutline className="user-show-bottom-icon" />
                            <span className="user-show-bottom-text">+1 123 456 67</span>
                        </div>
                        <div className="user-show-bottom-info">
                            <LocationSearching className="user-show-bottom-icon" />
                            <span className="user-show-bottom-text">Addis Ababa | Ethiopia</span>
                        </div>
                    </div>
                </div>

                <div className="user-update">
                    <span className="user-update-title">Update User</span>
                    <form action="" className="user-update-form">
                        <div className="user-update-form-left">
                            <div className="user-update-form-left-item">
                                <label htmlFor="">Username</label>
                                <input className="user-update-form-left-input" type="text" placeholder="Username" />
                            </div>
                            <div className="user-update-form-left-item">
                                <label htmlFor="">Full Name</label>
                                <input className="user-update-form-left-input" type="text" placeholder="Full Name" />
                            </div>
                            <div className="user-update-form-left-item">
                                <label htmlFor="">Email</label>
                                <input className="user-update-form-left-input" type="text" placeholder="Email" />
                            </div>
                            <div className="user-update-form-left-item">
                                <label htmlFor="">Phone</label>
                                <input className="user-update-form-left-input" type="text" placeholder="Phone" />
                            </div>
                            <div className="user-update-form-left-item">
                                <label htmlFor="">Address</label>
                                <input className="user-update-form-left-input" type="text" placeholder="Address" />
                            </div>
                        </div>
                        <div className="user-update-form-right">
                            <div className="user-update-form-right-upload">
                                <img className='user-update-form-right-avatar' src="https://i.pravatar.cc/150?img=5" alt="" />
                                <label htmlFor="file"><Publish className='user-update-form-right-upload-icon' /></label>
                                <input className="user-update-form-right-input" id="file" type="file" style={{ display: 'none' }} />
                            </div>
                            <button className="user-update-form-button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
