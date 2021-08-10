import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    SET_CARDS_DATA,
} from '../../redux/types/managerTypes/managerTypes';
import {
    SET_STYLES,
    SET_HOVER_STYLES
} from '../../redux/types/mobileTypes/mobileTypes';
import MobileButton from './button/MobileButton';
// Json
import profileTemplate from '../../utils/json/profileTemplate.json'
import './mobileModel.scss';


export default function MobileModel(props) {
    const dispatch = useDispatch();
    const { cardsData } = useSelector(state => state.managerReducers);
    const { mobileStyles, mobileHoverStyles } = useSelector(state => state.mobileReducers);
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [components, setComponents] = useState([])
    const [profileData, setProfileData] = useState(profileTemplate)
    const [cards, setCards] = useState(cardsData)
    const [onHoverStyle, setOnHoverStyle] = useState(mobileHoverStyles)
    const [previewStyle, setPreviewStyle] = useState(mobileStyles)
    const [stylestoUse, setStylesToUse] = useState(previewStyle)

    useEffect(() => {
        /* setMobileComponents() */
    }, [])
    useEffect(() => {
        /* setMobileComponents() */
    }, [cards])

    useEffect(() => {
        console.log(`cardsData`, cardsData)
        setCards(cardsData)
    }, [cardsData])

    const setMobileStyles = (value) => {
        setStylesToUse(value)
    }

    const getComponents = (component) => {
        switch (component.type) {
            case 'pp':
                return (
                    <div className="mobileModel_ppContainer">
                        <div
                            className="mobileModel_pp"
                            style={{
                                backgroundImage: `url(${component.value})`
                            }}
                        >

                        </div>
                    </div>
                )
            case 'title':
                return <h4 className="mobileModel_title">{component.value}</h4>
            case 'description':
                return <p className="mobileModel_description">{component.value}</p>
            case 'button':
                if (!component.active) return;
                return (
                    <MobileButton component={component} />
                )
            default:
                break;
        }
    }

    return (
        <div className="mobileModel_container">
            <div
                className="mobileModel_mobile"
                style={{
                    backgroundColor: backgroundColor,
                    backgroundImage: `url(${''})`
                }}
            >
                <div className="mobileModel_inner">
                    <ul className="mobileModel_list">
                        {profileData.profile.map(profile => (<li className="mobileModel_list_li">{getComponents(profile)}</li>))}
                        {cards.map(card => (<li className="mobileModel_list_li">{getComponents(card)}</li>))}
                    </ul>
                    <div className="mobileModel_footer">
                        <h6>Made with Link Manager</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

