import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    SET_CARDS_DATA,
} from '../../redux/types/managerTypes/managerTypes';
// Json
import profileTemplate from '../../utils/json/profileTemplate.json'
import './mobileModel.scss';


export default function MobileModel(props) {
    const dispatch = useDispatch();
    const { cardsData } = useSelector(state => state.managerReducers);
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [components, setComponents] = useState([])
    const [profileData, setProfileData] = useState(profileTemplate)
    const [cards, setCards] = useState(cardsData)

    useEffect(() => {
        /* setMobileComponents() */
    }, [])
    useEffect(() => {
        /* setMobileComponents() */
    }, [cards])

    useEffect(() => {
        debugger
        console.log(`cardsData`, cardsData)
        setCards(cardsData)
    }, [cardsData])

    /*     const setMobileComponents = () => {
            let profileData = profileTemplate;
            debugger
            if (cards.length > 0) {
                cards.map(card => {
                    debugger
                    profileData.push({
                        ...card,
                        "borderRadius": "",
                        "borderColor": "#38E09B",
                        "backgroundColor": "#38E09B",
                    })
                })
            }
            setComponents(profileData)
        } */

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
                debugger
                if (!component.active) return;
                return (
                    <Link
                        className="mobileModel_button"
                        to={{
                            pathname: `${component.url}`,
                            state: {}
                        }}
                        target="_blank"
                        id={component.id}
                        style={{
                            color: component.color ?? '#ffffff',
                            backgroundColor: component.backgroundColor ?? '#000000',
                            borderRadius: component.borderRadius ?? '0px',
                            border: component.border ?? '',
                            borderColor: component.borderColor ?? 'transparent'
                        }}
                    >
                        {component.title}
                    </Link>
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

