import React from 'react';
import './User.css';

const User = () => {
    return (
        <div className='user'>
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <button className="add-user-btn">Add User</button>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="https://i.pravatar.cc/150?img=5" alt="" className="user-show-avatar" />
                        <div className="user-show-info">
                            <span className="user-show-username">Alice Blue</span>
                            <span className="user-show-job">Software Developer</span>
                        </div>
                        <div className="user-show-bottom">

                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <h1>Jirta</h1>
                </div>
            </div>
        </div>
    );
};

export default User;
