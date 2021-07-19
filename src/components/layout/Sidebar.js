import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './layout.scss';

export default function Navbar(props) {

    return (
        <nav className="sidebar">
            <div className="sidebar_logo">
                Holee
            </div>
            <div className="sidebar_content">
                Holass
            </div>
        </nav>
    )
}