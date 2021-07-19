import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MobileModel from '../components/mobileModel/MobileModel'

import './dashboard.scss';

export default function Dashboard(props) {

    return (
        <div className="dashboard_container">
            {props.children}
            <div className="dashboard_mobile">
                <MobileModel />
            </div>
        </div>
    )
}

