import { combineReducers } from 'redux';

//Manager Reducer
import managerReducers from './managerReducers/managerReducers';
//Mobile Reducer
import mobileReducers from './mobileReducers/mobileReducers';

export default combineReducers({
    managerReducers,
    mobileReducers
});
