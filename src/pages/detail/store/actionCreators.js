import axios from 'axios';
import * as constants from './constants';

const getDetailAction = (data)=>({
    type: constants.GET_DETAIL,
    data
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then((res) => {
                dispatch(getDetailAction(res.data.data));
            })
    }
}