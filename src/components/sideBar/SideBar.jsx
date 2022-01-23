import { AttachMoney, ChatBubbleOutline, DynamicFeed, Home, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Dashboard
                    </h3>
                    <ul className="sidebar-list">
                        <Link to="/" className="link">
                            <li className="sidebar-list-item active">
                                <LineStyle className="sidebar-list-icon" />
                                <span className="sidebar-list-title">Home</span>
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <Timeline className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Analytics</span>
                        </li>
                        <li className="sidebar-list-item">
                            <TrendingUp className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Sales</span>
                        </li>
                    </ul>
                    <h3 className="sidebar-title">
                        Quick Menu
                    </h3>
                    <ul className="sidebar-list">
                        <Link to="users" className="link">
                            <li className="sidebar-list-item">
                                <PermIdentity className="sidebar-list-icon" />
                                <span className="sidebar-list-title">Users</span>
                            </li>
                        </Link>
                        <Link to="products" className="link">
                            <li className="sidebar-list-item">
                                <Storefront className="sidebar-list-icon" />
                                <span className="sidebar-list-title">Products</span>
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <AttachMoney className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Transactions</span>
                        </li>
                    </ul>
                    <h3 className="sidebar-title">
                        Notifications
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <MailOutline className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Mail</span>
                        </li>
                        <li className="sidebar-list-item">
                            <DynamicFeed className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Feedback</span>
                        </li>
                        <li className="sidebar-list-item">
                            <ChatBubbleOutline className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Messages</span>
                        </li>
                    </ul>
                    <h3 className="sidebar-title">
                        Staff
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <WorkOutline className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Manage</span>
                        </li>
                        <li className="sidebar-list-item">
                            <Timeline className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Analytics</span>
                        </li>
                        <li className="sidebar-list-item">
                            <Report className="sidebar-list-icon" />
                            <span className="sidebar-list-title">Report</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
