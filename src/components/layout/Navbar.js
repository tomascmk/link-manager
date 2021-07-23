import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './layout.scss';

const optionObj = {
    "registered": [
        {
            "label": "Links",
            "url": "/dash/links",
        },
        {
            "label": "Appearance",
            "url": "/dash/appearance",
        },
        {
            "label": "Settings",
            "url": "/dash/settings",
        },
    ],
    "notRegistered": [

    ]
}
export default function Navbar({ registered }) {
    // Cuando tengamos el sign in tendria que ser registered NO !registered
    const [options, setOptions] = useState(!registered ? optionObj.registered : optionObj.notRegistered)
    const [pathName, setPathName] = useState(window.location.pathname)

    return (
        <nav className="navbar">
            <ul className="navbar_list">
                {options.map(option => (
                    <li className={`navbar_list_li ${pathName === option.url ? 'li-active' : ''}`}>
                        <Link
                            className={`navbar_list_btn`}
                            to={{
                                pathname: `${option.url}`,
                                state: {}
                            }}
                            onClick={() => setPathName(option.url)}
                        >
                            {option.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}