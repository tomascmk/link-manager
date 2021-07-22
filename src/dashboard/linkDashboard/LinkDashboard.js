import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Card from '../../components/card/Card';
import config from '../../assets/img/config.svg'
import './linkDashboard.scss'

export default function LinkDashboard(props) {

    return (
        <div className="linkDash">
            <div className="linkDash_container">
                <div className="linkDash_buttons">
                    <button className="linkDash_buttons_add">
                        Add New Link
                    </button>
                    <button className="linkDash_buttons_config">
                        <ReactSVG src={config} className="linkDash_buttons_config_svg" />
                    </button>
                </div>
                <div className="linkDash_cards">

                    <Card />
                </div>
            </div>
        </div>
    )
}

