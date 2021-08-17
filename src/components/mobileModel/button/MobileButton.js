import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
// Redux
import { useSelector } from 'react-redux';
import fullHeart from '../../../assets/img/fullHeart.svg'
import '../mobileModel.scss';


export default function MobileButton({ component }) {

    const { mobileStyles, mobileHoverStyles } = useSelector(state => state.mobileReducers);
    const [onHoverStyle, setOnHoverStyle] = useState(mobileHoverStyles)
    const [previewStyle, setPreviewStyle] = useState(mobileStyles)
    const [stylestoUse, setDashStylesToUse] = useState(previewStyle)

    const setMobileStyles = (value) => {
        setDashStylesToUse(value)
    }

    return (
        <Link
            className={`mobileModel_button`}
            to={{
                pathname: `${component.url}`,
                state: {}
            }}
            target="_blank"
            id={component.id}
            onMouseEnter={() => setMobileStyles(onHoverStyle)}
            onMouseLeave={() => setMobileStyles(previewStyle)}
            style={{
                color: stylestoUse.buttons.color ?? '#ffffff',
                backgroundColor: stylestoUse.buttons.backgroundColor ?? '#000000',
                borderRadius: stylestoUse.buttons.borderRadius ?? '0px',
                border: stylestoUse.buttons.border ?? '',
                borderColor: stylestoUse.buttons.borderColor ?? 'transparent',
                fontFamily: stylestoUse.buttons.fontFamily,
            }}
        >
            {component.fav && (
                <ReactSVG src={fullHeart} className="mobileModel_button_fav" />
            )}
            {component.title}
        </Link>
    )
}

