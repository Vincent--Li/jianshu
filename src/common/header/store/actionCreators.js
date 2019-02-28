import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';


const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type : actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

// redux thunk的使用方式
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data));
            })
            .catch(()=>{
                console.log('error');
            })
        
    }
}