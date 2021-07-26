import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './mobileModel.scss';

let componentsArr = [
    {
        "type": "pp",
        "value": "https://assets.production.linktr.ee/ccc6ead3e8002b951f3fcf4adeb6d91dcf0d2e8b/images/background-styles/selector-waves.gif"
    },
    {
        "type": "title",
        "value": "Tomás Cormack"
    },
    {
        "type": "description",
        "value": "Hola soy tomas y esta es mi descripcion, Lorem ipsum dolor sit"
    }
]
export default function MobileModel(props) {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [components, setComponents] = useState([])
    const [cards, setCards] = useState(props.cards)

    useEffect(() => {
        setMobileComponents()
    }, [])

    const setMobileComponents = () => {
        if (props.cards.length > 0) {
            props.cards.map(card => {
                componentsArr.push({
                    "type": "button",
                    "id": card.id,
                    "borderRadius": "",
                    "borderColor": "#38E09B",
                    "backgroundColor": "#38E09B",
                    "url": card.url,
                    "value": card.title
                })
            })
        }
        setComponents(componentsArr)
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
                        {component.value}
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
                        {components.map(component => (<li className="mobileModel_list_li">{getComponents(component)}</li>))}
                    </ul>
                    <div className="mobileModel_footer">
                        <h6>Made with Link Manager</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

