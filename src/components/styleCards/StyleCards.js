import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styleCards.scss'

export default function StyleCards({ dash }) {

    const setStyles = (style, color) => {
        console.log(`style`, style, `${color}`)
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
                                onClick={() => setStyles(sect.class, color)}
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

