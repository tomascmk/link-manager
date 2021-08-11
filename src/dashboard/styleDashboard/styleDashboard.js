import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styleDashboard.scss';

import StyleCards from '../../components/styleCards/StyleCards'
// Json
import dashStyles from '../../utils/json/dashStyles.json'

export default function LinkDashboard() {

    return (
        <div className="styleDash_container">
            <div className="styleDash_inner">
                {dashStyles.map(dash => (
                    <StyleCards dash={dash} />
                ))}
            </div>
        </div>
    )
}

