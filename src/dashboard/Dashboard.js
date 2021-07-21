import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MobileModel from '../components/mobileModel/MobileModel'
import LinkDashboard from './linkDashboard/LinkDashboard';
import './dashboard.scss';

export default function Dashboard(props) {

    return (
        <div className="dashboard_container">
            {/* {props.children} */}

            {/* <div className="dashboard_dash">
                <h1>Holas</h1>
            </div> */}
            <div className="dashboard_dash">
                <LinkDashboard />
            </div>
            <div className="dashboard_mobile">
                <MobileModel />
            </div>
        </div>
    )
}

