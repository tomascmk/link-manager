import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './mobileModel.scss';

const components = [
    {
        "id": "pp",
        "value": "https://assets.production.linktr.ee/ccc6ead3e8002b951f3fcf4adeb6d91dcf0d2e8b/images/background-styles/selector-waves.gif"
    },
    {
        "id": "title",
        "value": "Tomás Cormack"
    },
    {
        "id": "description",
        "value": "Hola soy tomas y esta es mi descripcion, Lorem ipsum dolor sit"
    },
    {
        "id": "button",
        "borderRadius": "",
        "borderColor": "#38E09B",
        "backgroundColor": "#38E09B",
        "url": "https://www.google.com",
        "value": "Google"
    }
]
export default function MobileModel(props) {
    const [backgroundColor, setBackgroundColor] = useState('white')

    const getComponents = (component) => {
        switch (component.id) {
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
                console.log(`component.backgroundColor`, `calc(80vh * (${component.borderRadius} / 100vh))`)
                return (
                    <Link
                        className="mobileModel_button"
                        to={{
                            pathname: `${component.url}`,
                            state: {}
                        }}
                        target="_blank"
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
                        {components.map(component => (<li>{getComponents(component)}</li>))}
                    </ul>
                    <div className="mobileModel_footer">
                        <h6>Made with Link Manager</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

