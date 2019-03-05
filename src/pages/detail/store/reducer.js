import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action ) => {
    if(action.type === constants.GET_DETAIL){
        return state.merge({
            title: fromJS(action.data.title),
            content: fromJS(action.data.content)
        })
    }
    return state;
}