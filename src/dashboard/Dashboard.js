import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MobileModel from '../components/mobileModel/MobileModel'
import LinkDashboard from './linkDashboard/LinkDashboard';
import './dashboard.scss';

export default function Dashboard(props) {
    /*     const [cards, setCards] = useState([]);

        useEffect(() => {
        }, [cards])

        const handleCards = (value) => {
            setCards(value);
        } */
    return (
        <div className="dashboard_container">
            {/* {props.children} */}

            {/* <div className="dashboard_dash">
                <h1>Holas</h1>
            </div> */}
            <div className="dashboard_dash">
                {/* <LinkDashboard />  */}{/* handleCards={value => handleCards(value)} */}
                {props.children}
            </div>
            <div className="dashboard_mobile">
                <MobileModel /> {/* cards={cards} */}
            </div>
        </div>
    )
}

