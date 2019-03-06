import axios from 'axios';
import * as constants from './constants';


const changeLogin = (loginStatus) => ({
    type: constants.CHANGE_LOGIN,
    data: loginStatus
});

export const login = (account, password) => {
    return (dispatch)=> {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
            .then((res) => {
                if(res.data.data){
                    dispatch(changeLogin(true))
                }else{
                    console.log('login failed');
                }
            });
        
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogin(false));
    }
}