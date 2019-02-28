import * as actionTyps from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
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
        // 和set效果相同, 只是可以设置多组值
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    }
    if(action.type === actionTyps.MOUSE_ENTER){
        return state.set('mouseIn', true);
    }
    if(action.type === actionTyps.MOUSE_LEAVE){
        return state.set('mouseIn', false);
    }
    if(action.type === actionTyps.CHANGE_PAGE){
        return state.set('page', action.page);
    }
    return state;
}