import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import './layout.scss';

export default function Layout(props) {

    return (
        <div className="layout">
            <div className="navContainer">
                {/* {!props.registered && (
                    <Sidebar />
                )} */}
                <Navbar />
            </div>
            <div className="appContent">
                {props.children}
            </div>
            <ToastContainer />
        </div>
    )
}

