import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './topBar.css'
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">AdminPanel</span>
                </div>
                <div className="top-right">
                    <div className="topbar-icon-container">
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Language />
                        <span className="top-icon-badge">3</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Settings />
                    </div>
                    <img
                        src='https://i.pravatar.cc/400?img=10'
                        // src="https://images.pexels.com/photos/3192/woman-girl-beauty-mask.jpg?cs=srgb&dl=pexels-breakingpic-3192.jpg&fm=jpg"
                        alt=""
                        className="topbar-avatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
