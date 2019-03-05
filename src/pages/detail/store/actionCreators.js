import axios from 'axios';
import * as constants from './constants';

const getDetailAction = (data)=>({
    type: constants.GET_DETAIL,
    data
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id)
            .then((res) => {
                dispatch(getDetailAction(res.data.data));
            })
    }
}