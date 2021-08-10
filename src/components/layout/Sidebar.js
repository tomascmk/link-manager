import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import notification from '../../assets/img/notification.svg'
import help from '../../assets/img/help.svg'
import logo from '../../assets/img/logo.svg'
import './layout.scss';

export default function Navbar(props) {

    return (
        <nav className="sidebar">
            <div className="sidebar_logo">
                <div className="sidebar_content_notification"></div>
                <ReactSVG src={logo} className="card_drag_icon" />
            </div>
            <div className="sidebar_content">
                <div className="sidebar_content_inner">
                    <ReactSVG src={help} className="sidebar_content_help" />
                    <ReactSVG src={notification} className="sidebar_content_notification" />
                    <div className="sidebar_content_pp"></div>
                </div>
            </div>
        </nav>
    )
}