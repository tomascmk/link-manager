/* eslint-disable import/no-anonymous-default-export */
//import update from 'react-addons-update';
//Types
import {
    SET_CARDS_DATA,
    GET_CARDS_DATA
} from '../../types/managerTypes/managerTypes';

const INITIAL_STATE = {
    cardsData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CARDS_DATA:
            return { ...state, cardsData: action.payload };

        case GET_CARDS_DATA:
            return { ...state, cardsData: action.payload };

        default:
            return state;
    }
};
