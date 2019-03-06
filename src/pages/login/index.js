import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {

    render () {
        const { login } = this.props;

        console.log(login)

        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' 
                            ref={(input) => { this.account = input}}/>
                        <Input placeholder='密码' type='password'
                            ref={(input) => { this.password = input}}/>
                        <Button onClick={() => { this.props.doLogin(this.account, this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to='/'></Redirect>
        }
        
    }

}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    doLogin(accountElement, passwordElement){
        dispatch(actionCreators.login(accountElement.value, passwordElement.value));
    }
})

export default connect(mapState, mapDispatch)(Login);