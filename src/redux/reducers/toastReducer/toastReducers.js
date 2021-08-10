//Types
import { TOAST_MSG, TOAST_CLEAN } from '../../types/dashboardTypes';

const INITIAL_STATE = {
    msg: '',
    type: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOAST_MSG:
            return { ...state, type: action.payload.type, msg: action.payload.msg };
        case TOAST_CLEAN:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};