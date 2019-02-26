import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,
  Addition,
  Button,
  SearchWrapper
 } from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className = { props.focused ? 'focused': ''}
                onFocus={props.handInputFocus}
                onBlur={props.handInputBlur}
              ></NavSearch>
            </CSSTransition>

            <i className = { props.focused ? 'focused iconfont' : 'iconfont'}
          >&#xe617;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe601;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handInputFocus: () =>{
        const action = {
          type: 'search_focus'
        }
        dispatch(action);
      },
      handInputBlur: () => {
        const action = {
          type: 'search_blur'
        }
        dispatch(action);
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);