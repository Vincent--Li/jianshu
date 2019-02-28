import * as actionTyps from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action ) => {
    if(action.type === actionTyps.SEARCH_FOCUS){
        // immutable 对象的set方法, 会结合之前immutable对象的值, 返回一个全新的对象
        return state.set('focused', true);
    }
    if(action.type === actionTyps.SEARCH_BLUR){
        return state.set('focused', false)
    }
    if(action.type === actionTyps.CHANGE_LIST){
        return state.set('list', action.data)
    }
    return state;
}