/* eslint-disable import/no-anonymous-default-export */
//import update from 'react-addons-update';
//Types
import {
    SET_STYLES,
    SET_HOVER_STYLES
} from '../../types/mobileTypes/mobileTypes';

const INITIAL_STATE = {
    mobileStyles: {
        "dash": {
            "backgroundColor": "#000000"
        },
        "profile": {
            "color": "#ffffff"
        },
        "buttons": {
            "backgroundColor": "#000000",
            "color": "#ffffff",
            "borderColor": "#000000",
            "borderRadius": "0px",
            "border": "1px solid"
        }
    },
    mobileHoverStyles: {
        "dash": {
            "backgroundColor": "#000000"
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
            stylesObj.styles = action.payload;
            return { ...state, mobileStyles: stylesObj };

        case SET_HOVER_STYLES:
            let hoverStylesObj = state.mobileHoverStyles;
            hoverStylesObj.hoverStyles = action.payload;
            return { ...state, mobileHoverStyles: hoverStylesObj };

        default:
            return state;
    }
};
