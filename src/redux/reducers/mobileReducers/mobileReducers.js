/* eslint-disable import/no-anonymous-default-export */
//import update from 'react-addons-update';
//Types
import {
    SET_STYLES,
    SET_HOVER_STYLES,
} from '../../types/mobileTypes/mobileTypes';

const INITIAL_STATE = {
    mobileStyles: {
        "dash": {
            "backgroundColor": "#ffffff",
            "color": "#000000"
        },
        "profile": {
            "color": "#000000"
        },
        "buttons": {
            "backgroundColor": "#000000",
            "color": "#ffffff",
            "borderRadius": "0px",
            "border": "1px solid"
        }
    },
    mobileHoverStyles: {
        "dash": {
            "backgroundColor": "#000000",
            "color": "#000000"
        },
        "profile": {
            "color": "#ffffff"
        },
        "buttons": {
            "backgroundColor": "#ffffff",
            "color": "#000000",
            "borderColor": "#000000",
            "borderRadius": "0px",
            "border": "1px solid"
        }
    },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_STYLES:
            let stylesObj = state.mobileStyles;
            let hoverObj = state.mobileHoverStyles;
            action.payload.from.map(from => {
                action.payload.type.map(type => {
                    stylesObj[`${from}`][`${type}`] = action.payload.value;
                    if (action.payload.hover) {
                        hoverObj[`${from}`][`${type}`] = action.payload.value;
                    }
                })
            })
            return { ...state, mobileStyles: stylesObj, mobileHoverStyles: hoverObj };

        case SET_HOVER_STYLES:
            let hoverStylesObj = state.mobileHoverStyles;
            hoverStylesObj.buttons.background = action.payload.value;
            return { ...state, mobileHoverStyles: hoverStylesObj };
        default:
            return state;
    }
};
