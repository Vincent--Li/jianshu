import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action ) => {
    if(action.type === constants.CHANGE_LOGIN){
        return state.set('login', action.data);
    }

    return state;
}