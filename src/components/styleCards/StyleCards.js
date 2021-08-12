import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    SET_STYLES,
    SET_HOVER_STYLES
} from '../../redux/types/mobileTypes/mobileTypes';

import './styleCards.scss'

export default function StyleCards({ dash }) {
    const dispatch = useDispatch();
    const { mobileStyles } = useSelector(state => state.mobileReducers);

    const setDashStyles = (style, color) => {
        dispatch({ type: SET_STYLES, payload: { type: style.class, value: color, from: style.from } });

    }

    const getSection = (sect) => {
        switch (sect.type) {
            case 'color':

                return (
                    <div className="colorBox_container">
                        {sect.values.map(color => (
                            <button
                                id={color}
                                style={{ backgroundColor: `${color}` }}
                                className={`colorBox_btn`}
                                onClick={() => setDashStyles(sect, color)}
                            />
                        ))}
                    </div>

                )
            case 'font':

                return <div> {`${sect.type}`} </div>
            case 'button':

                return <div> {`${sect.type}`} </div>

            default:
                break;
        }
    }
    return (
        <div>
            <h2>{dash.title}</h2>
            <div>
                {getSection(dash)}
            </div>
        </div>
    )
}

