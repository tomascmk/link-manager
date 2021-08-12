//Manager Types
import {
    SET_STYLES,
    SET_HOVER_STYLES,
} from '../../types/managerTypes/managerTypes';

export const setDashStyles = value => dispatch => {
    try {
        dispatch({
            type: SET_STYLES,
            payload: value
        });
    } catch (error) {
        console.log(error);
    }
};
export const setHoverDashStyles = value => dispatch => {
    try {
        dispatch({
            type: SET_HOVER_STYLES,
            payload: value
        });
    } catch (error) {
        console.log(error);
    }
};
