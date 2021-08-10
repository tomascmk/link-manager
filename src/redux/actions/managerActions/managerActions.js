//Manager Types
import {
    SET_CARDS_DATA,
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


