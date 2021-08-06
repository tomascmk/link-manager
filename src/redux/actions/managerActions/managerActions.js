//Manager Types
import {
    SET_CARDS_DATA,
    GET_CARDS_DATA
} from '../../types/managerTypes/managerTypes';

export const setCardsData = value => dispatch => {
    try {
        dispatch({
            type: SET_CARDS_DATA,
            payload: value
        });
    } catch (error) {
        console.log(error);
    }
};

export const getCardsData = value => dispatch => {
    try {
        dispatch({
            type: GET_CARDS_DATA,
            payload: value
        });
    } catch (error) {
        console.log(error);
    }
};

