import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import MobileButton from './button/MobileButton';
// Json
import profileTemplate from '../../utils/json/profileTemplate.json'
import './mobileModel.scss';


export default function MobileModel(props) {

    const { cardsData } = useSelector(state => state.managerReducers);
    const { mobileStyles } = useSelector(state => state.mobileReducers);
    const [profileData, setProfileData] = useState(profileTemplate)
    const [cards, setCards] = useState(cardsData)
    const [stylestoUse, setDashStylesToUse] = useState(mobileStyles)

    useEffect(() => {
        /* setMobileComponents() */
    }, [])
    useEffect(() => {
        /* setMobileComponents() */
    }, [cards])

    useEffect(() => {
        setCards(cardsData)
    }, [cardsData])

    const getComponents = (component) => {
        switch (component.type) {
            case 'pp':
                return (
                    <div className="mobileModel_ppContainer">
                        <div
                            className="mobileModel_pp"
                            style={{
                                backgroundImage: `url(${component.value})`,
                                fontFamily: stylestoUse.profile.fontFamily,
                            }}
                        >

                        </div>
                    </div>
                )
            case 'title':
                return <h4
                    className="mobileModel_title"
                    style={{
                        color: stylestoUse.profile.color,
                        fontFamily: stylestoUse.profile.fontFamily,
                    }}
                >
                    {component.value}
                </h4>
            case 'description':
                return <p
                    className="mobileModel_description"
                    style={{
                        color: stylestoUse.profile.color,
                        fontFamily: stylestoUse.profile.fontFamily,
                    }}
                >
                    {component.value}
                </p>
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
                    color: stylestoUse.dash.color,
                    backgroundColor: stylestoUse.dash.backgroundColor,
                    backgroundImage: `url(${''})`
                }}
            >
                <div className="mobileModel_inner">
                    <ul className="mobileModel_list">
                        {profileData.profile.map(profile => (<li className="mobileModel_list_li">{getComponents(profile)}</li>))}
                        {cards.map(card => (<li className="mobileModel_list_li">{getComponents(card)}</li>))}
                    </ul>
                    <div className="mobileModel_footer">
                        <h6
                            style={{
                                color: stylestoUse.dash.color
                            }}
                        >
                            Made with Link Manager
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

