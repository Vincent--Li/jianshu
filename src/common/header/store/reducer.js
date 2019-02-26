import * as actionTyps from './constants';

const defaultState = {
    focused: false
}

export default (state = defaultState, action ) => {
    if(action.type === actionTyps.SEARCH_FOCUS){
        return {
            focused: true
        }
    }
    if(action.type === actionTyps.SEARCH_BLUR){
        return { 
            focused: false
        }
    }
    return state;
}