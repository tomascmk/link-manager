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
    const [colorButtonSelected, setColorButtonSelected] = useState(undefined)

    const setDashStyles = (style, color) => {
        dispatch({ type: SET_STYLES, payload: { type: style.class, value: color, from: style.from, hover: style.hover } });

    }

    const getSection = (sect) => {
        switch (sect.type) {
            case 'color':

                return (
                    <div className="colorBox_colorContainer">
                        {sect.values.map(color => (
                            <button
                                id={color}
                                style={{ backgroundColor: `${color}` }}
                                className={`colorBox_btn`}
                                onClick={() => setDashStyles(sect, color)}
                            />
                        ))}
                        <input id="colorButtonSelected" type="color" onChange={event => setDashStyles(sect, event.currentTarget.value)} />
                    </div>

                )
            case 'font':

                return (
                    <div className="fontBox_fontContainer">
                        {sect.values.map(font => (
                            <div>
                                <button
                                    id={font}
                                    style={{ fontFamily: `${font}` }}
                                    className={`fontBox_fontBtn`}
                                    onClick={() => setDashStyles(sect, font)}
                                >
                                    <h1 className="fontBox_example">
                                        Aa
                                    </h1>
                                </button>
                                <h6 className="fontBox_example">
                                    {font}
                                </h6>
                            </div>
                        ))}
                    </div>

                )
            case 'button':

                return (
                    <div className="btnBox_btnContainer">
                        {sect.values.map(btn => (
                            <div>
                                <button
                                    id={btn}
                                    style={{ borderRadius: `${btn}` }}
                                    className={`btnBox_btnBtn`}
                                    onClick={() => setDashStyles(sect, btn)}
                                >
                                    <h6 className={`btnBox_btnBtn_description`}>{btn}</h6>
                                </button>
                            </div>
                        ))}
                    </div>)

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

